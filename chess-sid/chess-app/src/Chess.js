import React, { Component } from 'react';
 
import Piece from 'react-chess-pieces';
 
const initialPosition = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"]
];
 
 
class Chess extends Component {
 
  state = {
    pieces: initialPosition,
  }
  
  render() {
    return (
      <div className="App">
        <div className='Board'>
          {this.state.pieces.map((rowOfPieces, rowIndex)=> (
            <div key={rowIndex+'row'} className='Row'>
              {rowOfPieces.map( (piece, colIndex)=> (
                <div key={rowIndex+'row'+colIndex+'col'} className='Square'>
                  <Piece piece={"p"}/>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
 
export default Chess;