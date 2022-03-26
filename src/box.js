import React, { Component } from 'react';
import './box.css'

class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxStatus: true,
            boxColor: {backgroundColor: 'rgb(87 ,87 ,87)'}
        };
        this.handleClickBox = this.handleClickBox.bind(this);
    }

    handleClickBox(e){
        console.log('work')
        if (this.state.boxStatus === true){
            return this.setState({ boxStatus : false, boxColor: {backgroundColor: 'rgb(36, 253, 253)'}})
        } else if (this.state.boxStatus === false){
            return this.setState({ boxStatus: true, boxColor: {backgroundColor: 'rgb(87 ,87 ,87)'}})
        }
    }
    render(){
        return(
            
            
            <div onClick={this.handleClickBox} style= {this.state.boxColor} className={`boxStyle`} ></div>
            
            
        )
    }
}

export default Box;