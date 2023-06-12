// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisList, emojiTriggered} = props
  const {id, emojiName, emojiUrl} = emojisList
  const emojiClicked = () => {
    emojiTriggered(id)
  }

  return (
    <li>
      <button type="button" className="button-container" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="each-emoji-size" />
      </button>
    </li>
  )
}

export default EmojiCard
