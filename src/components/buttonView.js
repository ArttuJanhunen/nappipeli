import React, { useState, useEffect } from 'react'
import AwardBanner from './awardAlert'
import gameService from '../services/game'

const ButtonView = ({ user }) => {

  const [award, setAward] = useState('')
  const [visible, setVisible] = useState(false)
  const [clicks, setClicks] = useState(null)
  const [id, setId] = useState(null)

  useEffect(() => {
    gameService.getClicks().then(response => {
      setClicks(response[0].amount)
      setId(response[0].id)
    })
  }, [])

  const handleClick = () => {
    gameService.addClick(id)
    gameService.reducePoint(user.user.id)
    setClicks(clicks + 1)
    addPoints()
    user.user.points = user.user.points - 1
    handleStorage()
  }

  const addPoints = () => {
    if (clicks % 500 === 0) {
      user.user.points = user.user.points + 250
      gameService.addPoints(user.user.id, user.user.points - 1)
      awardTimer(250)
    } else if (clicks % 100 === 0) {
      user.user.points = user.user.points + 40
      gameService.addPoints(user.user.id, user.user.points - 1)
      awardTimer(40)
    } else if (clicks % 10 === 0) {
      user.user.points = user.user.points + 5
      gameService.addPoints(user.user.id, user.user.points - 1)
      awardTimer(5)
    }
  }

  const handleStorage = () => {
    window.localStorage.setItem(
      'loggedUser', JSON.stringify(user)
    )
  }

  const handleNewGame = () => {
    user.user.points = 20
    gameService.addPoints(user.user.id, 20)
    handleStorage()
    window.location.reload()
  }

  const prizeCounter = () => {
    let remainder = null
    remainder = 10 - clicks % 10
    return remainder
  }

  const awardTimer=(reward)=>{
    setAward(reward)
    setVisible(true)
    setTimeout(()=>{
      setVisible(false)
    },3000)
  }

  return (
    <div className="buttonview">
      <p>My points: {user.user.points}</p>

      {user.user.points > 0 ?
        <div>
          <button onClick={handleClick}>Press for glory!</button>

          <p>Clicks: {clicks}</p>
          <p>Next prize in: {prizeCounter()}</p>
        </div>
        :
        <button onClick={handleNewGame}>Try again?</button>
      }

      <AwardBanner
        award={award}
        setAward={setAward}
        visible={visible}
      />
    </div>
  )
}

export default ButtonView