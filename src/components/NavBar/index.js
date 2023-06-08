// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameEnd} = props

  return (
    <div className="navBar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {!isGameEnd && (
        <div className="score-container">
          <p>Score: {score}</p>
          <p className="topScore">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
