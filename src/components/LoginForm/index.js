import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    showErrorMsg: false,
    errorMsg: '',
    username: '',
    password: '',
    inputType: 'password',
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  displayPassword = event => {
    let textValue
    if (event.target.checked === true) {
      textValue = 'text'
    } else if (event.target.checked === false) {
      textValue = 'password'
    }

    this.setState({inputType: textValue})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const loginData = await response.json()
    console.log(loginData)
    if (response.ok === true) {
      this.onSubmitSuccess(loginData.jwt_token)
    } else {
      this.onSubmitFailure(loginData.error_msg)
    }
  }

  render() {
    const {showErrorMsg, username, password, inputType, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="form-container">
        <form className="form-element" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="image"
          />
          <div className="label-input-container">
            <label htmlFor="name">USERNAME</label>
            <input
              type="text"
              id="name"
              value={username}
              placeholder="Username"
              onChange={this.changeUsername}
            />
          </div>
          <div className="label-input-container">
            <label htmlFor="password">PASSWORD</label>
            <input
              type={inputType}
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.changePassword}
            />
          </div>
          <div className="checkbox-label-container">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={this.displayPassword}
              value={inputType}
            />
            <label htmlFor="myCheckbox">Show Password</label>
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
          {showErrorMsg && <p className="error-text">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
