import './App.css';
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { db, signInWithGoogle, signOutOut } from "./firebase";
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { Signup } from "./components/Signup"
import { Login } from "./components/Login"
import { Container } from 'react-bootstrap';
import { AuthProvider } from "./components/AuthContext"
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import {manslaughter} from './data/manslaughter.js'
//import {murder} from './data/murder'

=======
import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, doc, query, where, getDocs,  addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
//import {manslaughter} from './data/manslaughter.js'
//import {murder} from './data/murder'
import Toggler from './components/Toggler';
>>>>>>> 5fe54008671f1084ce8a75782e5fa153f7185d52
function App() {


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
<<<<<<< HEAD

      <div>
        <input type="text" placeholder='title' onChange={(e) => { setTitle(e.target.value) }}></input>
        <input type="text" placeholder='date' onChange={(e) => { setDate(e.target.value) }}></input>
        <input type="text" placeholder='story' onChange={(e) => { setStory(e.target.value) }}></input>
        <button onClick={createUser}>Create Story</button>
      </div>

      {cases.map((newCase) => {
        return (
          <div>
            <h1>Name: {newCase.title}</h1>
            <h1>Story: {newCase.story}</h1>
            <h1>Date: {newCase.date}</h1>
            <button onClick={() => { updateDate(newCase.id, newCase.date) }}>Adjust date</button>
            <button onClick={() => { deleteUser(newCase.id) }}>Delete data </button>

          </div>
        )
      })}

=======
      <Toggler/>
>>>>>>> 5fe54008671f1084ce8a75782e5fa153f7185d52
    </div>
  );
}

export default App;
