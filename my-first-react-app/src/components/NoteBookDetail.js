import React from 'react'
import './NoteBookDetail.css'
import './NoteAdd.css'
import NLogo from '../img/notebookIcon.svg'
import Edit from '../img/edit.svg'
import Delete from '../img/delete.svg'
import NoteAdd from './NoteAdd'
import SavedNote from './SavedNote'
import { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth, firestore } from '../firebase';
import { collection, query, where, getDocs, limitToLast } from 'firebase/firestore'

function NoteBookDetail({notebookData}) {
  return (
    <>
    {console.log(notebookData)}
     {/*comment bar code

     <div className="notebook-bar">
      <input
        type="text"
        name="notebook-bar"
        id="notebook-bar"
        placeholder="Search for a Case"
      />

      <input
        type="text"
        name="notebook-bar"
        id="notebook-bar3"
      />
    </div>*/}



    <div className='notebook-title'>
        NOTEBOOK
    </div>



    
    <div className='logo-contain2'>
    <img src={NLogo} className = 'Nlogo' alt = "Notebook Title Logo"/> 
    </div>


    <div className='bigboi-note'>
        <div className='bigboi-note-text'>

        
        <div className='notebook-mini-title'>  Create a new note:</div>
   
    <br/>
    <br/>
    <NoteAdd />

    <br/>
    <br/>
    <br/>
    
    </div>

    </div> {/*end of big boi note*/}


    <div className='smaller-notes-container'>
          <SavedNote />
    </div>
    
    
    </>
  )
}

export default NoteBookDetail