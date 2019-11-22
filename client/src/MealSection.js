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
                <h2>{this.props.title}</h2>
                <p>Cupim pork belly meatball chuck beef ribs beef pig picanha tenderloin pork chop tongue prosciutto pastrami meatloaf jerky.</p>
            </div>
        )
    }
}

export default MealSection;