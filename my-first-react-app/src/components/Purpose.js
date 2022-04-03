import React from 'react'
import styled from 'styled-components'

function Purpose() {
  return (
    <PurposeStyled>
        <div className='center'>
            <div className='about-us'>
                <h1>So, who are we?</h1>
                <p></p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...
                <p></p>

                <hr></hr>

                <p></p>
                <h1>Our Purpose</h1>
                <p></p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    </PurposeStyled>
  )
}

const PurposeStyled = styled.div`
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
    padding: 0.5rem 5rem;

    .center {
        margin: auto;
        width: 90%;
    }

    .about-us {
        height: auto;
        width: auto;
        background-color: rgba(206, 214, 219, .2);
        font-family: 'Lato', sans-serif;
        font-style: normal;
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

export default Purpose