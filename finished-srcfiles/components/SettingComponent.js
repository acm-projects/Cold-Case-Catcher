import React from 'react'
import './SettingComponent.css'
import SLogo from './img/SettingLogo.svg'



//npm install @mui/material @emotion/react @emotion/styled



function SettingComponent() {
  return (
    <>
    <div className='setting-title'>
        SETTINGS

    </div>

    <div className='logo-contain'>
    <img src={SLogo} className = 'Slogo' alt = "Setting Title Logo"/> 
    </div>

    <div className='setting-container'>
        <div className= 'personal-info-container'>
            <div className='container-title'>
                PERSONAL INFORMATION
            </div>
            <div className='container-content'>
               
                First Name:   Anushka <br></br>

                Last Name: Pimple<br></br>

                Email: the_bestest_person_ever@coolPerson.com
                
            </div>

        </div>

        <div className= 'account-details-container'>
            <div className='container-title'>
                ACCOUNT DETAILS
            </div>

            <div className='container-content'>

                Username: Francis-is-also_the_bestest_person182323778 <br/>

                Password: ********<br/>

                Profile Visibilty: Public

            </div>

        </div>

        <div className='recently-visited-cases-container'>
            <div className='container-title'>
                RECENTLY VISITED CASES
            </div>

            <div className='container-content'>

               1. DEATH IN THE GRAVEYARD<br/>
               2. SOME RANDOM CASE<br/>
               3. BOB :()

            </div>
        </div>

        <div className='notification-container'>

        <div className='container-title'>
                NOTIFICATION PREFERENCES
            </div>

            <div className='container-content'>
                New Case Posting<br/>
                New Case Update<br/>
                New Comments<br/>
                Follower Request

            </div>

        </div>

        
    

        

    </div>
 
    </>
  )
}

export default SettingComponent