import React from 'react'
import styled from 'styled-components'
import image from '../img/Rectangle22.svg'
import FakeCard from './FakeCard';

function TopCase() {
  return (
    <TopCaseStyled>
        <div className='top-case-background'>
            <center>
                <div className='top-case'>
                    <br /><br />
                    <h1>Here's a sneak peak at a cold case</h1>
                    <br /><br />
                </div>
            </center>

            <div className='top-case-details'>
                <FakeCard num={1} />
            </div>
            
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
        background-color: rgb(126, 134, 158);
        height: 100%;
        width: 100%;
        padding: 0.5rem 2rem;
        color: white;

        .top-case {
            font-family: 'Lato', sans-serif;
            color: white;

        }

        .top-case-title {
            font-family: 'Lato', sans-serif;
            padding: 1.5rem;
        }

        .top-case-details {
            font-family: 'Lato', sans-serif;
            margin: 0rem 15rem;
            border-radius: 10px;        
            display: flex;
        }
    }
`;

export default TopCase