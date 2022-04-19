import './App.css';
import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import { collection, doc, query, where, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { Login } from "./components/Login/Login";
import { Register } from './components/Register/Register';
import { Reset } from './components/Reset/Reset';
import { Dashboard } from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Toggler from './components/Toggler';
import Webscraper from './components/Webscraper';
import NotebookPackage from './components/NotebookPackage';

function App() {

  // State variables
  const [cases, setCases] = useState([])
  const [newTitle, setTitle] = useState("")
  const [newDate, setDate] = useState("")
  const [newStory, setStory] = useState("")
  // Collection reference
  const casesCollectionRef = collection(db, "cases") // establish connection to db & collection

  // Retrieves cases with getDocs & our collection reference
  const getCases = async () => {
    const data = await getDocs(casesCollectionRef)
    setCases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  // Creating a user involves adjusting the entire collection so we need the collection reference
  // & we need the new document to be posted.
  const createUser = async () => {
    await addDoc(casesCollectionRef, { date: newDate, story: newStory, title: newTitle })

  }
  const addCase = async (theCase) => {
    await addDoc(casesCollectionRef, theCase)

  }

  // References the doc with that case id and deletes it with deleteDoc
  const deleteUser = async (id) => {
    const userDoc = doc(db, "cases", id)
    await deleteDoc(userDoc)
  }

  // Updates data with doc id & the fields you want to be updated with the updateDoc method
  const updateCom = async (id, cmtArr) => {
    // We need to update a specific doc so we need to 
    // grab that doc from our DB, its collection, & filtered with the 'id' var
    const userDoc = doc(db, "cases", id)
    const newFields = { comments: cmtArr }
    updateDoc(userDoc, newFields)
  }

  // Called eachtime page is rendered
  useEffect(() => {
    // getCases()
    // let newComment = {comment:"this is absurd", username:"salmanh", timestamp: new Date().toLocaleString()}
    // let cmtArr = [newComment]
    // //console.log(cmtArr)
    // cases.forEach((speCase)=>{
    //   updateCom(speCase['id'], cmtArr)
    // })
    
  }, [])

  // to pass arguments to function called with onClick it needs to be in an
  // arrow function first, else you dont such as with createUser

  /*<button onClick={signInWithGoogle} type="button" className="login-with-google-btn" >
  Sign in with Google
  </button>
  */

  return (
    // we create input fields that concurrently update the state variables
    // we have a button to post our most recent states to our database
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/reset" element={<Reset/>} />
          <Route exact path="/dashboard/:uid" element={<Dashboard />} />
          <Route  path="/" element={<Login/>} />
        </Routes>
      </Router>
      
      <h1>Hello</h1>

      <Webscraper/>

      <NotebookPackage/>

      {/* <div>
        <input type="text" placeholder='title' onChange={(e) => { setTitle(e.target.value) }}></input>
        <input type="text" placeholder='date' onChange={(e) => { setDate(e.target.value) }}></input>
        <input type="text" placeholder='story' onChange={(e) => { setStory(e.target.value) }}></input>
        <button onClick={createUser}>Create Story</button>
      </div> */}
      <Toggler/>
      {cases.map((newCase) => {
        return (
          <div>
            <h1>Name: {newCase['Name']}</h1>
            <h1>Story: {newCase['id']}</h1>
            {/* <h1>Date: {newCase.date}</h1>
            <button onClick={() => { updateDate(newCase.id, newCase.date) }}>Adjust date</button>
            <button onClick={() => { deleteUser(newCase.id) }}>Delete data </button> */}

          </div>
        )
      })}

    </div>
  );
}

export default App;
