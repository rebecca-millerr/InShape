import React from 'react'

import '.Contact_splash.css';

class Contact_splash extends React.Component {
	constructor() {
		super(); 
	}

	render() {
		return(
			<div ClassName = "Contact_splash">
				<h2> Questions? Contact us! </h2>
				<p> Phone: (617)320-4959 </p>
				<p> Email: contact@inshape.com </p>
			</div>
		)
	}
}

export default Contact_splash;