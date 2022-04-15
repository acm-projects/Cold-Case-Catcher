import React, { useState } from 'react';
import './Searchbar.css';
import {Link} from 'react-router-dom';


function Searchbar() {


  return (
    <>

    <div className="search-bar">
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Search Cases"
      />

      <input
        type="text"
        name="search-bar"
        id="search-bar2"
      />

      <div className="trending-content">
        <h1>TRENDING</h1>
      </div>

    </div> 

    
    

      
    </>
  )
}

export default Searchbar