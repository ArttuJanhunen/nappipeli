import React, { useState } from 'react'

const ButtonView = ({ points, setPoints, clicks, setClicks }) => {

  const [text, setText] = useState('Press me!')

  const handleClick = () => {
    setPoints(points - 1)
    if (points === 1) {
      setText('Try again!')
    } else if (points === 0) {
      setText('Press me!')
      setPoints(20)
    } else {
      setClicks(clicks + 1)
    }
    if (clicks === 500) {
      setPoints(points + 250)
      setClicks(0)
    } else if (clicks % 100 === 0 && clicks > 0) {
      setPoints(points + 40)
    }
    else if (clicks % 10 === 0 && clicks > 0) {
      setPoints(points + 5)
    }
  }

  return (
    <div>
      <p>My points: {points}</p>
      <button onClick={handleClick}>{text}</button>

      <p>Clicks: {clicks}</p>
    </div>
  )
}

export default ButtonView