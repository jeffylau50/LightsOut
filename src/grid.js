import React, { Component } from 'react';
import Box from './box.js'
import './grid.css'

class Grid extends Component {

    static defaultProps ={
        title: '5x5 Lights Out',
        row: 5,
        column: 5
    }
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
   
   
   
    render(){
        return(
            <div className='container mt-5'>
            <div className='row'>
            <Box  />
            <Box />
            <Box />
            <Box />
            <Box />
            </div>
            <div className='row'>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            </div>
            <div className='row'>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            </div>
            <div className='row'>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            </div>
            <div className='row'>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            </div>
            </div>
        )
    }
}

export default Grid;