import React, { useEffect, useState } from "react";
import './Card.css'
import Graveyard from '../img/graveyard.jpeg'
import SirEdward from '../img/sirEdwards.jpeg'
import Bookmark from '../img/bookmark.svg'
import { doc, query, collection, getDocs, where, updateDoc } from "firebase/firestore";
import { auth, db, logout } from "../firebase";

function FakeCard({num}) {
  
  return (
    <>
  {/* parent contaier is for scrolling */}

    
    {/* holds rank 1 card */}
    <div className = 'card-container'>

        <div className = 'image-container'>
         <img src={Graveyard} className = 'photo' alt = "Graveyard"/>
        </div>
       
        <div className = 'title-text'>
          {"Name: JOHN CARLISLE"}
        </div>
        
        <div className = 'body-text'>
          <ul>
            <li>{"Age: 24"}</li>
            <li>{"Offense: Hit and Run"}</li>
            <li>{"Race: Caucasian/White"}</li>
            <li>{"Incident Location: 50 Duval Station RoadJacksonville, Florida, 32218Duval County"}</li>
            <li>{"Current Location: Unknown"}</li>
          </ul>
        </div>


       
        <div className = 'circle-border'>
            <div className = 'rank-text'>
                  {num}
            </div>
        </div>

       
        <img src={Bookmark} className = 'bookmark' alt = "BookMark"/>

        <div className='tag-sus-card'>
          {
            "HIT AND RUN"
          }
        </div>

      
       
    </div>
    <br /><br />  
        
    </>
  )
}

export default FakeCard