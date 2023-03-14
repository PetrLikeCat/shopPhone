import React from 'react'
import { Login } from '../components/login'

export const Registration = () => {
  return (
    <div className="registration">
      <div className="registration__imgLogo"> <img src="https://portal.mi-room.ru/wp-content/uploads/2018/08/mitu-work_hard_dream_big.jpg" alt="ff" /></div>
      <div className="registration__enter">
      <Login /> 
      </div> 
    </div>
  )
}
