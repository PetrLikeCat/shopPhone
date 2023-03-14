import React from 'react'
import s from "./Registration.module.scss"
import vk from "..//../assets/img/vk.png"
import google from "..//../assets/img/google.png"
export const Registration = () => {
    const [email, setEmail] = React.useState("")
  return (
    <div className={s.root}>
    <div className={s.inputs} >
    <input type="text" className={s.inputs__Text} value={email} onChange={(event) => setEmail(event.target.value)} />
    <span className={s.inputs__label}>Email / Номер телефона / Mi Aккаунт</span>
</div>
<div className={s.root__btn}>
    <button>вход</button>
</div>

<div className={s.root__additionally}>
    <p>дополнительно</p>
    <img className={s.root__additionally__vk} src={vk} alt="vk" />
    <img src={google} alt="google" />
</div>
</div>
  )
}
