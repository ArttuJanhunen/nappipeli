import React, { useState } from 'react';
import Buttonview from './components/buttonview'

const App = ()=> {
  const [points, setPoints] = useState(20)
  const [clicks, setClicks] = useState(0)

  return (
    <div className="App">
      <p>Hello world!</p>

      <Buttonview points={points} 
      setPoints={setPoints} 
      clicks={clicks} 
      setClicks={setClicks}/>

    </div>
  );
}

export default App;
