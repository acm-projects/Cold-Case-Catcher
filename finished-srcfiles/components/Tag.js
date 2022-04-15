import './Tag.css';
import React, { useState } from "react";
import styled from 'styled-components';






function Tag() {



  return (
    <>
   
     <div className="parent-container">
        <div className="background-container">
            <div className="title">
                    TAGS
            </div>
            <div className="line">
            </div>

        <div className="master-tags">
            <button className="murder" >
                  MURDER
            </button>

            <button className="hit-run" >
                  HIT-RUN
            </button>

            <button className="manslaughter" >
                  MANSLAUGHTER
            </button>

            <button className="missPer" >
                  MISSING PERSON
            </button>

            <button className="susDeath" >
                  SUSPICIOUS DEATH
            </button>

            <button className="following" >
                  FOLLOWING
            </button>

            </div>

            </div>
          
          
            
        </div>
       
            
    </>
  )
}

/*
const TagStyled = styled.tag`



`;
*/



export default Tag



