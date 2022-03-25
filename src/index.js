import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from './grid.js'

class App extends Component {
    render(){
        return(
            <Grid />
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));