// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisList, emojiTriggered} = props
  const {id, emojiName, emojiUrl} = emojisList
  const emojiClicked = () => {
    emojiTriggered(id)
  }

  return (
    <button type="button" className="button-container" onClick={emojiClicked}>
      <li>
        <img src={emojiUrl} alt={emojiName} className="each-emoji-size" />
      </li>
    </button>
  )
}

export default EmojiCard
