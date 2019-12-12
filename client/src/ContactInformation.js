import React from 'react'

import './ContactInformation.css';

class ContactInformation extends React.Component {
	
	render() {
		return(
			<div>
				<p className = "ContactHeading"> Contact Us! </p>
				<p className = "ContactHeading2"> Questions? Concerns? Reviews? We would love to hear from you! Please feel free to reach out to us at InShape at any time, and we will get back to you at our earliest convience. </p>
				<p className = "ContactText"> <b>Phone:</b> (617) 320-4959 </p>
				<p className = "ContactText"> <b>Email:</b> contact@inshape.com </p>
			</div>
		)
	}
}

export default ContactInformation;