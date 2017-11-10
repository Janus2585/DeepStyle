import React from 'react'
import ReactDOM from 'react-dom'
import SimpleSlider from './SimpleSlider'
import StyleSelection from './StyleSelection'
import UploadUserImage from './UploadUserImage'
import StyledImage from './StyledImage'

class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<div id='contentContainer'>
					<div id = 'introSection'>
						<h1 id='introText'>Add an artistic flair to your photos</h1>
					</div>
					<div id = 'introPics'>
						<SimpleSlider/>
					</div>
					<div id="callToAction">
						<div id='callToActionButtons'>
							<div id='callToActionButton1'>
								<button className='callToActionbtn'>DeepStyle Your Photo</button>
							</div>
							<div id='callToActionButton2'>
								<button className='callToActionbtn'>See other peoples creations</button>
							</div>
						</div>
					</div>
					<StyleSelection />
					<UploadUserImage />
					<StyledImage />
				</div>
			</div>
		)
	}
}

export default Home