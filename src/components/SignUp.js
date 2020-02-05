import React, { useState, useEffect } from 'react'
import signupService from '../services/signup'

const SignUp = ({ setPage }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [passwordInfo, setPasswordInfo] = useState('')
  const [takenUsers, setTakenUsers] = useState([])

  useEffect(() => {
    signupService.getUsers().then(response => {
      setTakenUsers(response)
    })
  }, [])

  const handleSignUp = async (event) => {
    event.preventDefault()
    if (takenUsers.some(user => (user.username === username))) {
      setErrorMessage('Username is already taken')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
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
      setPasswordConfirm('')
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
    } else {
      setPasswordInfo('Passwords do not match')
    }
  }

  return (
    <div>
      <h2>Register here</h2>
      {errorMessage}
      <div>
        <form onSubmit={handleSignUp}>
          <div>
            <input
              type="text"
              placeholder="Username"
              name="Username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
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
          <div>
            {passwordInfo}
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp