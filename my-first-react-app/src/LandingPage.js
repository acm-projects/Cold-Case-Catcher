import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPageHeader from './components/LandingPageHeader';
import GlobalStyle from './GlobalStyle';
import {InnerLayout, NavigationLayout, OuterLayout} from './styles/Layouts'
import Navigation from './components/Navigation';
import TopCase from './components/TopCase';
import Purpose from './components/Purpose';
import Options from './components/Options';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
  <LandingPageStyled>
    <NavigationLayout>
      <Navigation />
    </NavigationLayout>

    <InnerLayout>
      <LandingPageHeader />
      <Purpose />
    </InnerLayout>

    <TopCase />

    <OuterLayout>
      <Options />
      <GlobalStyle />
    </OuterLayout>
  </LandingPageStyled>
  )
}

const LandingPageStyled = styled.div`
`;

export default LandingPage