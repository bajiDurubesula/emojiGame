// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgainClicked} = props
  const result = score === 12 ? 'You Won' : 'You Lose'

  const playAgain = () => {
    playAgainClicked()
  }

  return (
    <div>
      <div>
        <h1>{result}</h1>
        {result === 'You Won' ? <p>Best Score</p> : <p>Score</p>}
        {result === 'You Won' ? <p>12/12</p> : <p>{score}/12</p>}
        <button type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div>
        {result === 'You Won' && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="result-logo"
          />
        )}
        {result === 'You Lose' && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            className="result-logo"
          />
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
