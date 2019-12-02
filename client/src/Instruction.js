import React from 'react';

class Instruction extends React.Component {
    constructor() {
        super();
    }

    render() {
        
        let sentence;

        if ( this.props.text.charAt(0) === ' ' ) {
        	sentence = this.props.text.slice(1);
        }
        else {
        	sentence = this.props.text;
        }

        if ( sentence === '' ) {
        	return(<div></div>)
        }

        return(
            <li>{sentence}</li>
        )
    }
}

export default Instruction;