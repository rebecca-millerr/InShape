import React from 'react'

import '.ContactInformation.css';

class ContactInformation extends React.Component {
	constructor() {
		super(); 
	}

	render() {
		return(
			<div ClassName = "ContactInformation">
				<h1 ClassName = "ContactUs"> Questions? Contact us! </h2>
				<p className = "Information"> Phone: (617)320-4959 </p>
				<p className = "Information"> Email: contact@inshape.com </p>
			</div>
		)
	}
}

export default ContactInformation;