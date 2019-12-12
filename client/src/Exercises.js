import React from 'react';

import './Exercises.css';
import ExerciseByMuscle from './ExerciseByMuscle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

class Exercises extends React.Component {
    constructor() {
        super();

        this.state = {
            abs       : false,
            arms      : false,
            back      : false,
            calves    : false,
            chest     : false,
            legs      : false,
            shoulders : false,

            absData       : null,
            armsData      : null,
            backData      : null,
            calvesData    : null,
            chestData     : null,
            legsData      : null,
            shouldersData : null,

            finished : false,

            exercises : null,
            triggered : false
        }

        this.fetchAbs = this.fetchAbs.bind(this);
        this.fetchArms = this.fetchArms.bind(this);
        this.fetchBack = this.fetchBack.bind(this);
        this.fetchCalves = this.fetchCalves.bind(this);
        this.fetchChest = this.fetchChest.bind(this);
        this.fetchLegs = this.fetchLegs.bind(this);
        this.fetchShoulders = this.fetchShoulders.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.findExercises = this.findExercises.bind(this);
    }

    async componentDidMount() {

        await this.fetchAbs();
        await this.fetchArms();
        await this.fetchBack();
        await this.fetchCalves();
        await this.fetchChest();
        await this.fetchLegs();
        await this.fetchShoulders();

        this.setState({
            finished : true
        });
    }

    async fetchAbs() {
        // abs
        await fetch('https://wger.de/api/v2/exercise/?category=' + 10 
              + '&limit=204&language=2&status=2')
            .then(response => response.json())
            .then(data => {
                let rand1 = Math.floor(Math.random() * (data.results.length));
                let rand2 = rand1;

                while (rand1 === rand2){
                    rand2 = Math.floor(Math.random() * (data.results.length));
                };

                const tempData = {
                    muscle : 'Ab',
                    exercises : [
                        {
                            name        : data.results[rand1].name,
                            description : data.results[rand1].description
                        },
                        {
                            name        : data.results[rand2].name,
                            description : data.results[rand2].description
                        }
                    ]
                }

                this.setState({
                  absData : tempData
                });
            });
    }

    async fetchArms() {
        // arms
        await fetch('https://wger.de/api/v2/exercise/?category=' + 8 
              + '&limit=204&language=2&status=2')
            .then(response => response.json())
            .then(data => {
                let rand1 = Math.floor(Math.random() * (data.results.length));
                let rand2 = rand1;

                while (rand1 === rand2){
                    rand2 = Math.floor(Math.random() * (data.results.length));
                };

                const tempData = {
                    muscle : 'Arm',
                    exercises : [
                        {
                            name        : data.results[rand1].name,
                            description : data.results[rand1].description
                        },
                        {
                            name        : data.results[rand2].name,
                            description : data.results[rand2].description
                        }
                    ]
                }

                this.setState({
                  armsData : tempData
                });
            });
    }

    async fetchBack() {
        // back
        await fetch('https://wger.de/api/v2/exercise/?category=' + 12 
              + '&limit=204&language=2&status=2')
            .then(response => response.json())
            .then(data => {
                let rand1 = Math.floor(Math.random() * (data.results.length));
                let rand2 = rand1;

                while (rand1 === rand2){
                    rand2 = Math.floor(Math.random() * (data.results.length));
                };

                const tempData = {
                    muscle : 'Back',
                    exercises : [
                        {
                            name        : data.results[rand1].name,
                            description : data.results[rand1].description
                        },
                        {
                            name        : data.results[rand2].name,
                            description : data.results[rand2].description
                        }
                    ]
                }

                this.setState({
                  backData : tempData
                });
            });
    }

    async fetchCalves() {
        // calves
        await fetch('https://wger.de/api/v2/exercise/?category=' + 14
              + '&limit=204&language=2&status=2')
            .then(response => response.json())
            .then(data => {
                let rand1 = Math.floor(Math.random() * (data.results.length));
                let rand2 = rand1;

                while (rand1 === rand2){
                    rand2 = Math.floor(Math.random() * (data.results.length));
                };

                const tempData = {
                    muscle : 'Calf',
                    exercises : [
                        {
                            name        : data.results[rand1].name,
                            description : data.results[rand1].description
                        },
                        {
                            name        : data.results[rand2].name,
                            description : data.results[rand2].description
                        }
                    ]
                }

                this.setState({
                  calvesData : tempData
                });
            });
    }

    async fetchChest() {
        // chest
        await fetch('https://wger.de/api/v2/exercise/?category=' + 11
              + '&limit=204&language=2&status=2')
            .then(response => response.json())
            .then(data => {
                let rand1 = Math.floor(Math.random() * (data.results.length));
                let rand2 = rand1;

                while (rand1 === rand2){
                    rand2 = Math.floor(Math.random() * (data.results.length));
                };

                const tempData = {
                    muscle : 'Chest',
                    exercises : [
                        {
                            name        : data.results[rand1].name,
                            description : data.results[rand1].description
                        },
                        {
                            name        : data.results[rand2].name,
                            description : data.results[rand2].description
                        }
                    ]
                }

                this.setState({
                  chestData : tempData
                });
            });
    }

    async fetchLegs() {
        // legs
        await fetch('https://wger.de/api/v2/exercise/?category=' + 9
              + '&limit=204&language=2&status=2')
            .then(response => response.json())
            .then(data => {
                let rand1 = Math.floor(Math.random() * (data.results.length));
                let rand2 = rand1;

                while (rand1 === rand2){
                    rand2 = Math.floor(Math.random() * (data.results.length));
                };

                const tempData = {
                    muscle : 'Leg',
                    exercises : [
                        {
                            name        : data.results[rand1].name,
                            description : data.results[rand1].description
                        },
                        {
                            name        : data.results[rand2].name,
                            description : data.results[rand2].description
                        }
                    ]
                }

                this.setState({
                  legsData : tempData
                });
            });
    }

    async fetchShoulders() {
        // shoulders
        await fetch('https://wger.de/api/v2/exercise/?category=' + 13
              + '&limit=204&language=2&status=2')
            .then(response => response.json())
            .then(data => {
                let rand1 = Math.floor(Math.random() * (data.results.length));
                let rand2 = rand1;

                while (rand1 === rand2){
                    rand2 = Math.floor(Math.random() * (data.results.length));
                };

                const tempData = {
                    muscle : 'Shoulder',
                    exercises : [
                        {
                            name        : data.results[rand1].name,
                            description : data.results[rand1].description
                        },
                        {
                            name        : data.results[rand2].name,
                            description : data.results[rand2].description
                        }
                    ]
                }

                this.setState({
                  shouldersData : tempData
                });
            });
    }

    handleChange(event) {
        const {name, checked} = event.target;
        this.setState({
            [name] : checked
        });
    }

    async findExercises() {

        this.setState({
            exercises : null
        });

        let exerciseSections = [];

        this.setState({
            triggered : true
        });

        await this.componentDidMount();

        if ( this.state.finished ) {
            if ( this.state.abs ) {
                exerciseSections.push(
                    <ExerciseByMuscle 
                        key       = {this.state.absData.muscle}
                        muscle    = {this.state.absData.muscle}
                        exercises = {this.state.absData.exercises}
                    />);
            }
            if ( this.state.arms ) {
                exerciseSections.push(
                    <ExerciseByMuscle 
                        key       = {this.state.armsData.muscle}
                        muscle    = {this.state.armsData.muscle}
                        exercises = {this.state.armsData.exercises}
                    />);
            }
            if ( this.state.back ) {
                exerciseSections.push(
                    <ExerciseByMuscle 
                        key       = {this.state.backData.muscle}
                        muscle    = {this.state.backData.muscle}
                        exercises = {this.state.backData.exercises}
                    />);
            }
            if ( this.state.calves ) {
                exerciseSections.push(
                    <ExerciseByMuscle 
                        key       = {this.state.calvesData.muscle}
                        muscle    = {this.state.calvesData.muscle}
                        exercises = {this.state.calvesData.exercises}
                    />);
            }
            if ( this.state.chest ) {
                exerciseSections.push(
                    <ExerciseByMuscle 
                        key       = {this.state.chestData.muscle}
                        muscle    = {this.state.chestData.muscle}
                        exercises = {this.state.chestData.exercises}
                    />);
            }
            if ( this.state.legs ) {
                exerciseSections.push(
                    <ExerciseByMuscle 
                        key       = {this.state.legsData.muscle}
                        muscle    = {this.state.legsData.muscle}
                        exercises = {this.state.legsData.exercises}
                    />);
            }
            if ( this.state.shoulders ) {
                exerciseSections.push(
                    <ExerciseByMuscle 
                        key       = {this.state.shouldersData.muscle}
                        muscle    = {this.state.shouldersData.muscle}
                        exercises = {this.state.shouldersData.exercises}
                    />);
            }
        }
        else {
            exerciseSections = null;
        }

        this.setState({
            exercises : exerciseSections
        });
    }

    render() {

        let loading = 'Loading...';

        let loadingStyle;

        if ( this.state.triggered && ! this.state.finished && ( this.state.abs || this.state.arms 
             || this.state.back || this.state.calves || this.state.chest 
             || this.state.legs || this.state.shoulders ) ) {
            loadingStyle = { display : 'block' };
        }
        else {
            loadingStyle = { display : 'none' };
        }

        return(
            <div className = "ExercisesPage">
                <h1 className = "ExercisesHeading">
                    Select as many muscle groups as you'd like and we'll provide you with exercises!
                </h1>
                <form className = "ExercisesFormBox">
                    <div className = "CheckboxBox">
                        <label className = "CheckboxOption">
                            <input
                                type = "checkbox"
                                name = "abs"
                                checked = {this.state.abs}
                                onChange = {this.handleChange}
                                className = "ExerciseCheckbox"
                            /> 
                            <div className = "NoCheckCheckbox"></div>
                            <FontAwesomeIcon icon = {faCheckSquare} className = "CheckedCheckbox"/>
                            Abs
                        </label>
                        <label className = "CheckboxOption">
                            <input
                                type = "checkbox"
                                name = "arms"
                                checked = {this.state.arms}
                                onChange = {this.handleChange}
                                className = "ExerciseCheckbox"
                            /> 
                            <div className = "NoCheckCheckbox"></div>
                            <FontAwesomeIcon icon = {faCheckSquare} className = "CheckedCheckbox"/>
                            Arms
                        </label>
                        <label className = "CheckboxOption">
                            <input
                                type = "checkbox"
                                name = "back"
                                checked = {this.state.back}
                                onChange = {this.handleChange}
                                className = "ExerciseCheckbox"
                            /> 
                            <div className = "NoCheckCheckbox"></div>
                            <FontAwesomeIcon icon = {faCheckSquare} className = "CheckedCheckbox"/>
                            Back
                        </label>
                        <label className = "CheckboxOption">
                            <input
                                type = "checkbox"
                                name = "calves"
                                checked = {this.state.calves}
                                onChange = {this.handleChange}
                                className = "ExerciseCheckbox"
                            /> 
                            <div className = "NoCheckCheckbox"></div>
                            <FontAwesomeIcon icon = {faCheckSquare} className = "CheckedCheckbox"/>
                            Calves
                        </label>
                        <label className = "CheckboxOption">
                            <input
                                type = "checkbox"
                                name = "chest"
                                checked = {this.state.chest}
                                onChange = {this.handleChange}
                                className = "ExerciseCheckbox"
                            /> 
                            <div className = "NoCheckCheckbox"></div>
                            <FontAwesomeIcon icon = {faCheckSquare} className = "CheckedCheckbox"/>
                            Chest
                        </label>
                        <label className = "CheckboxOption">
                            <input
                                type = "checkbox"
                                name = "legs"
                                checked = {this.state.legs}
                                onChange = {this.handleChange}
                                className = "ExerciseCheckbox"
                            /> 
                            <div className = "NoCheckCheckbox"></div>
                            <FontAwesomeIcon icon = {faCheckSquare} className = "CheckedCheckbox"/>
                            Legs
                        </label>
                        <label className = "CheckboxOption">
                            <input
                                type = "checkbox"
                                name = "shoulders"
                                checked = {this.state.shoulders}
                                onChange = {this.handleChange}
                                className = "ExerciseCheckbox"
                            /> 
                            <div className = "NoCheckCheckbox"></div>
                            <FontAwesomeIcon icon = {faCheckSquare} className = "CheckedCheckbox"/>
                            Shoulders
                        </label>
                    </div>
                    <div>
                        <div onClick = {this.findExercises} className = "ExercisesSubmitButton">Find Exercises!</div>
                    </div>  
                </form>
                <p className = "Loading" style = {loadingStyle}>
                    {loading}
                </p>
                {this.state.exercises}
            </div>
        )
    }
}


export default Exercises;