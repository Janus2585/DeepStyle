import React from 'react'
import ReactDOM from 'react-dom'
import ImageUpload from './ImageUpload'
/*
import style1 from '../img/style1.jpg'
import style2 from '../img/style2.jpg'
import style3 from '../img/style3.jpg'
*/
import borat from '../img/borat.jpg'
import base64Img from 'base64-img'
import fs from 'file-system';
import keys from '../config/keys.js'
var algorithmia = require("algorithmia");

var util = require('utils-extend');


export default class DeepStyleYourPic extends React.Component {
	state = {styles: [], imageFile: null}
	constructor() {
		super();
		
		//this.handleClick = this.handleClick.bind(this);
	}

	myCallback = (imageFile) => {
		this.setState({ imageFile: imageFile });
	}

	

	handleDeepStyleSubmit = () => {
		var client = algorithmia.client("simq2Mg/MzWZUNQ2f4dH3UklgRr1");
		var input = {
		  "images": [
		    "data://deeplearning/example_data/elon_musk.jpg"
		  ],
		  "savePaths": [
		    "data://.algo/deeplearning/DeepFilter/temp/elon_space_pizza.jpg"
		  ],
		  "filterName": "aqua"
		};
		client.algo("deeplearning/DeepFilter/0.6.0")
		    .pipe(input)
		    .then(function(output) {
		        console.log(output);
		    });
/*
		//get picture from ImageUploader child component
		console.log(this.state.imageFile)
		console.log('API KEY')
		console.log(keys.apiKey)
		//convert this picture to Base 64
		function getBase64(file) {
		   var reader = new FileReader();
		   reader.readAsDataURL(file);
		   reader.onload = function () {
		     console.log(reader.result);
		   };
		   reader.onerror = function (error) {
		     console.log('Error: ', error);
		   };
		}
		var base64Image = getBase64(this.state.imageFile);// prints the base64 string
		
		//make POST request to API 

		fetch('https://api.deeparteffects.com/v1/noauth/upload', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'Access-Control-Allow-Origin': '*',
		    'x-api-key': keys.apiKey
		  },
		  body: JSON.stringify({
		    styleId: this.state.style,
		    imageBase64Encoded: base64Image,
		  })
		}).then(function(response) {
			console.log(response)
		})
*/

	}


	componentDidMount(){

			}
 	/*
	componentDidMount() {
	 	
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
		        this.setState(styles);
		        console.log(this.state.styles)
		      });
		    }
		  )
		  .catch(function(err) {
		    console.log('Fetch Error :-S', err);
		  })
		  .then(console.log(this.state.styles));
    }
    */




	render() {


		var first20Styles=this.state.styles.slice(0,21);
		return(
			<div id='deepStyleYourPicSection'>
				<div id='deepStyleYourPicContainer' className='container'>
					<div id='uploadPhoto'>
						<h3>Upload Your Photo Here</h3>
						<ImageUpload callbackFromParent={this.myCallback}/>
					</div>

					<div id='styleWrapper'>
						<div id='styleWrapperText'><h3>Select Your Style</h3></div>

						{
							first20Styles.map(style =>
	          				<div key={style.id}><img className="styleImage img-thumbnail" src={style.url} onClick={() => this.setState({ style: style.id}, function () { console.log(this.state.style)})}/></div>)}


					</div>
					<div id='submitForDeepStyleButton'><button className='btn-primary' onClick={this.handleDeepStyleSubmit.bind(this)}>Submit</button></div>
					<div id='processedPhoto'>
						<div id='processedPhotoText'>
							<h3>Your DeepStyled Picture</h3>
						</div>
					</div>
				</div>
			</div>
			
		);
	}
}

 