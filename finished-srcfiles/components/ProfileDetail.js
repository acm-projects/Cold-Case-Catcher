import React from 'react'
import './ProfileDetail.css'
import ProfilePic from './img/sky.jpeg'

function ProfileDetail() {
  return (
    <>
      <div className='profile-detail-background'>
      <img src={ProfilePic} className = 'profile' alt = "profile "/>
      <div className='profile-name'>
              Anushka Pimple
            <br/>
            <br/>
            <br/>
            <div className='he2'> Joined </div>
      
          <div className='txt-color'> Dec 2022</div>
         
          <br/>
          <br/>
          <div className='he2'> Awards </div>
          
          <div className='txt-color'>   Best Crime Stopper</div>
          <br/>
          <div className='txt-color'>   Top Detective</div>
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