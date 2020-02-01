import React, { useState } from 'react'
import signupService from '../services/signup'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [passwordInfo, setPasswordInfo] = useState('')

  const handleSignUp = async (event) => {
    event.preventDefault()
    try {
      if (password === passwordConfirm) {
        const user = await signupService.signup({
          username, password
        })
      }
      setUsername('')
      setPassword('')
      setPasswordConfirm('')
    } catch (exception) {
      setErrorMessage('Something went wrong')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const matchingPassword = (value) => {
    if (password === value) {
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
              onChange={({ target }) => setPassword(target.value)}
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
                matchingPassword(target.value)
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