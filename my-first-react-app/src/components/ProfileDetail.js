import React from 'react'
import './ProfileDetail.css'
import ProfilePic from '../img/sky.jpeg'
import SecondaryButton from './SecondaryButton'
import { Link } from "react-router-dom"
import { logout } from '../firebase'

function ProfileDetail({fullName, userId}) {
  return (
    <>
      <div className='profile-detail-background'>
      <img src={ProfilePic} className = 'profile' alt = "profile "/>
      <div className='profile-name'>
              {fullName}
            <br/>
            <br/>
            <br/>
            <div className='he2'> 
              <Link onClick={logout} to={"/"} className="style-logout">
                <SecondaryButton name={"Logout"} />
              </Link> 
            </div>
      
          <div className='txt-color'>
            
          </div>
         
          <br/>
          <br/>
      </div>

        

        <div className='vertical-divider'>

        </div>



          <div className='profile-title'>
          THANK YOU FOR YOUR CONTRIBUTIONS TO COLD CASE CATCHER
        
          </div>

                
  

   

      </div>

     
    </>
  )

}

export default ProfileDetail