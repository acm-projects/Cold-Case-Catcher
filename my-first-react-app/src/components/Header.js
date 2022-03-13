import React from 'react'
import styled from 'styled-components'
import bg from '../img/Homepagebg.svg'
import Navigation from './Navigation'

function Header() {
  return (
    <HeaderStyled>
        <div className='nav'>
            <Navigation />
        </div>

        <div className='header-content'>
            <h1> Cold Case Catcher </h1>
        </div>

        <div className='about-us'>
                <h4>SO, WHO ARE WE?</h4>
                <p></p>
                <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...</h6>
                <p></p>

                <hr></hr>

                <p></p>
                <h4>OUR PURPOSE</h4>
                <p></p>
                <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...</h6>
        </div>

        <div>
            Test
        </div>

    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
    height: 100vh;
    width: 100%;
    color: white;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 2rem 5rem;

    .header-content {
        padding 15rem 0rem;
        font-size: 30px;
    }

    .about-us {
        background-color: rgba(206, 214, 219, .2);
        color: #fff;
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        border-radius: 10px;
        padding: 1rem;
    }

    .hr {
        width: 60%; 
        margin-left: auto; 
        margin-right: auto;
        line-space: 6px;
    }

    p {
        margin: 7px;
    }
`;

export default Header

//background-repeat: no-repeat;