import React, { useState, useEffect } from 'react'
import signupService from '../services/signup'

const SignUp = ({ setPage, takenUsers }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [passwordInfo, setPasswordInfo] = useState(null)
  const [infoClass, setInfoClass] = useState(null)
  const [usernameError, setUsernameError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)

  const handleSignUp = async (event) => {
    event.preventDefault()
    if (takenUsers.some(user => (user.username === username))) {
      setErrorMessage('Username is already taken')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
    if (username.length < 3) {
      setUsernameError('Username too short, minimum length 3')
      setTimeout(() => {
        setUsernameError()
      }, 5000)
    }
    if (password.length < 3) {
      setPasswordError('Password too short, minimum length 3')
      setTimeout(() => {
        setPasswordError(null)
      }, 5000)
    }
    if (takenUsers.some(user => (user.username === username)) || username.length < 3
      || password.length < 3) {
      return
    }
    try {
      if (password === passwordConfirm) {
        await signupService.signup({
          username, password
        })
      }
      setUsername('')
      setPassword('')
      setPasswordConfirm(null)
      setPage('login')
    } catch (exception) {
      setErrorMessage('Something went wrong')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const passwordValidation = (changedValue, value) => {
    if (value === changedValue) {
      setPasswordInfo('Passwords match')
      setInfoClass('success')
    } else {
      setPasswordInfo('Passwords do not match')
      setInfoClass('error')
    }
  }

  return (
    <div>
      <h2>Register here</h2>
      <p className="error">{errorMessage}</p>
      <div>
        <form onSubmit={handleSignUp}>
          <div>
            <p className="error">{usernameError}</p>
            <input
              type="text"
              placeholder="Username"
              name="Username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            {passwordError !== null && <p className="error">{passwordError}</p>}
            <input
              type="password"
              placeholder="Password"
              name="Password"
              value={password}
              onChange={({ target }) => {
                setPassword(target.value)
                passwordValidation(target.value, passwordConfirm)
              }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password again"
              name="PasswordConfirmation"
              value={passwordConfirm}
              onChange={({ target }) => {
                setPasswordConfirm(target.value)
                passwordValidation(target.value, password)
              }}
            />
          </div>
          <div className={infoClass}>
            {passwordInfo}
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp