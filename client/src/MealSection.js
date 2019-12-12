import React from 'react';

import './MealSection.css';
import Ingredient from './Ingredient';

class MealSection extends React.Component {

    render() {

        const ingredients = this.props.data.ingredients.map(ingredient =>
            <Ingredient
                key = {ingredient.name + Math.random()}
                name = {ingredient.name}
                amount = {ingredient.amount}
                unit = {ingredient.unit}
            />);

        return(
            <div className = "MealSection">
                <div className = "MealTopInfo">
                    <img className = "MealImage" src = {this.props.data.imageSource} alt = {this.props.data.name} />
                    <h2 className = "MealTitle">{this.props.data.name}</h2>
                    <div className = "MealText">
                        <div className = "LineContainer"> 
                            <p className = "ShortLine">
                                <b>Prep Time: </b>
                                {this.props.data.prepTime} minutes
                            </p>
                        </div>
                        <div className = "LineContainer">
                            <p className = "ShortLine">
                                <b>Servings: </b>
                                {this.props.data.servings}
                            </p>
                        </div>
                        <div className = "LineContainer">
                            <p className = "ShortLine">
                                <b>Calories: </b>
                                {this.props.data.calories}
                            </p>
                        </div>
                        <div className = "LineContainer">
                            <p className = "ShortLine">
                                <b>Percent Carbs: </b>
                                {this.props.data.percentCarbs}%
                            </p>
                        </div>
                        <div className = "LineContainer">
                            <p className = "ShortLine">
                                <b>Percent Fat: </b>
                                {this.props.data.percentFat}%
                            </p>
                        </div>
                        <div className = "LineContainer">
                            <p className = "ShortLine">
                                <b>Percent Protein: </b>
                                {this.props.data.percentProtein}%
                            </p>
                        </div>
                    </div>
                </div>
                <div className = "MealText">
                    <hr className = "DividerLine"/>
                    <ul>{ingredients}</ul>
                    <hr className = "DividerLine"/>
                    <div dangerouslySetInnerHTML={{ __html: this.props.data.instructions}} />
                </div>
            </div>
        )
    }
}

// <ol>{instructions}</ol>

export default MealSection;