import { createGlobalStyle } from 'styled-components'
import bg from './img/Homepagebg.svg'

const globalStyle = createGlobalStyle`
    :root {
        --blue: rgb(005, 060, 94);
        --brown: rgb(100, 048, 071);
        --black: rgb(0, 0, 0);
        --gray: rgb(206, 214, 219);
        --red: rgb(255, 0, 0);
        --white: rgb(255, 255, 255);
        --altblue: rgb(115,180,235);
    }

    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Roboto Condensed', sans-serif;
        text-decoration: none;
    }

    body {
        background: url(${bg}) no-repeat center fixed;
        background-size: cover;
    }

    a {
        font-family: 'Lato', sans-serif;
        color: var(--blue);
        font-size: 20px;
    }

`; 

export default globalStyle;