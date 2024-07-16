import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import SavedVideosContext from '../../context/SavedVideosContext'

import {
  LoginContainer,
  FormContainer,
  FormLogoContainer,
  FormLogo,
  Label,
  Input,
  CheckboxContainer,
  CheckboxInput,
  CheckboxDesc,
  LoginBtn,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isPasswordShown: false,
    errorMsg: '',
    showSubmitError: false,
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    // console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showSubmitError: true})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckboxInput = () => {
    this.setState(prevState => ({isPasswordShown: !prevState.isPasswordShown}))
  }

  render() {
    const {
      isPasswordShown,
      errorMsg,
      showSubmitError,
      username,
      password,
    } = this.state
    console.log(errorMsg)
    const showPassword = isPasswordShown ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginContainer darkBg={isDark}>
              <FormContainer onSubmit={this.onSubmitForm} darkBg={isDark}>
                <FormLogoContainer>
                  <FormLogo
                    src={
                      isDark
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </FormLogoContainer>
                <Label htmlFor="usernameInputEle" labelColor={isDark}>
                  USERNAME
                </Label>
                <Input
                  id="usernameInputEle"
                  placeholder="Username"
                  type="text"
                  onChange={this.onChangeUsername}
                  value={username}
                  autoComplete="off"
                  darkBg={isDark}
                />
                <Label htmlFor="passwordInputEle" labelColor={isDark}>
                  PASSWORD
                </Label>
                <Input
                  id="passwordInputEle"
                  placeholder="Password"
                  type={showPassword}
                  value={password}
                  onChange={this.onChangePassword}
                  darkBg={isDark}
                />
                <CheckboxContainer>
                  <CheckboxInput
                    type="checkbox"
                    onChange={this.onChangeCheckboxInput}
                    id="checkboxId"
                  />
                  <CheckboxDesc labelColor={isDark} htmlFor="checkboxId">
                    Show Password
                  </CheckboxDesc>
                </CheckboxContainer>
                <LoginBtn type="submit">Login</LoginBtn>
                {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}
export default Login
