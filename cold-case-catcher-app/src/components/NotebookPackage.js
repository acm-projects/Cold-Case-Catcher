import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore'
import Navbar from './Navbar';
import NoteAdd from './NoteAdd';
import Notebook from "./Notebook";


const NotebookPackage = () => {

    const [noteBookData, setNoteBookData] = useState([]);
    const [showingNotesState, setShowingNotesState] = useState(false)
    const notebookCollectionRef = collection(db, "notebook")

    const dispNotes = async () =>{
        const data = await getDocs(notebookCollectionRef)
        let returnedNotes = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setNoteBookData( [...noteBookData, ...returnedNotes])
    }

    const hideNotes = async () => {
        setNoteBookData( [])
    }
        
    useEffect(() => {
        //getCases()
        //addLinks()
    }, [])

    return (
        <div>
            <Navbar />
            <div className="note-section">
                <NoteAdd />
                <Notebook notebook={noteBookData} />
                <button onClick={()=> {
                    if(showingNotesState === false){ setShowingNotesState(true); dispNotes()}
                }}>Show Notes</button>

                <button onClick={()=> {
                    if(showingNotesState === true){ setShowingNotesState(false); hideNotes()}
                }}>Hide Notes</button>
            </div>
        </div>
    );
}
export default NotebookPackage;