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
  state = {styles: []}

  componentDidMount() {
    
    /*
    api.fetchStyleOptions()
    	.then(function (styles) {
    		console.log(styles)
    	})
	*/
  	
  	fetch('/users')
	  .then(
	    (response) => {
	      if (response.status !== 200) {
	        console.log('Looks like there was a problem. Status Code: ' +
	          response.status);
	        return;
	      }

	      // Examine the text in the response
	      response.json().then((styles) => {
	        //console.log(styleOptions);
	        this.setState(styles);
	        console.log(this.state.styles)
	        /*
	        this.setState(() => {
	  			return {styleOptions: styleOptions}
	  		})
			*/
	      });
	    }
	  )
	  .catch(function(err) {
	    console.log('Fetch Error :-S', err);
	  })
	  //.then(this.setState({styleOptions: styleOptions}))
	  .then(console.log(this.state.styles));
  	/*
    fetch('/users')
      .then((res) => {
      	console.log(res.body);
      	this.setState({users: res.body})
      })
      //.then(console.log(res))
      //.then(users => this.setState({ users }));
    */
  }

  render() {
  	
    return (
      <div className="App">
        <Header />
        <Intro />
        <HowItWorks />
        <SampleDeepStyles />
        <h1>Styles</h1>
	        {this.state.styles.map(style =>
	          <div key={style.url}><img src={style.url} /></div>
	        )}
      	<DeepStyleYourPic />
      	<Footer /> 
      </div>
    );
  }
}

/*
	 <Intro />
        <HowItWorks />
        <SampleDeepStyles />
        <DeepStyleYourPic />
        <Footer />
*/
export default App;
