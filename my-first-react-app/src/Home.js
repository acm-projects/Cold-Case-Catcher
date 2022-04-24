import React from 'react';
import Header from './components/Header'
import Searchbar from "./components/Searchbar";
import Tag from "./components/Tag";
import Card from "./components/Card"; 
import GlobalStyle from './GlobalStyle';
import Side from "./components/Sidebar"

import styled from 'styled-components';

import bg from './img/bg.svg';
import Sidebar from './components/Sidebar';

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { doc, query, collection, getDocs, where, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'
import Case from './CasePage';
import { useLocation } from 'react-router-dom';
import Toggler from './Toggler';
import './components/Tag.css'


function Home() {
  const [user, loading, error] = useAuthState(auth);
  const [singleUserID, setUsers] = useState("")
  const [name, setName] = useState("");
  const [cases, setCases] = useState([]);
  const [hitRunCases, setHitRunCases] = useState([]);
  const [manslaughterCases, setManslaughterCases] = useState([]);
  const [missPersonCases, setMissPersonCases] = useState([]);
  const [rapeMurderCases, setRapeMurderCases] = useState([]);
  const [susDeathCases, setSusDeathCases] = useState([]);
  const [followState, setFollowState] = useState(false)
  const [followedCases, setFollowing] = useState([]);
  const navigate = useNavigate();
  const casesCollectionRef = collection(db, "cases") // establish connection to db & collection
  const userCollectionRef = collection(db, "users")
  const [tempCases, setTempCases] = useState([])
  let ctr = 0;
  let hrctr = 0;
  let mctr = 0;
  let rmctr = 0;
  let mpctr = 0;
  let susctr = 0;

  
  const [mansLState, setManslState] = useState(false)
  const [hitRunState, setHitRunState] = useState(false)
  const [rmState, setRMState] = useState(false)
  const [mpState, setMPState] = useState(false)
  const [sdState, setSDState] = useState(false)
  const [noneState, setNoneState] = useState(true)

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
  const getHitRunCases = async () => {
    const q = query(casesCollectionRef, where("Offense","==",`Hit and Run`))
    const data = await getDocs(q)
    setHitRunCases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const getManslaughterCases = async () => {
    const q = query(casesCollectionRef, where("Offense","==",`Manslaughter/ Non-Negligent`))
    const data = await getDocs(q)
    setManslaughterCases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const getMissPersonCases = async () => {
    const q = query(casesCollectionRef, where("Offense","==",`Missing Person (Presumed Murdered)`))
    const data = await getDocs(q)
    setMissPersonCases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const getRapeMurderCases = async () => {
    const q = query(casesCollectionRef, where("Offense","==",`Rape/Murder`))
    const data = await getDocs(q)
    setRapeMurderCases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const getSusDeathCases = async () => {
    const q = query(casesCollectionRef, where("Offense","==",`Suspicious Death`))
    const data = await getDocs(q)
    setSusDeathCases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
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
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    //fetchUserName();
    console.log(user?.name)
    getManslaughterCases();
    getMissPersonCases();
    getSusDeathCases();
    getHitRunCases();
    getRapeMurderCases();
    getUsers();
    setTempCases(cases)
  }, [user, loading]);

  const dispCases = async (crime) =>{
    const q = query(casesCollectionRef, where("Offense","==",`${crime}`))
    const data = await getDocs(q)
    let returnedCases = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setCases( [...cases, ...returnedCases])
    console.log(cases)
  }

  const filterCases = async(crime) =>{
    setCases(cases.filter((theCase)=>theCase['Offense'] !== crime))
  }

  const filterPosts = (tempCases, q) => {
    if (!q) {
        return tempCases;
    }
    // Filter cases that have the right name
    return tempCases.filter((tempCase) => {
        const postName = tempCase['Name'].toLowerCase();
        return postName.includes(q) || tempCase['Name'].includes(q);
    })
  }

  const { search } = window.location;
  const qry = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(qry || '');
  // Filter posts
  const filteredPosts = filterPosts(tempCases, qry);

  const forDemo = (caseName, caseArray) => {
    return (caseArray[0] == caseName || caseArray[1] == caseName || caseArray[2] == caseName)
  }

  return (
    <HomeStyled>
    <GlobalStyle />
    <Sidebar />
    <div className='home'>
      <Header />
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <div className="parent-contain">
        {
          hitRunCases.map((newCase) => {
            if((searchQuery=="" || newCase?.["Name"].toUpperCase().includes(searchQuery.toUpperCase())) && forDemo(newCase, hitRunCases) && ctr<3 && hrctr<3 && (hitRunState || noneState)) return (
                <div>
                  <Link to='/casepage' state={newCase}>
                    {console.log(newCase?.id)}
                    <Card cardProp={newCase} num={++ctr} /> 
                  </Link>
                </div>
            )
        })}
        
        {
          manslaughterCases.map((newCase) => {
            if((searchQuery=="" || newCase?.["Name"].toUpperCase().includes(searchQuery.toUpperCase())) && forDemo(newCase, manslaughterCases) && ctr<6 && mctr<3 && (mansLState || noneState)) return (
                <div> 
                  <Link to='/casepage' state={newCase}>
                    <Card cardProp={newCase} num={++ctr} /> 
                  </Link>
                </div>
            )
        })
        }

        {
          missPersonCases.map((newCase) => {
            if((searchQuery=="" || newCase?.["Name"].toUpperCase().includes(searchQuery.toUpperCase())) && forDemo(newCase, missPersonCases) && ctr<9 && mpctr<3 && (mpState || noneState)) return (
                <div>
                  <Link to='/casepage' state={newCase}>
                    <Card cardProp={newCase} num={++ctr} /> 
                  </Link>
                </div>
            )
        })
        }

        {
          rapeMurderCases.map((newCase) => {
            if((searchQuery=="" || newCase?.["Name"].toUpperCase().includes(searchQuery.toUpperCase())) && forDemo(newCase, rapeMurderCases) && ctr<12 && rmctr<3 && (rmState || noneState)) return (
                <div>
                  <Link to='/casepage' state={newCase}>
                    <Card cardProp={newCase} num={++ctr} /> 
                  </Link>
                </div>
            )
        })
        }

        {
          susDeathCases.map((newCase) => {
            if((searchQuery=="" || newCase?.["Name"].toUpperCase().includes(searchQuery.toUpperCase())) && forDemo(newCase, susDeathCases) && ctr<15 && susctr<3 && (sdState || noneState)) return (
                <div>
                  <Link to='/casepage' state={newCase}>
                    <Card cardProp={newCase} num={++ctr} /> 
                  </Link>
                </div>
            )
        })
        }

        {console.log(ctr)}
      </div>
      
      <div className="parent-container">
        <div className="background-container">
            <div className="title">
                    TAGS
            </div>
            <div className="line">
            </div>

        <div className="master-tags">
                  <button className="murder" >
                        FOLLOWING
                  </button>

                  <button className="hit-run" onClick={()=> {
            if(hitRunState === false){
              setHitRunState(true)
              dispCases("Hit and Run")
            }
            else{
              setHitRunState(false)
              filterCases("Hit and Run")
            }
            
          }}>
                        HIT-RUN
                  </button>
            
                  <button className="manslaughter" onClick={()=> {
            if(mansLState === false){ setManslState(true); dispCases("Manslaughter/ Non-Negligent")}
            else { setManslState(false); filterCases("Manslaughter/ Non-Negligent")}
            
          }}>
                        MANSLAUGHTER
                  </button>

                  <button className="missPer" onClick={()=> {
            if(mpState === false){ setMPState(true); dispCases("Missing Person (Presumed Murdered)")}
            else { setMPState(false); filterCases("Missing Person (Presumed Murdered)")}
            
          }}>
                        MISSING PERSON
                  </button>

                  <button className="susDeath" onClick={()=> {
            if(sdState === false){ setSDState(true); dispCases("Suspicious Death")}
            else { setSDState(false); filterCases("Suspicious Death")}
            
          }}>
                        SUSPICIOUS DEATH
                  </button>


                  <button className="following" onClick={()=> {
            if(rmState === false){ setRMState(true); dispCases("Rape/Murder")}
            else { setRMState(false); filterCases("Rape/Murder")}
            
          }}>
                        RAPE/MURDER
                  </button>

                  <button className="none" onClick={()=> {
                    if (noneState === false) {
                    setHitRunState(true)
                    setMPState(true)
                    setManslState(true)
                    setRMState(true)
                    setSDState(true)
                    setNoneState(true)
                    } else {
                      setHitRunState(false)
                    setMPState(false)
                    setManslState(false)
                    setRMState(false)
                    setSDState(false)
                    setNoneState(false)
                    }
                  }}>
                        NONE
                  </button>

            </div>

            </div>
          
          
            
        </div>
    </div>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  .fix-z-order {
    color: transparent;
  }
`;
export default Home;