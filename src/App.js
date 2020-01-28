import React, { useState } from 'react';
import Buttonview from './components/buttonView'

const App = () => {
  const [points, setPoints] = useState(20)
  const [clicks, setClicks] = useState(0)
  const [loginVisible, setLoginVisible] = useState(false)
  const [playVisible, setPlayVisible] = useState(false)
  const [signupVisible, setSignUpVisible] = useState(false)
  const [user, setUser] = useState(null)

  const signUpScreen = () => {
    setSignUpVisible(true)
    setLoginVisible(false)
    setPlayVisible(false)
  }

  const loginScreen = () => {
    setLoginVisible(true)
    setPlayVisible(false)
    setSignUpVisible(false)
  }

  const playScreen = () => {
    setPlayVisible(true)
    setLoginVisible(false)
    setSignUpVisible(false)
  }
  return (
    <div className="App">
      <div>
        {user === null ?
          <header>
            <button onClick={() => loginScreen()}>Log in</button>
            <button onClick={() => signUpScreen()}>Register</button>
          </header>
          :
          <div>
            <p>Logged in as {user.username}</p>
          </div>
        }
      </div>

      {playVisible &&
        <Buttonview points={points}
          setPoints={setPoints}
          clicks={clicks}
          setClicks={setClicks} />}

    </div>
  );
}

export default App;
