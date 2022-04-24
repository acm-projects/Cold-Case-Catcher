import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/LandingPageHeader';
import GlobalStyle from './GlobalStyle';
import {InnerLayout, NavigationLayout, OuterLayout} from './styles/Layouts'
import Navigation from './components/Navigation';
import TopCase from './components/TopCase';
import Purpose from './components/Purpose';
import Options from './components/Options';
import LandingPage from './LandingPage';
import Login from './Login';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
    <hr></hr><br />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
