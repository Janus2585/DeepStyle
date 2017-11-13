import React from 'react';
import borat from '../img/borat.jpg'

var SampleDeepStyles = () => {
	return(
		<div id='sampleDeepStylesSection'>
			<div id='sampleDeepStylesContainer' className='container'>
				<div id='sampleDeepStylesHeader'>
					<h3>See What Others Have Made</h3>
				</div>
				<div id='sampleDeepStylesImages'>
					<div id='sampleDeepStyleImage'>
						<img src={borat} alt='borat'/>
					</div>
					<div id='sampleDeepStyleImage'>
						<img src={borat} alt='borat'/>
					</div>
					<div id='sampleDeepStyleImage'>
						<img src={borat} alt='borat'/>
					</div>
					<div id='sampleDeepStyleImage'>
						<img src={borat} alt='borat'/>
					</div>
					<div id='sampleDeepStyleImage'>
						<img src={borat} alt='borat'/>
					</div>
					<div id='sampleDeepStyleImage'>
						<img src={borat} alt='borat'/>
					</div>
					<div id='sampleDeepStyleImage'>
						<img src={borat} alt='borat'/>
					</div>
					<div id='sampleDeepStyleImage'>
						<img src={borat} alt='borat'/>
					</div>
					<div id='sampleDeepStyleImage'>
						<img src={borat} alt='borat'/>
					</div>
					<button className='btn-primary btn-lg'>Create Your Own For Free</button>
				</div>
			</div>
		</div>
	);
}

export default SampleDeepStyles