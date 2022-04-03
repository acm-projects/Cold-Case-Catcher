import React from 'react'
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import GlobalStyle from '../GlobalStyle';
import { OuterLayout } from '../styles/Layouts';
import Login from '../Login';

function Navigation() {
  return (
    <NavigationStyled>
            <ul>
                <li>
                    <a className='opts' href=''>Home </a>
                </li>
            </ul>
        
        
            <ul className='list-buttons'>
                <li>
                    <Link to="/signup">
                        <PrimaryButton name='Sign Up'></PrimaryButton>
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <SecondaryButton name='Login'></SecondaryButton>
                    </Link>
                </li>
            </ul>

    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
    :root {
        --blue: rgb(005, 060, 94);
        --brown: rgb(100, 048, 071);
        --black: rgb(0, 0, 0);
        --gray: rgb(206, 214, 219);
        --red: rgb(255, 0, 0);
        --white: rgb(255, 255, 255);
        --altblue: rgb(115,180,235);
    }
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;
    border-radius: 20px; 
    padding: 0.5rem 0.5rem;

    .opts {
        color: white;
    }

    .list-buttons {
        display: flex;
        justify-content: space-between;
        width: 15%;
    }

    .sign-up {
        color: black;
        padding: 0.75rem 0.75rem;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        border-radius: 10px;
    }

    .login {
        color: black;
        padding: 0.75rem 0.75rem;
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        border-radius: 10px;
    }
`;

export default Navigation