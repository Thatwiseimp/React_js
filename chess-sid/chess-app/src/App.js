import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Piece from 'react-chess-pieces';


function App() {
  const [state,setstate]=useState()
  const [color,setColor]=useState('odd')

 
  // const initialPosition = [
  // ["R", "N", "B", "Q", "K", "B", "N", "R"],
  // ["P", "P", "P", "P", "P", "P", "P", "P"],
  // ["", "", "", "", "", "", "", ""],
  // ["", "", "", "", "", "", "", ""],
  // ["", "", "", "", "", "", "", ""],
  // ["", "", "", "", "", "", "", ""],
  // ["p", "p", "p", "p", "p", "p", "p", "p"],
  // ["r", "n", "b", "q", "k", "b", "n", "r"]
  // ];

  const initialPosition = 
    ["R", "N", "B", "Q", "K", "B", "N", "R",
    "P", "P", "P", "P", "P", "P", "P", "P",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "p", "p", "p", "p", "p", "p", "p", "p",
    "r", "n", "b", "q", "k", "b", "n", "r"];
  


  let col = 'even'
  let base = 'even'
  let main = 'odd'
  let array=new Array(64)
  array.fill('ehy')

  function destPosition(){
    if (isWhite()){

    
    }

  }

  
  return (
    <div id='main'>
      {initialPosition.map((value,index)=>{
          if ((index - 8) % 8 == 0){

          }else if (col == main){
            col = base
          }
          else {
            col = main
          }
        return (
          <div className={col}>
            <Piece className='piece' onClick={destPosition} piece={value}/>
          </div>)
      })
      }
    </div>
    
    
      
  );
}

export default App;
