import React from 'react';

import './MealSection.css';
import Ingredient from './Ingredient';
import Instruction from './Instruction';

class MealSection extends React.Component {

    render() {

        const ingredients = this.props.data.ingredients.map(ingredient =>
            <Ingredient
                key = {ingredient.name}
                name = {ingredient.name}
                amount = {ingredient.amount}
                unit = {ingredient.unit}
            />);

        const noHTML = this.props.data.instructions.replace(/<[^>]*>?/gm, '');
        const sentences  = noHTML.split('.');

        const instructions = sentences.map(sentence => 
            <Instruction
                key = {sentence}
                text = {sentence}
            />)
        // const noHTML = words.filter((value, index, arr) => {
        //     return value !== '<ol>' && value !== '</ol>' && value !== '<li>'
        //            && value !== '</li>' && value !== ''
        // })

        return(
            <div className = "MealSection">
                <h2 className = "MealTitle">{this.props.data.name}</h2>
                <div className = "MealText">
                    <p className = "ShortLine"><b>Prep Time: </b>{this.props.data.prepTime} minutes</p>
                    <p className = "ShortLine"><b>Percent Carbs: </b>{this.props.data.percentCarbs}%</p>
                    <p className = "ShortLine"><b>Percent Fat: </b>{this.props.data.percentFat}%</p>
                    <p className = "ShortLine"><b>Percent Protein: </b>{this.props.data.percentProtein}%</p>
                    <hr className = "DividerLine"/>
                    <ul>{ingredients}</ul>
                    <hr className = "DividerLine"/>
                    <ol>{instructions}</ol>
                </div>
            </div>
        )
    }
}

export default MealSection;