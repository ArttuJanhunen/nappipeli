import React from 'react'

const AwardBanner = ({ award, visible }) => {

  if (visible) {
    return (
      <div>
        <p>You received {award} points!</p>
      </div>
    )
  }

  return (
    <div>

    </div>
  )

}

export default AwardBanner