import { useState } from "react"
import confetti from 'canvas-confetti'
import { Square } from "./componentes/Square.jsx"
import { TURNS,WINNER_COMBOS } from "./logic/constantes.js"
import { CheckWinner,checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./componentes/WinnerModal.jsx"

function App() {

const [board,setBoard] = useState(() =>{//Esto es lento
  const boardFromStorage = window.localStorage.getItem('board')
  return boardFromStorage ? JSON.parse(boardFromStorage) : 
  Array(9).fill(null)
})
 //Se llama el estado 9 arreglos
const [turn,setTurno] = useState(() => {
  const turnFromStorage = window.localStorage.getItem('turn')
  return turnFromStorage ?? TURNS.X
})
    
// null es que no hay ganado,false es que hay un empate
const [winner,setWinner] = useState(null)
    

const resetGame = () => {
    setBoard(Array(9).fill(null))
      setTurno(TURNS.X)
    setWinner(null)
    
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn') //resetar el juego cuando lo actualizamos en google
}



const updateBoard = (index) =>{

        // No actualizamos esta posicion //
        // si ya tienen algo //
    if(board[index] || winner) return

        // actuailizar tablero//
 const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard) //esta actualizacion es asincrona
        // cambiar el turno
const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurno(newTurn)
//se guarda los datos de los jugadores
window.localStorage.setItem('board',JSON.stringify(newBoard))
window.localStorage.setItem('turn',newTurn)        
        // revisar si hay un ganador
const newWinner = CheckWinner(newBoard)
    if (newWinner){
     confetti()//Es npm install canvas-confetti -E 
                      //Y lo llamamos en el import  

       setWinner(newWinner) //actualiza el estado
    } 
    else if (checkEndGame(newBoard)){
            setWinner(false)
    } //TODO: check if gane is over
        
           
    }
    

return (  
    <main className="board">
      <h1>Let's Play Triki</h1>
    <button onClick={resetGame}>Reset The Game</button>
<section className="game">

  {
   board.map((square, index) => {

return(
   <Square
       key={index}
        index={index}
       updateBoard={updateBoard}>
     {square}    
   </Square>

  )
   })
  }
</section>

<section className="turn">
    <Square isSelected={turn == TURNS.X}>{TURNS.X} </Square>
    <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>

 
</section>
   <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
</main>)

}

export default App
