import { Square } from "./Square.jsx"

export function WinnerModal ({winner,resetGame}){
    if (winner === (null))return null //si no tengo wiiner devuelva null

    const winnerText = winner === false ? 'Tie' : 'Won:'
    return(
        <section className="winner">
            <div className="text">
                <h2>
                    {winnerText}
                </h2>
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
            <footer>
        <button onClick={resetGame}>Start again</button>
      </footer>
    </div>
</section>
    )
 
}

