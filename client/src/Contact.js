import React from 'react'

import ContactInformation from './ContactInformation';

import './Contact.css';

class Contact extends React.Component {

	render() {
		return (
			<div className = "Contact">	
				<ContactInformation />
			</div>
		)
	}
}

export default Contact;