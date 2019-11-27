import React from 'react'

import ContactInformation from './ContactInformation';

import './Contact.css';

class Contact extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className = "Contact">	
				<ContactInformation />
			</div>
		)
	}
}

export default Contact;