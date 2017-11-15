import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Intro from './components/Intro'
import HowItWorks from './components/HowItWorks'
import SampleDeepStyles from './components/SampleDeepStyles'
import DeepStyleYourPic from './components/DeepStyleYourPic'
import Footer from './components/Footer'
import api from './utils/api.js'


class App extends Component {
  

  

  render() {
  	
    return (
      <div className="App">
        <Header />
        <Intro />
        <HowItWorks />
        <SampleDeepStyles />
        <h1>Styles</h1>
	        
      	<DeepStyleYourPic />
      	<Footer /> 
      </div>
    );
  }
}

export default App;
