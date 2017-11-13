import React from 'react';
import borat from '../img/borat.jpg'
import sourceImg from '../img/steps/source2.JPG'
import styleImg from '../img/steps/style.JPG'
import resultImg from '../img/steps/result2.jpg'

var HowItWorks = () => {
	return (
		<div id='howItWorksSection'>
			<div id='howItWorksContainer' className='container'>
				<div id='HowItWorksHeader'>
					<h3>How It Works</h3>
				</div>
				<div id='howToSteps'>
					<div id='howToStep'>
						<img src={sourceImg} alt='borat'/>
						<p>Upload Photo</p>
					</div>
					<div id='howToStep'>
						<img src={styleImg} alt='borat'/>
						<p>Pick A Style</p>
					</div>
					<div id='howToStep'>
						<img src={resultImg} alt='borat'/>
						<p>Restyle your image</p>
					</div>
				</div>
				<button className='btn-primary btn-lg'>Create Your Own For Free</button>
			</div>
		</div>
	);
}

export default HowItWorks