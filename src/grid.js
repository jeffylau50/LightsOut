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
    

        return(
           <div>
               <h1>{this.props.title}</h1>
               <h1>{this.props.board}</h1>
           <table>
            
            <tr>
            <th><Box /></th>
            <th><Box /></th>
            <th><Box /></th>   
            <th><Box /></th>        
            <th><Box /></th>        
            </tr>
            
         </table>
         </div>
        )
    }
}

export default Grid;