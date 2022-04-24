import './Tag.css';
import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom"





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
            <Link to="/home" state={null}>
                  <button className="murder" >
                        MURDER
                  </button>
            </Link>

            <Link to="/home" state={"hitRun"}>
                  <button className="hit-run" >
                        HIT-RUN
                  </button>
            </Link>
            
            <Link to="/home" state={"manslaughter"}>
                  <button className="manslaughter" >
                        MANSLAUGHTER
                  </button>
            </Link>

            <Link to="/home" state={"missPerson"}>
                  <button className="missPer" >
                        MISSING PERSON
                  </button>
            </Link>

            <Link to="/home" state={"susDeath"}>
                  <button className="susDeath" >
                        SUSPICIOUS DEATH
                  </button>
            </Link>


            <Link to="/home" state={null}>
                  <button className="following" >
                        RAPE/MURDER
                  </button>
            </Link>

            <Link to="/home" state={null}>
                  <button className="none" >
                        NONE
                  </button>
            </Link>

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