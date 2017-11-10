import React from 'react'
import ReactDOM from 'react-dom'

/*
import style1 from '../img/style1.jpg'
import style2 from '../img/style2.jpg'
import style3 from '../img/style3.jpg'
*/
import borat from '../img/borat.jpg'

export default class DeepStyleYourPic extends React.Component {
	constructor() {
		super();
		this.state = {
			style: "style1",
			isProcessed: "false"
		};
		//this.handleClick = this.handleClick.bind(this);
	}

	//handleClick(selectionNumber) {
		//this.setState({style:selectionNumber});
	//}

	render() {
		return(
			<div id='deepStyleYourPicSection'>
				<div id='deepStyleYourPicContainer' className='container'>
					<div id='uploadPhoto'>
						<h3>Upload Your Photo Here</h3>
						<button className='btn-success'>Upload a Photo</button>
					</div>

					<div id='styleWrapper'>
						<div id='styleWrapperText'><h3>Select Your Style</h3></div>
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

 