import { WINNER_COMBOS } from "./constantes.js"

export const CheckWinner= (boardToCheck) =>{
    //revisamos todas las combinaciones ganadoras
    //para ver si X u O gano
 for (const combo of  WINNER_COMBOS){
const [a,b,c] = combo

 if ( 
  boardToCheck[a] && // 0 -> x u 0 //
   boardToCheck[a] == boardToCheck[b] && // 0 y 3 -> x -> x u o -> o //
  boardToCheck[a] == boardToCheck[c] // 0 y 6 -> x -> x u o -> 
) {
return boardToCheck[a]
}

}
return null
}

export const checkEndGame = (newBoard) =>{
  //revisa si hay un empate
  //si no hay mas espacios vacios
  //en el tablero
return newBoard.every((square) => square !== null)
  //newBoard=['x','o','x','o',null,null,null,null,null]

}