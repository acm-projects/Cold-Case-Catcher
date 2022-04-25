import React, { useEffect, useState } from "react";
import './Card.css'
import Graveyard from '../img/graveyard.jpeg'
import Temoc from '../img/temoc.jpeg'
import Bookmark from '../img/bookmark.svg'
import { doc, query, collection, getDocs, where, updateDoc } from "firebase/firestore";
import { auth, db, logout } from "../firebase";

function Card({cardProp, num}) {
  
  return (
    <>
  {/* parent contaier is for scrolling */}

    
    {/* holds rank 1 card */}
    <div className = 'card-container'>

        <div className = 'image-container'>
         <img src={cardProp?.["Name"]=="Temoc" ? Temoc : Graveyard} className = 'photo' alt = "Graveyard"/>
        </div>
       
        <div className = 'title-text'>
          {"Name: " + cardProp?.Name.toUpperCase()}
        </div>
        
        <div className = 'body-text'>
          <ul>
            <li>{"Age: " + cardProp?.Age}</li>
            <li>{"Offense: " + (cardProp?.["Offense"] == 'Missing Person (Presumed Murdered)' ? "Missing Person" : (cardProp?.["Offense"] == 'Manslaughter/ Non-Negligent' ? "Manslaughter" : cardProp?.["Offense"]))}</li>
            <li>{"Race: " + cardProp?.Race}</li>
            <li>{"Incident Location: " + cardProp?.['Incident Location']}</li>
            <li>{"Current Location: " + cardProp?.Location}</li>
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
            cardProp?.["Offense"] == 'Missing Person (Presumed Murdered)' ? "MISSING PERSON" : (cardProp?.["Offense"] == 'Manslaughter/ Non-Negligent' ? "MANSLAUGHTER" : cardProp?.["Offense"].toUpperCase())
          }
        </div>

      
       
    </div>
    <br /><br />  
        
    </>
  )
}

export default Card