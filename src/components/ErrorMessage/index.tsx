import React from 'react'
import s from"./ErrorMessage.module.scss"
export const ErrorMessage = () => {
  return (
    <div className="content__error-info">
          <h2 className={s.titleError}>ОЙ!</h2>
          <p>К сожалению, не удалось получить Данные.попробуйте снова чуть позже.</p>
        </div>
  )
}
