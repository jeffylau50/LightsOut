import React, { Component } from 'react';
import './box.css'

class Box extends Component {
    render(){
        return(
            
            <div className={`boxStyle ${this.props.lit == true && `boxLit`}`} ></div>
            
        )
    }
}

export default Box;
