import React, { Component } from 'react';
import Box from './box.js'

class Grid extends Component {
    render(){
        return(
            <div>
            <Box lit={true} />
            <Box lit={false} />
            </div>
        )
    }
}

export default Grid;