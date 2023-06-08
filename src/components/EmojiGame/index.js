/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const 

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, isUnique: [], isGameEnd: false}

  emojiTriggered = id => {
    const {isUnique} = this.state
    if (!isUnique.includes(id)) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        isUnique: [...prevState.isUnique, id],
      }))
    } else {
      this.setState(prevState => ({isGameEnd: !prevState.isGameEnd}))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return shuffledEmojisList.map(each => (
      <EmojiCard
        emojisList={each}
        key={each.id}
        emojiTriggered={this.emojiTriggered}
      />
    ))
  }

  playAgainClicked = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({score: 0, topScore: score, isUnique: [], isGameEnd: false})
    } else {
      this.setState({score: 0, isUnique: [], isGameEnd: false})
    }
  }

  gameEnded = () => {
    const {score} = this.state
    return (
      <WinOrLoseCard score={score} playAgainClicked={this.playAgainClicked} />
    )
  }

  render() {
    const {score, topScore, isGameEnd} = this.state
    return (
      <div>
        <NavBar score={score} topScore={topScore} isGameEnd={isGameEnd} />
        <div className="main-container">
          <ul className="emoji-container">
            {isGameEnd ? this.gameEnded() : this.renderEmojiList()}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
