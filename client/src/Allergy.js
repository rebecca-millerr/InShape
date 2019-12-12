import React from 'react';

import './Allergy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Allergy extends React.Component {

    render() {
        return(
            <div className = "Allergy" onClick = {() => this.props.deleteMe(this.props.id)}>
                {this.props.allergy}
                <FontAwesomeIcon icon={faTimes} className = "AllergyX"/>
            </div>
        )
    }
}

export default Allergy;