import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import AddCharacter from './components/AddCharacter'
import './App.css'

class App extends Component {
  state = {
    characterText: '',
    newCharacterList: [],
  }

  onChangeCharacter = event => {
    this.setState({characterText: event.target.value})
  }

  addCharacterAndCount = () => {
    console.log('Add Button is Clicked')
    const {characterText} = this.state
    const countCharacter = {
      id: uuid(),
      word: characterText,
      letterCount: characterText.length,
    }
    this.setState(prevState => ({
      newCharacterList: [...prevState.newCharacterList, countCharacter],
      characterText: '',
    }))
  }

  render() {
    const {characterText, newCharacterList} = this.state
    const listLength = newCharacterList.length
    return (
      <div className="main-container">
        <div className="character-main-container">
          <div className="count-display-container">
            <h1 className="count-heading">
              Count the characters like a Boss...
            </h1>
            <div className="count-container">
              {listLength === 0 ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="no-user-input"
                />
              ) : (
                <ul className="add-character-count-container">
                  {newCharacterList.map(each => (
                    <AddCharacter details={each} key={each.id} />
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="input-character-count">
            <h1 className="character-count-heading">Character Counter</h1>
            <form className="input-add-button">
              <input
                type="input"
                className="input-text"
                placeholder="Enter the Characters here"
                value={characterText}
                onChange={this.onChangeCharacter}
              />
              <button
                type="button"
                className="add-button"
                onClick={this.addCharacterAndCount}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
