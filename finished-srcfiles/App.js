//import logo from './logo.svg';
//import './App.css';
//npm install react-bootstrap bootstrap@5.1.3
//npm install --save react-router-dom
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Notebook from './pages/Notebook';
import Settings from './pages/Settings';
import Case from './pages/CasePage.js';




function App() {
  return (
    <>
    <Router>
    <Sidebar/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/notebook' element={<Notebook/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/casepage' element={<Case/>} />
       </Routes>
    </Router>

    </>
  );
}

export default App;
