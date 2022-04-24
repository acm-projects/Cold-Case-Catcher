import React from 'react'
import "./CaseDetail.css"
import DefaultProfile from '../img/defaultProfile.svg'

function Comment({cmnt}) {
  return (
    <>
        <img src={DefaultProfile} className = 'default-profile' alt = " Default Profile Icon"/>
          <ul className='comment1'>
            <li><div>{cmnt["username"]}</div></li>
            <li>{cmnt["comment"]}</li>
            <br/>
          </ul>
    </>
  )
}

export default Comment