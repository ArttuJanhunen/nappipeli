import React, { useState, useEffect } from 'react'
import AwardBanner from './awardAlert'
import gameService from '../services/game'

const ButtonView = () => {

  const [text, setText] = useState('Press me!')
  const [award, setAward] = useState('clicked')
  const [visible, setVisible] = useState(false)
  const [clicks, setClicks] = useState(0)
  const [id, setId] = useState(null)

  useEffect(() => {
    gameService.getClicks().then(response => {
      setClicks(response[0].amount)
      setId(response[0].id)
    })
  }, [])

  const timer = () => {
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 500)
  }

  const handleClick = () => {
    gameService.addClick(clicks, id)
    timer()
  }

  return (
    <div>
      <p>My points:</p>
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