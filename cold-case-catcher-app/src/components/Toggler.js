import '../App.css';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, doc, query, where, getDocs,  addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
const Toggler = () => {

    // State variables
    const [cases, setCases] = useState([])
    const [newTitle, setTitle] = useState("")
    const [newDate, setDate] = useState("")
    const [newStory, setStory] = useState("")
    // Toggler States
    const [mansLState, setManslState] = useState(false)
    const [hitRunState, setHitRunState] = useState(false)
    const [rmState, setRMState] = useState(false)
    const [murderState, setMState] = useState(false)
    const [mpState, setMPState] = useState(false)
    const [sdState, setSDState] = useState(false)
  
    // Collection reference
    const casesCollectionRef = collection(db, "cases") // establish connection to db & collection
  
    // Retrieves cases with getDocs & our collection reference
    const getCases = async (crime = "Hit and Run") => {
      const q = query(casesCollectionRef, where("Offense","==",`${crime}`))
      const data = await getDocs(q)
      setCases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
  
    // Creating a user involves adjusting the entire collection so we need the collection reference
    // & we need the new document to be posted.
    const createUser = async () => {
      await addDoc(casesCollectionRef, { date: newDate, story: newStory, title: newTitle })
  
    }
    // pass object and it adds to the referred database collection
    const addCase = async (theCase) => {
      await addDoc(casesCollectionRef, theCase)
  
    }
  
    // References the doc with that case id and deletes it with deleteDoc
    const deleteUser = async (id) => {
      const userDoc = doc(db, "cases", id)
      await deleteDoc(userDoc)
    }
  
    // Updates data with doc id & the fields you want to be updated with the updateDoc method
    const updateDate = async (id, date) => {
      // We need to update a specific doc so we need to 
      // grab that doc from our DB, its collection, & filtered with the 'id' var
      const userDoc = doc(db, "cases", id)
      const newFields = { date: "updated date" }
      updateDoc(userDoc, newFields)
    }
  
    // Called eachtime page is rendered
    useEffect(() => {
      //getCases("Suspicious Death")
      
    }, [])
  
    // to pass arguments to function called with onClick it needs to be in an
    // arrow function first, else you dont such as with createUser
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
    // data["items"][0]["link"]
    return (
      // we create input fields that concurrently update the state variables
      // we have a button to post our most recent states to our database
      <div className="App">
        <h1>Hello</h1>
  
        <div>
          {/* <input type="text" placeholder='title' onChange={(e) => { setTitle(e.target.value) }}></input>
          <input type="text" placeholder='date' onChange={(e) => { setDate(e.target.value) }}></input>
          <input type="text" placeholder='story' onChange={(e) => { setStory(e.target.value) }}></input>
          <button onClick={createUser}>Create Story</button> */}
          <button onClick={()=> {
            if(mansLState === false){ setManslState(true); dispCases("Manslaughter/ Non-Negligent")}
            else { setManslState(false); filterCases("Manslaughter/ Non-Negligent")}
          }}> Manslaughter </button>
  
          <button onClick={()=> {
            if(hitRunState === false){
              setHitRunState(true)
              dispCases("Hit and Run")
            }
            else{
              setHitRunState(false)
              filterCases("Hit and Run")
            }
          }}>Hit & Run</button>
  
          <button onClick={()=> {
            if(rmState === false){ setRMState(true); dispCases("Rape/Murder")}
            else { setRMState(false); filterCases("Rape/Murder")}
          }}>Rape & Murder</button>
  
          <button onClick={()=> {
            if(mpState === false){ setMPState(true); dispCases("Missing Person (Presumed Murdered)")}
            else { setMPState(false); filterCases("Missing Person (Presumed Murdered)")}
          }}>Missing Person</button>
  
          <button onClick={()=> {
            if(sdState === false){ setSDState(true); dispCases("Suspicious Death")}
            else { setSDState(false); filterCases("Suspicious Death")}
          }}>Suspicious Death </button>
  
          <button onClick={()=> {
            if(murderState === false){ setMState(true); dispCases("Murder")}
            else { setMState(false); filterCases("Murder")}
          }}>Murder</button>
        </div>
  
  
        {cases.map((newCase) => {
          return (
            <div>
              <h1>Name: {newCase['Name']}</h1>
              <h1>Story: {newCase['Offense']}</h1>
              <h1>Date: {newCase['Incident Location']}</h1>
              <button onClick={() => { updateDate(newCase.id, newCase.date) }}>Adjust date</button>
              <button onClick={() => { deleteUser(newCase.id) }}>Delete data </button>
  
            </div>
          )
        })}
  
      </div>
    );
  }

export default Toggler