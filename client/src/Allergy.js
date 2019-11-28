import React from 'react';

import './Allergy.css';

class Allergy extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className = "Allergy" onClick = {() => this.props.deleteMe(this.props.id)}>
                {this.props.allergy}
            </div>
        )
    }
}

export default Allergy;