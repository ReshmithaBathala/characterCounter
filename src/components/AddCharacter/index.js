import './index.css'

const AddCharacter = props => {
  const {details} = props
  const {word, letterCount} = details
  return (
    <li>
      <p className="character-and-length-list-item">
        {word}: {letterCount}
      </p>
    </li>
  )
}

export default AddCharacter
