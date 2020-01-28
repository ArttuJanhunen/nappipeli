import React, { useState } from 'react'
import AwardBanner from './awardAlert'

const ButtonView = ({ points, setPoints, clicks, setClicks }) => {

  const [text, setText] = useState('Press me!')
  const [award, setAward] = useState(null)
  const [visible, setVisible] = useState(false)

  const timer = () => {
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 3000)
  }

  const addClicks = () => {
    setPoints(points - 1)
    if (points === 1) {
      setText('Try again!')
      setClicks(clicks + 1)
    } else if (points === 0) {
      setText('Press me!')
      setPoints(20)
    } else {
      setClicks(clicks + 1)
    }
  }

  const addPoints = () => {
    if (clicks === 499) {
      setPoints(points + 249)
      setClicks(0)
      setAward(250)
      timer()
    } else if ((clicks+1) % 100 === 0 && clicks > 0) {
      setPoints(points + 39)
      setAward(40)
      timer()
    }
    else if ((clicks+1) % 10 === 0 && clicks > 0) {
      setPoints(points + 4)
      setAward(5)
      timer()
    }
  }

  const handleClick = () => {
    addClicks()
    addPoints()
  }

  return (
    <div>
      <p>My points: {points}</p>
      <button onClick={handleClick}>{text}</button>

      <p>Clicks: {clicks}</p>

      <AwardBanner
        award={award}
        setAward={setAward}
        visible={visible}
      />
    </div>
  )
}

export default ButtonView