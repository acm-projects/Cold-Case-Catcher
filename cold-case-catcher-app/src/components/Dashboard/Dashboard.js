import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../../firebase";
import { doc, query, collection, getDocs, where, updateDoc, getDoc } from "firebase/firestore";
import CommentBox from "../CommentBox";
export const Dashboard = () => {

  const [user, loading, error] = useAuthState(auth);
  const [singleUserID, setUsers] = useState("")
  const [name, setName] = useState("");
  const [comm, setCom] = useState("")
  const [cases, setCases] = useState([]);
  const [followState, setFollowState] = useState(false)
  const [followedCases, setFollowing] = useState([]);
  const navigate = useNavigate();
  const casesCollectionRef = collection(db, "cases") // establish connection to db & collection
  const userCollectionRef = collection(db, "users")

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  // Get cases
  const getCases = async () => {
    const q = query(casesCollectionRef, where("Offense", "==", `Hit and Run`))
    const data = await getDocs(q)
    setCases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  /*
  * Note: singleUserID is the id of the document. We need it to write/read
          back to the databse for that specific user. Attained in getUsers()
  */
  const handleFollow = async (caseID) => {
    console.log(caseID)
    console.log(user?.id)

    let currCases = followedCases
    if (currCases.includes(caseID)) {
      // filter from the state variable
      setFollowing(followedCases.filter(fCase => {
        return (
          fCase != caseID
        )
      }))

      // remove doc from firebase
      const q = query(userCollectionRef, where("uid", "==", `${user.uid}`))
      const data = await getDocs(q)
      // get contents
      let returnedCases = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      let followingArr = returnedCases[0]['following']
      // filter out that case
      followingArr = followingArr.filter(fCase => fCase != caseID)
      // create new following object
      let newField = { following: followingArr }
      // update contents
      const userDoc = doc(db, "users", singleUserID)
      updateDoc(userDoc, newField)
    }

    else {
      setFollowing([...followedCases, caseID])

      // query for that document w/ user uid field
      const q = query(userCollectionRef, where("uid", "==", `${user.uid}`))
      const data = await getDocs(q)
      // get contents
      let returnedCases = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      //  extract following array & append contents to our array 
      let followingArr = returnedCases[0]['following']
      followingArr = [...followingArr, caseID]
      // create new object field with updated array
      let newField = { following: followingArr }

      // update firebase following
      const userDoc = doc(db, "users", singleUserID)
      updateDoc(userDoc, newField)
      console.log(followingArr)
    }
    // console.log(followedCases)
  }

  const getUsers = async () => {
    // Try to get the specific document ID of the signed in person
    const data = await getDocs(userCollectionRef)
    let tempUsers = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    let tempUser = tempUsers.filter(theUser => theUser.uid == user?.uid)
    setUsers(tempUser[0]['id'])
    console.log(tempUser[0]['id'])

  }


  // Displays following cases from firebase itself
  const displayFollowing = async () => {
    const q = query(userCollectionRef, where("uid", "==", `${user.uid}`))
    const data = await getDocs(q)

    let returnedCases = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    let followingArr = returnedCases[0]['following']
    // sets our following state variable to the returned items 
    setFollowing(followingArr)
  }

  // Method to add comment 
  const addComment = async (caseID)=>{

    console.log(comm)
    console.log(user?.name)
    // creates new comment
    let newComment = {comment: comm, username: name, timestamp: new Date().toLocaleString()}
    console.log(caseID)
    // gets that case whose caseID was passed in the arg
    const docRef = doc(db, "cases", caseID)
    // gets the that case from firebase
    const data = await getDoc(docRef)
    // assigns that cases comments to a variable called comments
    let comments = data.data()['comments']
    let newCommentField = [...comments, newComment]
    const newField = {comments: newCommentField}
    // update doc
    updateDoc(docRef, newField)
    console.log(newCommentField)
}
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
    getCases();
    getUsers();
  }, [user, loading]);

  return (
    <div>
      <div className="dashboard">
        <div className="dashboard__container">
          Logged in as
          <div>{name}</div>
          <div>{user?.email}</div>
          <div>{user?.uid}</div>
          <Link className="dashboard__btn" onClick={logout} to={"/"}>
            Logout
          </Link>
        </div>

        <button onClick={() => {
          // checks if we are toggling the followed cases
          if (followState === false) {
            setFollowState(true)
            displayFollowing()
          } else {
            setFollowState(false)
            setFollowing([])
          }
        }}>Display Following</button>

      </div>

      {followedCases.map((fCase) => {
        // maps the followed cases
        return (
          <div>
            <h1>SALMAN</h1>
            <h1>Following Case ID: {fCase}</h1>
            <button onClick={() => { handleFollow(fCase) }}> follow </button>

          </div>
        )
      })}

      {cases.map((newCase) => {
        return (
          <div>
            <h1></h1>
            <h1>Name: {newCase['Name']}</h1>
            <h1>Story: {newCase['id']}</h1>

            <button onClick={() => { handleFollow(newCase.id) }}> follow </button>

            <div>
            {newCase['comments'].map((commData) => {
              return (
                <CommentBox caseID={newCase['id']} commentData={commData}/>
              )
            })}
            {/* Button to post comment */}
            <div>
                <input type="text" placeholder="Type your comment here" onChange={(e) => { setCom(e.target.value) }}></input>
                <button onClick={()=>{addComment(newCase.id)}}> Post Comment</button>
            </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Dashboard;