import React from 'react';

import './ExerciseByMuscle.css';
import OneExercise from './OneExercise';

class ExerciseByMuscle extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className = "ExerciseByMuscle">
                <h2 className = "MuscleGroup">Your {this.props.muscle} Exercises</h2>
                <div className = "ExerciseContainer">
                    <OneExercise   
                        name = {this.props.exercises[0].name}
                        description = {this.props.exercises[0].description}
                    />
                    <OneExercise   
                        name = {this.props.exercises[1].name}
                        description = {this.props.exercises[1].description}
                    />
                </div>
            </div>
        )
    }
}

export default ExerciseByMuscle;