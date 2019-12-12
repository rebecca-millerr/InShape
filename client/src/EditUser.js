import React from 'react';

import './SignUp.css';
import Allergy from './Allergy';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const passwordHash = require('password-hash');

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            username   : "",
            password   : "",
            password2  : "",
            email      : "",
            units      : "",
            gender     : "",
            height     : "",
            currWeight : "",
            goalWeight : "",
            age        : "",
            activity   : "",
            diet       : "",

            hashedPassword : "",

            currAllergy : "",
            allergies   : [],
            lastKey     : -1,

            unitsHidden    : true,
            genderHidden   : true,
            activityHidden : true,
            dietHidden     : true,
            allergyHidden  : true,

            updated        : false
        }

        this.getUserInfo = this.getUserInfo.bind(this);

        this.handleChange  = this.handleChange.bind(this);
        this.clickToDelete = this.clickToDelete.bind(this);
        this.hover         = this.hover.bind(this);
        this.calculate     = this.calculate.bind(this);

    }

    async componentDidMount() {
        
        // const response = await fetch('/info/' + this.props.username);
        // console.log(response)
        // const json = await response.json();
        // console.log(json);

        // let json;

        // while ( !json || !json.username ) {
        // json = this.getUserInfo();
        // }
        // const response = await fetch('/info/' + this.props.username);
        // console.log(response)
        // const json = await response.json();
        // console.log(json);

        // this.setState({
        //     username       : json.username,
        //     email          : json.email,
        //     units          : json.units,
        //     gender         : json.sex,
        //     height         : json.height,
        //     currWeight     : json.weight,
        //     goalWeight     : json.goal_weight,
        //     age            : json.age,
        //     activity       : json.activity,
        //     diet           : json.diet,
        //     hashedPassword : json.password
        // })
        // sort out allergies, give them keys
    }

    async getUserInfo() {
        const response = await fetch('/info/' + this.props.username);
        console.log(response)
        const json = await response.json();
        console.log(json);
        return json;
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });

        // updates list of allergies if necessary and clears current field
        if ( name === 'currAllergy' && value.substr(value.length - 1) === ',' ) {
            this.setState(prevState => {
                const allergyNoComma = value.substr(0, value.length - 1);
                prevState.allergies.push({
                    id : prevState.lastKey + 1,
                    allergy : allergyNoComma
                });

                return {
                    currAllergy : "",
                    allergies : prevState.allergies,
                    lastKey : prevState.lastKey + 1
                }
            })
        } 
    }

    clickToDelete(key) {
        for ( let i = 0; i < this.state.allergies.length; i++ ) {
            if ( this.state.allergies[i].id === key ) {
                this.setState(prevState => {
                    prevState.allergies.splice(i, 1);

                    return { allergies : prevState.allergies }
                });
                break;
            }
        }
    }

    hover(item) {
        switch(item) {
            case 'units':
                this.setState(prevState => ({
                    unitsHidden : ! prevState.unitsHidden
                }));
                break;
            case 'gender':
                this.setState(prevState => ({
                    genderHidden : ! prevState.genderHidden
                }));
                break;
            case 'activity':
                this.setState(prevState => ({
                    activityHidden : ! prevState.activityHidden
                }));
                break;
            case 'diet':
                this.setState(prevState => ({
                    dietHidden : ! prevState.dietHidden
                }));
                break;
            case 'allergy':
                this.setState(prevState => ({
                    allergyHidden : ! prevState.allergyHidden
                }));
                break;
            default:
                break;
        }
        
    }

    calculate() {

        // calorie intake calculation
        let activityMult;

        switch(this.state.activity) {
            case 'veryLight':
                activityMult = 1.2;
                break;
            case 'light':
                activityMult = 1.375;
                break;
            case 'moderate':
                activityMult = 1.55;
                break;
            case 'heavy':
                activityMult = 1.725;
                break;
            case 'veryHeavy':
                activityMult = 1.9;
                break;
            default:
                break;
        }

        let bmr, calories;

        if ( this.state.gender === 'male' ) {
            bmr = 66 + ( 6.3 * this.state.currWeight ) 
                  + ( 12.9 * this.state.height ) 
                  - ( 6.8 * this.state.age );
        }
        else {
            bmr = 655 + ( 4.3 * this.state.currWeight )
                  + ( 4.7 * this.state.height )
                  - ( 4.7 * this.state.age );
        }

        calories = bmr * activityMult;


        // password validation and hashing
        if ( this.state.password !== this.state.password2 ) {
            alert('Error: Passwords must match.');
            return;
        }

        const hashedPassword = passwordHash.generate(this.state.password);

        // send to database
        // send first name
        // send last name
        // send username
        // send email
        // send hashed password
        // send age
        // send gender
        // send height
        // send current weight
        // send goal weight
        // send height
        // send activity level
        // send calories
        // send diet
        // send allergies
        // send created

        this.setState({
            firstName  : "",
            lastName   : "",
            username   : "",
            password   : "",
            password2  : "",
            email      : "",
            units      : "",
            gender     : "",
            height     : "",
            currWeight : "",
            goalWeight : "",
            age        : "",
            activity   : "",
            diet       : "",

            currAllergy : "",
            allergies   : [],
            lastKey     : -1,

            updated     : true
        });

        // TODO: feed this as current user to database
    }

    render() {

        if ( this.state.updated ) {
            return(
                <div className = "SignUpPage">
                    <h1 className = "SignUpHeading">All done!</h1>
                </div>
            )
        }

        const allAllergies = this.state.allergies.map(allergy =>
            <Allergy
                deleteMe = {this.clickToDelete}
                key      = {allergy.id}
                id       = {allergy.id}
                allergy  = {allergy.allergy}
            />);

        const unitsMessage = 'Select the units in which you want to enter '
                              + 'your height and weight.';
        const genderMessage = 'We understand that you may not identify with '
                               + 'either of these genders. We use them solely '
                               + 'to calculate recommended daily calorie intake, '
                               + 'so select whichever you feel your body type '
                               + 'matches more closely.';
        const activityMessage = 'Very Light is a typical office job with mostly '
                                 + 'sitting and little walking. Light is any job '
                                 + 'with mostly standing or walking, e.g. teaching. '
                                 + 'Moderate is a job requiring physical activity, '
                                 + 'e.g. landscaping, cleaning, working out for 2 '
                                 + 'hours/day. Heavy is heavy manual labor, e.g. '
                                 + 'construction, dancer, working out for 4 hours/'
                                 + 'day. Very Heavy is moderate to hard physical '
                                 + 'activity 8+ hours/day';
        const dietMessage = 'Select the one diet that most closely represents your '
                             + 'current eating patterns, or select \'None\'.';
        const allergyMessage = 'Enter as many allergies as you\'d like, ending each '
                                + 'one with a comma (,). If you decide to delete '
                                + 'one, simply click it on the list on the right.';

        const unitsStyle    = this.state.unitsHidden    ? { display : 'none' } : { display : 'block' };
        const genderStyle   = this.state.genderHidden   ? { display : 'none' } : { display : 'block' };
        const activityStyle = this.state.activityHidden ? { display : 'none' } : { display : 'block' };
        const dietStyle     = this.state.dietHidden     ? { display : 'none' } : { display : 'block' };
        const allergyStyle  = this.state.allergyHidden  ? { display : 'none' } : { display : 'block' };

        let heightUnits, weightUnits;

        if ( this.state.units === 'imperial' ) {
            heightUnits = 'in';
            weightUnits = 'lb';
        }
        else if ( this.state.units === 'metric' ) {
            heightUnits = 'cm';
            weightUnits = 'kg';
        }
        else {
            heightUnits = '';
            weightUnits = '';
        }

        const ageUnits = 'yrs';

        return(
            <div className = "SignUpPage">
                <h1 className = "SignUpHeading">Has something changed? Update us!</h1>
                <form className = "FormBox">
                    <input 
                        type = "text" 
                        name = "firstName"
                        placeholder = "First Name"
                        onChange = {this.handleChange}
                        value = {this.state.firstName}
                        className = "TextField LongField"
                        required
                    />
                    <input 
                        type = "text" 
                        name = "lastName"
                        placeholder = "Last Name"
                        onChange = {this.handleChange}
                        value = {this.state.lastName}
                        className = "TextField LongField"
                        required
                    />
                    <br />

                    
                    <input 
                        type = "text"
                        name = "username"
                        placeholder = {this.state.username}
                        value = {this.state.username}
                        className = "TextField LongField" 
                        readOnly
                    />
                    <input 
                        type = "email"
                        name = "email"
                        placeholder = "Email"
                        onChange = {this.handleChange}
                        value = {this.state.email}
                        className = "TextField LongField" 
                        required
                    />
                    <br />

                    <input 
                        type = "password"
                        name = "password"
                        placeholder = "Password"
                        onChange = {this.handleChange}
                        value = {this.state.password}
                        className = "TextField LongField" 
                        required
                    />
                    <input 
                        type = "password"
                        name = "password2"
                        placeholder = "Confirm Password"
                        onChange = {this.handleChange}
                        value = {this.state.password2}
                        className = "TextField LongField" 
                        required
                    />
                    <br />
                    

                    <div className = "RadioSection">
                        <div className = "InlineRadioTitle">
                            Units:
                            <FontAwesomeIcon 
                                icon = {faQuestionCircle} 
                                className = "QuestionIcon"
                                onMouseEnter = {() => this.hover('units')} 
                                onMouseLeave = {() => this.hover('units')}
                            />
                            <div className = "HoverBox UnitsHoverBox" style = {unitsStyle}>
                                {unitsMessage}
                            </div>
                        </div>
                        <div className = "RadioBlock">
                            <label className = "RadioOption">
                                <input
                                    type = "radio"
                                    name = "units"
                                    value = "imperial"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.units === "imperial"}
                                    required
                                />
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Imperial
                            </label>
                        </div>
                        <div className = "RadioBlock">
                            <label className = "RadioOption">
                                <input
                                    type = "radio"
                                    name = "units"
                                    value = "metric"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.units === "metric"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Metric
                            </label>
                        </div>
                    </div>

                    <div className = "RadioSection">
                        <div className = "InlineRadioTitle">
                            Gender:
                            <FontAwesomeIcon 
                                icon = {faQuestionCircle} 
                                className = "QuestionIcon"
                                onMouseEnter = {() => this.hover('gender')}
                                onMouseLeave = {() => this.hover('gender')}
                            />
                            <div className = "HoverBox GenderHoverBox" style = {genderStyle}>
                                {genderMessage}
                            </div>
                        </div>
                        <div className = "RadioBlock">
                            <label className = "RadioOption">
                                <input
                                    type = "radio"
                                    name = "gender"
                                    value = "female"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.gender === "female"}
                                    required
                                />
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/> 
                                Female
                            </label>
                        </div>
                        <div className = "RadioBlock">
                            <label className = "RadioOption">
                                <input 
                                    type = "radio"
                                    name = "gender"
                                    value = "male"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.gender === "male"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Male
                            </label>
                        </div>
                    </div>

                    <div className = "InputContainer">
                        <input 
                            type = "text"
                            name = "height"
                            pattern = "[0-9]+"
                            placeholder = "Height"
                            onChange = {this.handleChange}
                            value = {this.state.height}
                            className = "TextField ShortField" 
                            required
                        />
                        <div className = "Units">
                            {heightUnits}
                        </div>
                    </div>
                    <div className = "InputContainer">
                        <input 
                            type = "text"
                            name = "currWeight"
                            pattern = "[0-9]+"
                            placeholder = "Current Weight"
                            onChange = {this.handleChange}
                            value = {this.state.currWeight}
                            className = "TextField ShortField" 
                            required
                        />
                        <div className = "Units">
                            {weightUnits}
                        </div>
                    </div>
                    <div className = "InputContainer">
                        <input 
                            type = "text"
                            name = "goalWeight"
                            pattern = "[0-9]+"
                            placeholder = "Goal Weight"
                            onChange = {this.handleChange}
                            value = {this.state.goalWeight}
                            className = "TextField ShortField"
                            required
                        />
                        <div className = "Units">
                            {weightUnits}
                        </div>
                    </div>
                    <div className = "InputContainer">
                        <input 
                            type = "text"
                            name = "age"
                            pattern = "[0-9]+"
                            placeholder = "Age"
                            onChange = {this.handleChange}
                            value = {this.state.age}
                            className = "TextField ShortField"
                            required
                        />
                        <div className = "Units">
                            {ageUnits}
                        </div>
                    </div>
                    <br />

                    <div className = "RadioSection">
                        <div className = "LongRadioTitle">
                            Activity level: 
                            <FontAwesomeIcon 
                                icon = {faQuestionCircle} 
                                className = "HighQuestionIcon"
                                onMouseEnter = {() => this.hover('activity')}
                                onMouseLeave = {() => this.hover('activity')}
                            />
                            <div className = "HoverBox ActivityHoverBox" style = {activityStyle}>
                                {activityMessage}
                            </div>
                        </div>
                        <br />
                        <div className = "WideRadioBlock">
                            <label className = "RadioOption FirstOption">
                                <input
                                    type = "radio"
                                    name = "activity"
                                    value = "veryLight"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.activity === "veryLight"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Very Light
                            </label>
                        </div>
                        <div className = "WideRadioBlock">
                            <label className = "RadioOption">
                                <input
                                    type = "radio"
                                    name = "activity"
                                    value = "light"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.activity === "light"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Light
                            </label>
                        </div>
                        <div className = "WideRadioBlock">
                            <label className = "RadioOption">
                                <input
                                    type = "radio"
                                    name = "activity"
                                    value = "moderate"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.activity === "moderate"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Moderate
                            </label>
                        </div>
                        <div className = "WideRadioBlock">
                            <label className = "RadioOption">
                                <input
                                    type = "radio"
                                    name = "activity"
                                    value = "heavy"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.activity === "heavy"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Heavy
                            </label>
                        </div>
                        <div className = "WideRadioBlock">
                            <label className = "RadioOption">
                                <input
                                    type = "radio"
                                    name = "activity"
                                    value = "veryHeavy"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.activity === "veryHeavy"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Very Heavy
                            </label>
                        </div>
                    </div>

                    <div className = "RadioSection">
                        <div className = "ShortRadioTitle">
                            Diet:
                            <FontAwesomeIcon 
                                icon = {faQuestionCircle} 
                                className = "HighQuestionIcon"
                                onMouseEnter = {() => this.hover('diet')}
                                onMouseLeave = {() => this.hover('diet')}
                            />
                            <div className = "HoverBox DietHoverBox" style = {dietStyle}>
                                {dietMessage}
                            </div>
                        </div>
                        <br />
                        <div className = "WideRadioBlock">    
                            <label className = "RadioOptionClose FirstOption">
                                <input
                                    type = "radio"
                                    name = "diet"
                                    value = "gluten-free"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.diet === "gluten-free"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Gluten Free
                            </label>
                        </div>
                        <div className = "WideRadioBlock">
                            <label className = "RadioOptionClose">
                                <input
                                    type = "radio"
                                    name = "diet"
                                    value = "ketogenic"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.diet === "ketogenic"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Ketogenic
                            </label>
                        </div>
                        <div className = "WideRadioBlock">
                            <label className = "RadioOptionClose">
                                <input
                                    type = "radio"
                                    name = "diet"
                                    value = "vegetarian"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.diet === "vegetarian"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Vegetarian
                            </label>
                        </div>
                        <div className = "WideRadioBlock">
                            <label className = "RadioOptionClose">
                                <input
                                    type = "radio"
                                    name = "diet"
                                    value = "vegan"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.diet === "vegan"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Vegan
                            </label>
                        </div>
                        <br />
                        <div className = "WideRadioBlock">
                            <label className = "RadioOptionClose FirstOption">
                                <input
                                    type = "radio"
                                    name = "diet"
                                    value = "pescetarian"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.diet === "pescetarian"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Pescetarian
                            </label>
                        </div>
                        <div className = "WideRadioBlock">
                            <label className = "RadioOptionClose">
                                <input
                                    type = "radio"
                                    name = "diet"
                                    value = "paleo"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.diet === "paleo"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Paleo
                            </label>
                        </div>
                        <div className = "WideRadioBlock">
                            <label className = "RadioOptionClose">
                                <input
                                    type = "radio"
                                    name = "diet"
                                    value = "primal"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.diet === "primal"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                Primal
                            </label>
                        </div>
                        <div className = "WideRadioBlock">
                            <label className = "RadioOptionClose">
                                <input
                                    type = "radio"
                                    name = "diet"
                                    value = "none"
                                    onChange = {this.handleChange}
                                    className = "RadioButton"
                                    checked = {this.state.diet === "none"}
                                    required
                                /> 
                                <div className = "NoCheckButton"></div>
                                <FontAwesomeIcon icon = {faCheckCircle} className = "CheckButton"/>
                                None
                            </label>
                        </div>
                    </div>
 
                    <div className = "AllergyEntry">
                        <input
                            type = "text"
                            name = "currAllergy"
                            placeholder = "Allergies"
                            onChange = {this.handleChange}
                            value = {this.state.currAllergy}
                            className = "TextField AllergyTextField"
                        /> 
                        <FontAwesomeIcon 
                            icon = {faQuestionCircle} 
                            className = "LowQuestionIcon"
                            onMouseEnter = {() => this.hover('allergy')}
                            onMouseLeave = {() => this.hover('allergy')}
                        />   
                        <div className = "HoverBox AllergyHoverBox" style = {allergyStyle}>
                                {allergyMessage}
                            </div>
                    </div>  
                    <div className = "AllergyBox">
                        {allAllergies}
                    </div>  

                    <div>
                        <div onClick = {this.calculate} className = "SubmitButton">Submit</div>
                    </div>  
                </form>
            </div>
        )
    }
}

export default SignUp;