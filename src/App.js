import React, { useState, useEffect } from 'react'
import Buttonview from './components/buttonView'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Welcome from './components/welcome'

const App = () => {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState('welcome')

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      setPage('play')
    }
  }, [])

  const pages = new Map([
    ['register', <SignUp setPage={setPage} />],
    ['login', <Login setUser={setUser} setPage={setPage} />],
    ['play', <Buttonview />],
    ['welcome', <Welcome />]
  ])

  const showPage = () => {
    let visible = pages.get(page)
    return (
      visible
    )
  }

  const logout = () => {
    window.localStorage.removeItem('loggedUser')
    setUser(null)
    setPage('welcome')
  }

  return (
    <div className="App">
      <div>
        {user === null ?
          <div>
            <header>
              <button onClick={() => setPage('login')}>Log in</button>
              <button onClick={() => setPage('register')}>Register</button>
            </header>
          </div>
          :
          <header>
            <p>Logged in as {user.username}</p>
            <button onClick={() => logout()}>Log out</button>
          </header>
        }
      </div>
      {showPage()}
    </div>
  )
}

export default App;
