import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './LandingPage';
import Login from './Login';
//import logo from './logo.svg';
//import './App.css';
//npm install react-bootstrap bootstrap@5.1.3
//npm install --save react-router-dom
import Sidebar from "./components/Sidebar";

import Home from './Home';
import Profile from './Profile';
import Notebook from './Notebook';
import Settings from './Settings';
import CasePage from './CasePage';
import Register from './Register';
import Reset from './Reset';
import Dashboard from './Dashboard';
import Test from './test'
import NotebookPackage from './components/NotebookPackage';
import NoteAdd from './components/NoteAdd';
import NoteBookDetail from './components/NoteBookDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<LandingPage />} />
        <Route path = '/login' element={<Login />} />
        <Route path = '/register' element={<Register />} />
        <Route path='/reset' element={<Reset/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/notebook' element={<Notebook />} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/casepage' element={<CasePage />} />
      </Routes>
    </Router>
  )
}

export default App