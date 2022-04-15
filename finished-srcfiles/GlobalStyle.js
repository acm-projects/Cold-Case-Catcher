import {createGlobalStyle} from 'styled-components';
import bg from './Components/img/bg.svg';

//background-image: url(${bg});


const GlobalStyle= createGlobalStyle`
  :root{
    ---blue-primary: #04283F;
    ---accent-red: #FF0000;
    ---grey-light: #CED6DB;
    ---blue-accent: #A1C2D7;
    ---white: #ffffff; /*Primary Font Color*/
    ---black: #000000;
  }
    *{
        margin: 0;
        padding 0;
        list-style: NamedNodeMap;
        box-sizing: border-box;
        font-family: 'Roboto Condensed', sans-serif;
        text-decoration: none;
    }

    body{
        background-color: var(---blue-primary); //navy blue color
        background-image: url(${bg});
        background-attachment: fixed;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
    }

    
    
`;
export default GlobalStyle;