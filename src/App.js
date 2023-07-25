import logo from './logo.svg';
import './App.css';
import Square from './Square';
import { useState,useEffect } from 'react';
const initialState = ["","","","","","","","",""]





function App() {


  const [gameState,setGameState] = useState(initialState)
  const [isChance,setIsChance] = useState(false)
  const onSquareClicked =(index)=>{
    let strings = Array.from(gameState)
    strings[index]= isChance ? "X" : "O"
    setIsChance(!isChance)
    setGameState(strings)
    

  }
  useEffect(()=>{
    const winner = checkWinner()
    if(winner){
      alert(`you won`)
      setGameState(initialState)
    }
    

  },[gameState])





  const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]; console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a] ,gameState[b];
        }
    }
    return null;
}


  return (
   <>
   <div className="heading">
    <h1>React Tic-Tac-Toe</h1>
   </div>
   <div className="container">
   <div className="row">
    <span><Square className = "b-bottom-right" state = {gameState[0]} onClick = {()=> onSquareClicked(0)}></Square>
    <Square  className = "b-bottom-right"   state ={gameState[3]} onClick = {()=> onSquareClicked(3)}></Square>
    <Square className = "b-right"  state = {gameState[6]} onClick = {()=> onSquareClicked(6)}></Square></span>
   </div>
   <div className="row">
    <span><Square className = "b-bottom-right" state =  {gameState[1]} onClick = {()=> onSquareClicked(1)}></Square>
    <Square className = "b-bottom-right"  state = {gameState[4]} onClick = {()=> onSquareClicked(4)}></Square>
    <Square className = "b-right"  state = {gameState[7]} onClick = {()=> onSquareClicked(7)}></Square></span>
   </div>
   <div className="row">
    <span><Square  className = "b-bottom"  state = {gameState[2]} onClick = {()=> onSquareClicked(2)}></Square>
    <Square  className = "b-bottom"  state ={gameState[5]} onClick = {()=> onSquareClicked(5)}></Square>
    <Square   state ={gameState[8]} onClick = {()=> onSquareClicked(8)} ></Square></span>
   </div>
   
    </div>
    <div className='button'>
    <button onClick = {()=> setGameState(initialState)}>Clear </button>
    </div>
   </>
  );
}

export default App;
