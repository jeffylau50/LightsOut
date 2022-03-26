import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from './grid.js'
import './index.css'

class App extends Component {
    render(){
        return(
            
            <div> 
            <Grid />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));