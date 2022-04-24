import React, { useState } from 'react';
import './Searchbar.css';
import {Link} from 'react-router-dom';


const Searchbar = ({ searchQuery, setSearchQuery}) => {
  return (
    <>

    <div className="search-bar">
      <input
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        type="text"
        name="s"
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