import React, { useEffect, useState } from "react";
import Header from './components/Header'
import ProfileDetail from './components/ProfileDetail'
import Sidebar from './components/Sidebar';
import GlobalStyle from './GlobalStyle';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { doc, query, collection, getDocs, where, updateDoc } from "firebase/firestore";
import Dashboard from "./Dashboard";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SecondaryButton from './components/SecondaryButton'

function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const [singleUserID, setUsers] = useState("")
  const [name, setName] = useState("");
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
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    fetchUserName();
    //getCases();
    getUsers();
  }, [user, loading]);

  return (
    <ProfileStyled>
    <GlobalStyle />
    <Sidebar />
    <Header />
    <div className="fix-profile-card">
      <ProfileDetail fullName={name} userId={user}/>
    </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`

.styled-logout {
  display: flex;
  margin-top: -5rem;
  margin-left: 70rem;
  position: absolute;
}

  .fix-profile-card {
    margin-top: 5rem;
  }
`;

export default Profile;