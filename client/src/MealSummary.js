import React from 'react';

import './MealSummary.css';

class MealSummary extends React.Component {
    constructor() {
        super();
    }

    render() {
        const calories = Math.round(this.props.cals) + ' calories'
        const carbs    = Math.round(this.props.carbs) + 'g of carbohydrates, ';
        const fat      = Math.round(this.props.fat) + 'g of fat, and ';
        const protein  = Math.round(this.props.protein) + 'g of protein';

        return(
            <div className = "MealSummary">
                <p className = "MealSubtitle">Today's meals include:</p>
                <p>{calories}</p>
                <p>{carbs}{fat}{protein}</p>
            </div>
        )
    }
}

export default MealSummary;