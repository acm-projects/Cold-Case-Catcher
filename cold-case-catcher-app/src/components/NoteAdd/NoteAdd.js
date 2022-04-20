import React, { useEffect, useState } from 'react';
import "./NoteAdd.css";
import { db, auth } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, doc, query, where, getDocs, addDoc, updateDoc, deleteDoc, FieldValue } from 'firebase/firestore'

const notebookCollectionRef = collection(db, "notebook") // establish connection to db & collection
const userCollectionRef = collection(db, "users")

const NoteAdd = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [uidValue, setuidValue] = useState("");
  const [singleUserID, setUsers] = useState("") //doc id for current signed in user
  const [notebookID, setNotebookID] = useState("") //doc id for current notebook entry
  

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // Try to get the specific document ID of the signed in person
  const getUsers = async () => {
    const data = await getDocs(userCollectionRef)
    let tempUsers = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    let tempUser = tempUsers.filter(theUser => theUser.uid == user?.uid)
    setUsers(tempUser[0]['id'])
    console.log(tempUser[0]['id'])

  }

  const fetchUID = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setuidValue(data.uid);
      const noteData = getDocs(notebookCollectionRef)
      //const unionRes = await db.collection('users').doc(q).update({ notebookDocID : FieldValue.arrayUnion(noteData.doc.id) })
    } catch (err) {
      console.error(err);
      alert("User not signed in, notes will not be saved");
    }
  };


  //add a note document to the notebook collection and add the notebook doc id to the array in the user's doc inside users collection
  const addNote = async () => {
    if (title !== "" && description !== "") {
      const note = await addDoc(notebookCollectionRef, { title: title, description: description }) //add note
      //console.log(note.id)
      //setNotebookID(note.id); //set doc id for current note

      // query for that document w/ user uid field
      const q = query(userCollectionRef, where("uid", "==", `${user?.uid}`))
      const data = await getDocs(q)
      // get contents
      let returnedUser = data.docs?.map((doc) => ({ ...doc.data(), id: doc.id }))
      //extract notebookDocID array & append contents to our array 
      let notebookDocIDArr = returnedUser[0]['notebookDocID']
      //let notebookDocIDArr = notebook[0]['notebookDocID']
      notebookDocIDArr = [...notebookDocIDArr, note.id]
      // create new object field with updated array
      let newField = { notebookDocID: notebookDocIDArr }
      
      // update firebase following
      const userDoc = doc(db, "users", singleUserID)
      updateDoc(userDoc, newField)
    }
  }

  useEffect(() => {
    fetchUID();
    getUsers();    
  }, [user, loading]);

  return (
    <>
      <div className="noteadd">
        <h1>Add a New Note</h1>
        <div className="form-group">
          <input
            type="text"
            className="noteadd-header"
            name="noteadd-header"
            placeholder="Note Title"
            value={title}
            onChange={(val) => handleTitleChange(val)}
          />
        </div>
        <div className="form-group">
          <textarea
            name="noteadd-description"
            className="noteadd-description"
            placeholder="Note Description"
            value={description}
            onChange={(val) => handleDescriptionChange(val)}
          ></textarea>
        </div>
        <div className="noteadd-button">
          <button onClick={() => addNote()}>Add a Note</button>
        </div>
      </div>
    </>
  );
};

export default NoteAdd;