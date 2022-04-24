import React from 'react'
import styled from 'styled-components'
import picture from '../img/Rectangle42.svg'
import Navigation from './Navigation'
import Purpose from './Purpose'
import TopCase from './TopCase'

function LandingPageHeader() {
  return (
    <LandingPageHeaderStyled>
        <ul className='text-image'>  
            <div className='text-field'>
                <h1> Countless criminal cases go unsolved every year.</h1>
                <br /><br />
                <h6 className='subtext'> Get involved and help us find vital information to solve thousands of cold cases nationwide. </h6>
            </div>

            <img className='pict' src={picture}/>
        </ul>

        <div className='header-content1'>
            <br /><br /><br />
            <h1> Cold Case Catcher </h1>
            <hr></hr>
            <br /><br /><br /><br />
        </div>

    </LandingPageHeaderStyled>
  )
}

const LandingPageHeaderStyled = styled.header`
    :root {
        --blue: rgb(005, 060, 94);
        --brown: rgb(100, 048, 071);
        --black: rgb(0, 0, 0);
        --gray: rgb(206, 214, 219);
        --red: rgb(255, 0, 0);
        --white: rgb(255, 255, 255);
        --altblue: rgb(115,180,235);
    }

    height: 100%;
    width: 100%;
    color: white;

    .nav {
        padding: 0.5rem 2rem;
    }

    .text-image {
        display: flex;
        justify-content: space-between;
        margin: 5rem 0rem;
        padding: 0.5rem 5rem;

        .text-field {
            height: auto;
            width: 33%;
            border-radius: 10px;
            font-family: 'Lato', sans-serif;
            font-style: light;
            font-size: 24px;
            border-radius: 10px;
            padding: 5rem 1rem;
        }

        .subtext {
            color: #4285f4;
        }
    }

    .pict {
        padding: 0.5rem 2rem;
        width: 62%;
        height: auto;
        image-size: 50% 50%;
    }

    .header-content1 {
        padding: 0.5rem 2rem;
        font-size: 30px;
    }

`;

export default LandingPageHeader

//background-repeat: no-repeat;