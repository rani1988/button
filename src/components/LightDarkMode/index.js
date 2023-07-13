// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark:true
}

  onClickButton = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() 
  {
    const {isDark} = this.state
    const modeClassName=isDark?"Dark-mode":"light-mode"
    const buttonText=isDark?"Light Mode":"Dark Mode"

    return (
      <div className="container">
      <div className={`container ${modeClassName}`}
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.onClickButton}>
          {buttonText}
        </button>
      </div>
      </div>
    )
  }
}
export default LightDarkMode
