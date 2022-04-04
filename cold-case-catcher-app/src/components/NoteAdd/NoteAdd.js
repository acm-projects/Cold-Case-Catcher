import React, { useState } from 'react';
import "./NoteAdd.css";
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore'

const notebookCollectionRef = collection(db, "notebook")

const NoteAdd = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const addNote = () => {
    if (title !== "" && description !== "") {
      addDoc(notebookCollectionRef, { title: title, description: description })
      /*const createUser = async () => {
        await addDoc(notebookCollectionRef, { title: title, description: description }): newDate, story: newStory, title: newTitle })
    
      }
      firebase.database().ref("notebook").push({
        title: title,
        description: description,
      });*/
    }
  };

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