// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    const {isDarkMode} = this.state
    this.setState({isDarkMode: !isDarkMode})
  }

  render() {
    let modeCls
    const {isDarkMode} = this.state

    const modeText = isDarkMode
      ? ((modeCls = 'dark-mode'), 'Light Mode')
      : ((modeCls = 'light-mode'), 'Dark Mode')

    return (
      <div className="container">
        <div className={modeCls}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.changeMode}>
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
