import React from 'react';

import './MealSection.css';

class MealSection extends React.Component {
    constructor() {
        super();
    }

    render() {
        // will get actual text from API
        let sideClass;
        this.props.side === 'left' ? sideClass = 'Left' : sideClass = 'Right'
        const style = { backgroundColor : this.props.color };

        return(
            <div className = {"MealSection " + sideClass} style = {style}>
            </div>
        )
    }
}

/*                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.name}</p>
                <p>{this.props.data.prepTime}</p>
                <p>{this.props.data.percentCarbs}</p>
                <p>{this.props.data.percentFat}</p>
                <p>{this.props.data.percentProtein}</p>
                <p>{this.props.data.ingredients}</p>
                <p>{this.props.data.instructions}</p>*/


export default MealSection;