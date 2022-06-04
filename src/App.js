import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div id='container'>
          <Routes>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/about' component={About}/>
          </Routes>
          <Home />
        </div>
        </Fragment>
    </Router>
  );
}

export default App;
