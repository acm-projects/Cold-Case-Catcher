import React from 'react'
import Sidebar from './components/Sidebar'
import GlobalStyle from './GlobalStyle'
import NoteBookDetail from './components/NoteBookDetail'  
import Header from './components/Header'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { logout } from './firebase'
import SecondaryButton from './components/SecondaryButton'
import { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth, firestore } from './firebase';
import { collection, query, where, getDocs, limitToLast } from 'firebase/firestore'

function Notebook() {
  const [noteBookData, setNoteBookData] = useState([]); //this is what is displayed when a user does show notes
  const [notebookID, setNotebookID] = useState([]); //array of notebook document ids from firebase
  const [notes, setNotes] = useState([]); //array of all notes in 
  const [showingNotesState, setShowingNotesState] = useState(true)
  const [user, loading, error] = useAuthState(auth); //user, passed in with useEffect
  const notebookCollectionRef = collection(db, "notebook")
  
  const getNotes = async () => {
      const data = await getDocs(notebookCollectionRef)
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const fetchNotesArray = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setNotebookID([ ...data['notebookDocID'] ])
      
        dispNotes();

      } catch (err) {
        console.error(err);
      }
    };

    const dispNotes = () => {
      //filter all the notes in the db and return just the ones that are made by this user (notebookID array)
      let filterNotes = notes.filter( (sepNote) => notebookID.includes(sepNote.id) ) 
      console.log(filterNotes)
      setNoteBookData( [...noteBookData, ...filterNotes])
    } 
    useEffect(() => {
      getNotes();
      setShowingNotesState(true);
      if (showingNotesState) fetchNotesArray();
    }, [user])

  return (
    <>
    {console.log(user?.uid)}
    <GlobalStyle />
    <Sidebar />
    <Header/>
    <NoteBookDetail notebookData={notes}/>
    </>
  );
};

export default Notebook