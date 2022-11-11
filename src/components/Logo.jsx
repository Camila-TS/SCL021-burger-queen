import React from 'react'

const Logo = ({className}) => {

    const logo = 'https://i.ibb.co/tPfcS6C/burger.png'

  return (
    <img src={ logo } alt='Logo' id="logo" className={className}></img>
  )
}

export default Logo