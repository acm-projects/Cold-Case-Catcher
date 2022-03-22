import './App.css';
import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, doc, query, where, getDocs,  addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
//import {manslaughter} from './data/manslaughter.js'
//import {murder} from './data/murder'
import Toggler from './components/Toggler';
function App() {


  return (
    // we create input fields that concurrently update the state variables
    // we have a button to post our most recent states to our database
    <div className="App">
      <h1>Hello</h1>
      <Toggler/>
    </div>
  );
}

export default App;
