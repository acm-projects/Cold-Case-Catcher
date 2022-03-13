import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg'

function Navigation() {
  return (
    <NavigationStyled>

        <ul className='Opts'>
            <li>
                <a href=''>Home</a>
            </li>
        </ul>

        <ul className='list-buttons'>
            <PrimaryButton name={'Sign Up'}>
                <a href=''></a>
            </PrimaryButton>

            <PrimaryButton name={'Login'}>
                <a href=''></a>
            </PrimaryButton>
        </ul>

    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;
    background-color: rgb(206, 214, 219); 
    border-radius: 20px; 
    padding: 0.5rem 0.5rem;

    .list-buttons {
        display: flex;
        justify-content: space-between;
        width: 15%;
    }
`;

export default Navigation