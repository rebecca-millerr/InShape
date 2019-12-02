import React from 'react';

import './OneExercise.css';

class OneExercise extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className = "OneExercise">
                <h3 className = "ExerciseName">{this.props.name}</h3>
                <div dangerouslySetInnerHTML={{ __html: this.props.description}} />
            </div>
        )
    }
}

export default OneExercise;