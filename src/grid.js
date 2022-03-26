import React, { Component } from 'react';
import Box from './box.js'
import './grid.css'

class Grid extends Component {

    static defaultProps ={
        title: 'Lights Out',
        row: 5,
        column: 5,
        chance: 0.25
    }
    constructor(props){
        super(props);
        this.state = {
        win: false,
        grid: this.createGrid()
        };
    }


    createGrid(){
    let grid = []
    for(let y=0;y<this.props.row;y++){
        let row =[];
       for (let x=0; x<this.props.column; x++){
         row.push(Math.random() < this.props.chance)
       }
        grid.push(row);
    }
    return grid
    }

    changeOthers(location){
        let {row, column} = this.props;
        let grid = this.state.grid;
        let [y,x] = location.split("-").map(Number);

        function change(y, x){
            if (x>= 0 && x < column && y>= 0 && y < row){
                grid[y][x] = !grid[y][x];
            }
        }
        change(y, x);
        change(y, x + 1);
        change(y, x -1);
        change(y + 1, x);
        change(y - 1, x)

        let win = grid.every(row => row.every(box => !box))
        
        this.setState({grid:grid, win: win})
    }

  
   
    render(){
    let table = [];
    for(let y = 0; y <this.props.row; y++){
        let row = [];
        for (let x = 0; x < this.props.column;x++){
            let location = `${y}-${x}`
            row.push(<Box key={location} lit={this.state.grid[y][x]}
            action={() => this.changeOthers(location)}
            />)
        }
        table.push(<tr>{row}</tr>);
    }

        return(
           <div>
               
               <h1>{this.state.win === true?'You won!':this.props.title}</h1>
               <br /> <br />
           <table className='gridCSS'>
            {table}
            </table>
           <br />
            

         </div>
        )
    }
}

export default Grid;