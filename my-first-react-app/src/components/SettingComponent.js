import React from 'react'
import './SettingComponent.css'
import SLogo from '../img/SettingLogo.svg'
import { Link } from 'react-router-dom'
import SecondaryButton from './SecondaryButton'



//npm install @mui/material @emotion/react @emotion/styled



function SettingComponent({fullName, userId}) {
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
                 {console.log(userId?.email)}
                  First Name:   {fullName.substring(0, fullName.indexOf(" "))} <br></br>
  
                  Last Name: {fullName.substring(fullName.indexOf(" "))}<br></br>
  
                  Email: {userId?.email}
                  
              </div>
  
          </div>
  
          <div className= 'account-details-container'>
              <div className='container-title'>
                  ACCOUNT DETAILS
              </div>
  
              <div className='container-content'>
  
                  Username: {"#" + fullName.substring(0, fullName.indexOf(" ")).toLowerCase() + "" + fullName.substring(fullName.indexOf(" ") + 1).toLowerCase()} <br/>
  
                  Password: ********<br/>
  
                  <Link to="/reset">
                      <SecondaryButton name="Reset Password"></SecondaryButton>
                  </Link>
  
              </div>
  
          </div>
      </div>
   
      </>
    )
  }
  
  export default SettingComponent