import React from 'react';

import './MissionStatement.css';

class MissionStatement extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className = "MissionStatement">
            <h1 className = "MissionHeading"> Mission Statement </h1>
                <p className = "MissionText">To create a version of your body that makes you the happiest and healthiest version of yourself.</p>
            </div>
        )
    }
}

export default MissionStatement;