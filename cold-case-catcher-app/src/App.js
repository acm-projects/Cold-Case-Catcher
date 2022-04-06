import './App.css';
import React, { useState, useEffect } from 'react';
import { db, signInWithGoogle, signOutOut } from "./firebase";
import { collection, doc, query, where, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { Signup } from "./components/Signup"
import { Login } from "./components/Login"
import { Container } from 'react-bootstrap';
import { AuthProvider } from "./components/AuthContext"
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {manslaughter} from './data/manslaughter.js'
import {susD} from './data/susDeath.js'
import { missP } from './data/missPerson';
import Toggler from './components/Toggler';
import Search from './components/Search';
function App() {

  // State variables
  const [cases, setCases] = useState([])
  const [newTitle, setTitle] = useState("")
  const [newDate, setDate] = useState("")
  const [newStory, setStory] = useState("")
  const [tempCases, setTempCases] = useState([])

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
  const updateDate = async (id, date) => {
    // We need to update a specific doc so we need to 
    // grab that doc from our DB, its collection, & filtered with the 'id' var
    const userDoc = doc(db, "cases", id)
    const newFields = { date: "updated date" }
    updateDoc(userDoc, newFields)
  }

  // Method to filter posts
  const filterPosts = (tempCases, query) => {
    if (!query) {
        return tempCases;
    }
    // Filter cases that have the right name
    return tempCases.filter((tempCase) => {
        const postName = tempCase['Name'].toLowerCase();
        return postName.includes(query) || tempCase['Name'].includes(query);
    });
};


const { search } = window.location;
const query = new URLSearchParams(search).get('s');
const [searchQuery, setSearchQuery] = useState(query || '');
// Filter posts
const filteredPosts = filterPosts(tempCases, query);

  // Called eachtime page is rendered
  useEffect(() => {
    // Populate temp cases variable with imported objects
    let importedObjects = []
    importedObjects = importedObjects.concat(susD, missP, manslaughter)
    setTempCases(importedObjects)
    console.log(susD)
  }, [])

  // to pass arguments to function called with onClick it needs to be in an
  // arrow function first, else you dont such as with createUser

  //disabled sign in with google button:
  /*html code to create a disabled "Sign in with Google" button
    <button type="button" class="login-with-google-btn" disabled>
    Sign in with Google
    </button>
  */

  return (
    // we create input fields that concurrently update the state variables
    // we have a button to post our most recent states to our database
    <div className="App">
      <div>
        <script async src="https://cse.google.com/cse.js?cx=f2e21ac773fc5ae60"></script>
        <div class="gcse-search"></div>
      </div>

      <button onClick={signInWithGoogle} type="button" className="login-with-google-btn" >
      Sign in with Google
      </button>

      <button onClick={signOutOut} type="button">
      Sign out
      </button>
      
      <AuthProvider>
        <Container className="d-flex allign-items-center justify-content-center"
          style={{ minHeight: '100vh' }}>
          <div className='w-100' style = {{ maxWidth: '400px' }}>
            <Signup />
            <Login />
          </div>
        </Container>
      </AuthProvider>
      
      <h1>Hello</h1>

      {/* <div>
        <input type="text" placeholder='title' onChange={(e) => { setTitle(e.target.value) }}></input>
        <input type="text" placeholder='date' onChange={(e) => { setDate(e.target.value) }}></input>
        <input type="text" placeholder='story' onChange={(e) => { setStory(e.target.value) }}></input>
        <button onClick={createUser}>Create Story</button>
      </div> */}
      <Toggler/>
      {/* Search  */}
      <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
      
      {filteredPosts.map((newCase) => {
        return (
          <div>
            <h1>Name: {newCase['Name']}</h1>
            <h1>Story: {newCase['Offense']}</h1>
            <h1>Date: {newCase['Date']}</h1>
            {/* <button onClick={() => { updateDate(newCase.id, newCase.date) }}>Adjust date</button>
            <button onClick={() => { deleteUser(newCase.id) }}>Delete data </button> */}

          </div>
        )
      })}

    </div>
  );
}

export default App;
