import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { doc, query, collection, getDocs, where, updateDoc, getDoc } from "firebase/firestore";
import './CaseDetail.css'
import Comment from "./Comment";
import Bookmark from '../img/bookmark.svg'
import Bookmark2 from '../img/bookmark2.svg'
import DefaultProfile from '../img/defaultProfile.svg'
//-------------------------------------------------

function CaseDetail({caseId}) {
  const [user, loading, error] = useAuthState(auth);
  const [singleUserID, setUsers] = useState("")
  const [name, setName] = useState("");
  const [cases, setCases] = useState([]);
  const [followState, setFollowState] = useState(false)
  const [followedCases, setFollowing] = useState([]);
  const navigate = useNavigate();
  const casesCollectionRef = collection(db, "cases") // establish connection to db & collection
  const userCollectionRef = collection(db, "users")
  let i = 0;

  
  const [comm, setCom] = useState("")

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
  // const getCases = async () => {
  //   const q = query(casesCollectionRef, where("Offense","==",`Hit and Run`))
  //   const data = await getDocs(q)
  //   setCases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  // }

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
    //console.log(tempUser[0]['id'])

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
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
    //getCases();
    getUsers();
  }, [user, loading]);

  return (
    <>
    
    <div className='case-detail-background'>
        <div className='case-title'>
          {caseId?.Name}
          {console.log(followedCases)}
        </div>
        <div className='case-tag'>
            <div className='case-tag-description'>
              {caseId?.["Offense"] == 'Missing Person (Presumed Murdered)' ? "MISSING PERSON" : (caseId?.["Offense"] == 'Manslaughter/ Non-Negligent' ? "MANSLAUGHTER" : caseId?.["Offense"].toUpperCase())}
            </div>
          </div>

          <div className='case-decription'>
            <ul>
              <li>{"Age: " + caseId?.Age}</li>
              <li>{"Offense: " + caseId?.Offense}</li>
              <li>{"Race: " + caseId?.Race}</li>
              <li>{"Current Location: " + caseId?.Location}</li>
            </ul>
            <br/>
            
          
            <br/>
            <div className='description-title'> CASE FILE:</div>
            <br/>
            <br/>
            <div className='txt-underline'>
              {caseId?.["Name"] == "Temoc" ? <a className="temoc" href='https://twitter.com/Official_Temoc' target="_blank" > Temoc's Twitter </a> : "None"}
            </div>

            <br/> <br/>
            <div className='description-title'> COMMENTS: </div>
          </div>

          <div className='case-stats'> 
              DATE:  <br/>
            <div className='txt-color'>03/12/18</div>
              <br/>
              <br/>
              LAST UPDATED:  <br/>
            <div className='txt-color'>06/28/21</div>
              <br/>
              <br/>
              LOCATION: <br/>
              <div className='txt-color'>{caseId?.['Incident Location']}</div>
          </div>

        
        <div className='divider'>
        </div>


        <div className='lined-comment-container'>

       

        <div className='comment-container'>
          {caseId?.["comments"].map((newComment) => {
            return <Comment cmnt={newComment} />
          })}
        </div>

        </div> 




        {/*comment bar code*/}

      <ul className="comment-bar">
        <li><input
          type="text"
          name="comment-bar"
          id="comment-bar"
          placeholder="Write a comment"
          onChange={(e) => { setCom(e.target.value) }}
        />

        <input
          type="text"
          name="comment-bar"
          id="comment-bar2"
        /></li>
    

    
        <li><button className="send-button" onClick={()=>{addComment(caseId.id)}}>Send</button></li>
      </ul> 


       
    </div>

    </>
  )
}

export default CaseDetail