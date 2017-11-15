import React from 'react'
import ReactDOM from 'react-dom'

/*
import style1 from '../img/style1.jpg'
import style2 from '../img/style2.jpg'
import style3 from '../img/style3.jpg'
*/
import borat from '../img/borat.jpg'


export default class DeepStyleYourPic extends React.Component {
	state = {styles: []}
	constructor() {
		super();
		
		//this.handleClick = this.handleClick.bind(this);
	}

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

	//handleClick(selectionNumber) {
		//this.setState({style:selectionNumber});
	//}

	render() {


		var first20Styles=this.state.styles.slice(0,21);
		return(
			<div id='deepStyleYourPicSection'>
				<div id='deepStyleYourPicContainer' className='container'>
					<div id='uploadPhoto'>
						<h3>Upload Your Photo Here</h3>
						<button className='btn-success'>Upload a Photo</button>
					</div>

					<div id='styleWrapper'>
						<div id='styleWrapperText'><h3>Select Your Style</h3></div>

						{
							first20Styles.map(style =>
	          				<div key={style.id}><img className="styleImage img-thumbnail" src={style.url} onClick={() => this.setState({ style: style.id}, function () { console.log(this.state.style)})}/></div>)}
	        			
	        				
							<img className="styleImage img-thumbnail" onClick={() => this.setState({ style: "style1"}, function () { console.log(this.state.style)})} src={borat}/>
							<img className="styleImage img-thumbnail" onClick={() => this.setState({ style: "style2"}, function () { console.log(this.state.style)})} src={borat}/>
							<img className="styleImage img-thumbnail" onClick={() => this.setState({ style: "style3"}, function () { console.log(this.state.style)})} src={borat}/>

					</div>
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

 