import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CaseDetail from './components/CaseDetail.js'
import GlobalStyle from './GlobalStyle'
import { useLocation } from 'react-router-dom';
import styled from "styled-components"

const Case = (props) => {
  const location = useLocation();
  const data = location.state;
    return (
    <CasePageStyled>
    <GlobalStyle />
    <div className='header-z'>
    <Header/></div>
    <CaseDetail caseId={data}/>
    </CasePageStyled>
  )
}

const CasePageStyled = styled.div`
  .header-z {
    margin-top: 8rem; 
  }
`;

export default Case