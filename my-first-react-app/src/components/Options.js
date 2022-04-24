import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

function Options() {
  return (
    <OptionsStyled>
        <div className='options-box'>
            <center>
                <h1>Want to see more?</h1>
                <br />
                <div className='subtext'>Log in or create an account to access the nation's top unsolved cases</div>
                <br />
                <ul className='list-buttons'>
                    <Link to="/register">
                        <PrimaryButton name='Sign Up'></PrimaryButton>
                    </Link>
                    <br /><br />
                    <Link to="/login">
                        <SecondaryButton name='Login'></SecondaryButton>
                    </Link>
                </ul>
            </center>
        </div>
    </OptionsStyled>
  )
}

const OptionsStyled = styled.div`
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
    padding: 12rem;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    
    .title {
        font-size: 24px;
        color: white;
    }
    .options-box {
        height: auto;
        width: auto;
        background-color: rgba(206, 214, 219, .2);
        font-size: 18px;
        border-radius: 10px;
        padding: 1rem;

        .subtext {
            padding: 0rem 10rem;
        }

        .list-buttons {
            display: block;
        }
    }
`;

export default Options