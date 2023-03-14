import React from 'react'
import s from "./Login.module.scss"

import { Enter } from '../Enter'
import { Registration } from '../Registration'



export const Login = () => {
    const acquaint = ["Войти", "Зарегистрироваться"]
    const [actives, setActives] = React.useState(0)
    const entry = acquaint.map((item, i) => (
        <h2 key={item} onClick={() => setActives(i)} className={i === actives ? s.active : ""}>{item}</h2>
    ))

    return (
        <div className={s.root}>
            <div className={s.root__title}>
                {entry}
            </div>
        {actives===0?<Enter />:<Registration />}
        </div>
    )
}
