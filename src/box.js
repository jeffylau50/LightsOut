import React, { Component } from 'react';
import './box.css'

class Box extends Component {
    constructor(props){
        super(props);
        this.handleClick= this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.action();
    }
     
    render(){
        return(
            
            <div onClick={this.handleClick} className={`boxStyle ${this.props.lit == true && `boxLit`}`} ></div>
            
        )
    }
}

export default Box;
