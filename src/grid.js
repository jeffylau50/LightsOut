import React, { Component } from 'react';
import Box from './box.js'
import './grid.css'

class Grid extends Component {

    static defaultProps ={
        title: '5x5 Lights Out',
        row: 5,
        column: 5,
        chance: 0.25
    }
    constructor(props){
        super(props);
        this.state = {
        win: false,
        board: this.createBoard()
        };
        this.handleClick= this.handleClick.bind(this);
    }


    createBoard(){
    let board = []
    for(let y=0;y<this.props.row;y++){
        let row =[];
       for (let x=0; x<this.props.column; x++){
         row.push(Math.random() < this.props.chance)
       }
        board.push(row);
    }
    return board
    }

   handleClick(){
       if(this.state.lit){
           return this.setState({lit: false})
       } else if (!this.state.lit){
           return this.setState({lit: true})
       }
   }
   
  
   
    render(){
    let table = [];
    for(let y = 0; y <this.props.row; y++){
        let row = [];
        for (let x = 0; x < this.props.column;x++){
            row.push(<Box lit={this.state.board[y][x]}/>)
        }
        table.push(<tr>{row}</tr>);
    }

        return(
           <div>
               <h1>{this.props.title}</h1>
               
           <table className='gridCSS'>
            
            {table}
            
         </table>
         </div>
        )
    }
}

export default Grid;