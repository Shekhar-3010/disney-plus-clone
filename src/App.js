import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Details from './Components/Details';
import Login from './Components/Loginpage';

import {
  BrowserRouter as Router,
  Routes,
  
  Route,
  Link
} from 'react-router-dom';
import Loginpage from './Components/Loginpage';



function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
      <Route path='/login' element={<Loginpage/>}/>
      <Route  path="/" element={<Home/>}/>
      <Route  path='/details' element={<Details/>}/>

    </Routes>
    </Router>
    </div>
  );
}

export default App;
