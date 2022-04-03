import React from 'react'
import styled from 'styled-components'
import image from '../img/Rectangle22.svg'

function TopCase() {
  return (
    <TopCaseStyled>
        <div className='top-case-background'>
            <center>
                <div className='top-case'>
                    <br /><br />
                    <h1>Here's a sneak peak at the top case this month</h1>
                    <br /><br />
                </div>
            </center>

            <ul className='top-case-details'>
                <img className='' src={image}/>
                <div className='top-case-title'>
                    <h3>TOP CASE TITLE</h3>
                    <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat...
                </div>
            </ul>
            
            <br /><br /><br />
        </div>
    </TopCaseStyled>
  )
}

const TopCaseStyled = styled.div`
    :root {
        --blue: rgb(005, 060, 94);
        --brown: rgb(100, 048, 071);
        --black: rgb(0, 0, 0);
        --gray: rgb(206, 214, 219);
        --red: rgb(255, 0, 0);
        --white: rgb(255, 255, 255);
        --altblue: rgb(115,180,235);
    }

    .top-case-background {
        background-color: var(--gray);
        height: 100%;
        width: 100%;
        padding: 0.5rem 2rem;
        color: white;

        .top-case {
            font-family: 'Lato', sans-serif;
            color: var(--blue);

        }

        .top-case-title {
            font-family: 'Lato', sans-serif;
            padding: 1.5rem;
        }

        .top-case-details {
            font-family: 'Lato', sans-serif;
            margin: 0rem 10rem;
            padding 0.5rem;
            background-color: rgba(109, 128, 126, 0.6);
            border-radius: 10px;        
            display: flex;
        }
    }
`;

export default TopCase