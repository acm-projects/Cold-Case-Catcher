import React from 'react';
import Header from '../Components/Header'
import Searchbar from "../Components/Searchbar";
import Tag from "../Components/Tag";
import Card from "../Components/Card"; 

import Side from "../Components/Sidebar"

import styled from 'styled-components';

import bg from '../Components/img/bg.svg';



function Home() {
  return (
    <>
    <div className='home'>
        <Header />
        <Searchbar/>

        <Card />
        <Tag /> 
    </div>
    </>
  )
}

/* const HomeStyled = styled.home`
body{
  background-color: #ffffff;
} 

`;*/
export default Home;