import React, { useState } from 'react'
import loginService from '../services/login'

const Login = ({ setUser, setPage }) => {

  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      setUser(user)
      setUsername(null)
      setPassword(null)
      setPage('play')
    } catch (exception) {
      setErrorMessage('Invalid username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <div>
      <h2>Log in</h2>
      <p className="error">{errorMessage}</p>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login 