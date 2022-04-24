import React from 'react'
import Delete from '../img/delete.svg'
import NoteAdd from './NoteAdd';
import Notebook from "../Notebook";
import NoteBookDetail from './NoteBookDetail';
import GlobalStyle from '../GlobalStyle';
import './NoteBookDetail.css'
import { Hidden } from '@mui/material';

function SavedNote({note}) {
  return (
    <>
    {console.log(note)}
    {/*
            <div className='mini-notebook-card1'>
                <div className='notebook-mini-title2'>  {note?.title}</div>
                <div className='small-case-description1'> {note?.description}</div>
                <img src={Delete} className = 'edit-and-delete-icons' alt = "Edit and Delete Buttons"/> 
            </div>
    */}
            <div className='mini-notebook-card1'>
           <div className='notebook-mini-title2'>  NOTE #1:</div>
           <div className='small-case-title-text'> John Carlisle Case </div>
           <div className='small-case-description1'> Hit run case in Jax, suspect still at large </div>
           <button className="edit-and-delete-icons"><img src={Delete}/></button>
        </div>

        <div className='mini-notebook-card2'>
           <div className='notebook-mini-title2'>  NOTE #2:</div>
           <div className='small-case-title-text2'> Riyfees Dunbar Case </div>
           <div className='small-case-description1'> Might know something about this one, note to self </div>
           <button className="edit-and-delete-icons"><img src={Delete}/></button>
        </div>


        <div className='mini-notebook-card2'>
           <div className='notebook-mini-title2'>  NOTE #3:</div>
           <div className='small-case-title-text2'> Murder of Kathy Gloddy </div>
           <div className='small-case-description1'> Case unsolved for 40+ years, possible that the culprit is dead? </div>
           <button className="edit-and-delete-icons"><img src={Delete}/></button>
        </div>
    </>
  )
}

export default SavedNote