

export default function Modal({won,turn,solution,onCancel}){
    return(
        <div className="modal">
            {won && (
                <div>
                    <h1>You Win!</h1>
                    <p className="solution">{solution}</p>
                    <p>You found the solution in {turn} guesses :)</p>
                </div>
            )}
            {!won && (
                <div>
                    <h1>Game Over!</h1>
                    <p className="solution">word: {solution}</p>
                    <p>Better Luck next time :)</p>
                </div>
            )}
        </div>
    )
}