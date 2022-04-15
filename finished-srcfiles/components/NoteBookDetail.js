import React from 'react'
import './NoteBookDetail.css'
import NLogo from './img/notebookIcon.svg'
import EditDelete from './img/editDeleteButton.svg'

function NoteBookDetail() {
  return (
    <>
     {/*comment bar code*/}

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
    </div> 



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
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...
    <br/>
    <br/>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...
    <br/>
    <br/>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...
    <br/>
    <br/>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...
    <br/>
    <br/>
    <img src={EditDelete} className = 'edit-and-delete-icons2' alt = "Edit and Delete Buttons"/> 

    <br/>
    <br/>
    <br/>
    
    </div>

    </div> {/*end of big boi note*/}


    <div className='smaller-notes-container'>
        <div className='mini-notebook-card1'>
           <div className='notebook-mini-title2'>  NOTE #1:</div>
           <div className='small-case-title-text'> The Paper Cutter </div>
           <div className='small-case-description1'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam....</div>
           <img src={EditDelete} className = 'edit-and-delete-icons' alt = "Edit and Delete Buttons"/> 
        </div>

        <div className='mini-notebook-card2'>
           <div className='notebook-mini-title2'>  NOTE #2:</div>
           <div className='small-case-title-text2'> Murder in Tennessee </div>
           <div className='small-case-description1'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam....</div>
           <img src={EditDelete} className = 'edit-and-delete-icons' alt = "Edit and Delete Buttons"/> 
        </div>


        <div className='mini-notebook-card2'>
           <div className='notebook-mini-title2'>  NOTE #3:</div>
           <div className='small-case-title-text2'> Murder in Tennessee </div>
           <div className='small-case-description1'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam....</div>
           <img src={EditDelete} className = 'edit-and-delete-icons' alt = "Edit and Delete Buttons"/> 
        </div>


        <div className='mini-notebook-card2'>
           <div className='notebook-mini-title2'>  NOTE #4:</div>
           <div className='small-case-title-text2'> Murder in Tennessee </div>
           <div className='small-case-description1'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam....</div>
           <img src={EditDelete} className = 'edit-and-delete-icons' alt = "Edit and Delete Buttons"/> 
        </div>


        <div className='mini-notebook-card2'>
           <div className='notebook-mini-title2'>  NOTE #5:</div>
           <div className='small-case-title-text2'> Murder in Tennessee </div>
           <div className='small-case-description1'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam....</div>
           <img src={EditDelete} className = 'edit-and-delete-icons' alt = "Edit and Delete Buttons"/> 
        </div>


    </div>
    
    
    </>
  )
}

export default NoteBookDetail