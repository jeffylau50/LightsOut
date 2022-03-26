import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from './grid.js'
import './index.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        row: 6,
        column: 6,
        };
        this.inputChange3x3= this.inputChange3x3.bind(this);
        this.inputChange5x5= this.inputChange5x5.bind(this);
        this.inputChange6x6= this.inputChange6x6.bind(this);
        this.newgame= this.newgame.bind(this);
    }
    inputChange3x3(e){
        this.setState({row: 3, column: 3})
        
    }
    inputChange5x5(e){
        this.setState({row: 5, column: 5})
        
    }
    inputChange6x6(e){
        this.setState({row: 6, column: 6})

    }
    newgame(e){
        window.location.reload();
        this.setState({row: this.state.row, column: this.state.column})
    }
    render(){
        return(
            
            <div className='App'> 
            
            <Grid row={this.state.row} column={this.state.column} />

            <a  onClick={this.newgame} class="neon-button neon-button__2">New Game</a>
            <a  onClick={this.inputChange3x3} className="neon-button neon-button__1 buttonCustom">Easy</a>
            <a  onClick={this.inputChange5x5} className="neon-button neon-button__3 buttonCustom">Hard</a>
            <a  onClick={this.inputChange6x6} className="neon-button neon-button__4 buttonCustom">Very Hard</a>

             
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));