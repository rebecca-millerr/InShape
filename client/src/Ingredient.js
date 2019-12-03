import React from 'react';

class Ingredient extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <li>{this.props.amount} {this.props.unit} - {this.props.name}</li>
        )
    }
}

export default Ingredient;