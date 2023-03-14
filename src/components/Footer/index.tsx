import React from 'react'
import axios from 'axios'
import { SubmitHandler, useForm, } from 'react-hook-form'

import s from "./Footer.module.scss"
import { Link } from 'react-router-dom';
import facebook from '..//../assets/img/facebook.png';
import instagram from '..//../assets/img/instagram.png';
import telegram from '..//../assets/img/telegram.png';
import twitter from '..//../assets/img/twitter (1).png';
import arrow from '..//../assets/img/share1.png';

const aboutWe = ["О НАС", "Xiaomi", "Команда лидеров", "Политика Конфиденциальности", "Добросовестность и соблюдение требований"];
const products = ["ПРОДУКЦИЯ", "Xiaomi 12X", "Xiaomi 11T", "Redmi Note 11", "Код купона"];
const support = ["СВЯЗАТЬСЯ С НАМИ", "Онлайн поддержка", "Эл. почта", "Горячая линия : 88007756615", "Часы работы с 9:00 до 20:00 МСК, Пн. – Пт"];

interface IShippingFields {
    email: string
    name: string
}
export const Footer = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IShippingFields>()
    const onSubmit: SubmitHandler<IShippingFields> = data => {
        (async () => {
            try {
                await axios({
                    method: 'post',
                    url: 'https://618e3ea350e24d0017ce1178.mockapi.io/mail',
                    data
                })
            } catch (error) {
                console.log("error", error)
            }
        })()
        reset()
        alert("ваша почта пришла нам на сервер)")
    }

 
    let aboutUs = aboutWe.map((item, i) => (<ul key={item}><Link className={i === 0 ? s.title : s.text} to="/ShopPhone/">{item}</Link></ul>))
    let productsUs = products.map((item, i) => (<ul key={item}><Link className={i === 0 ? s.title : s.text} to="/ShopPhone/">{item}</Link></ul>))
    let supportUs = support.map((item, i) => (<ul key={item}><Link className={i === 0 ? s.title : s.text} to="/ShopPhone/">{item}</Link></ul>))
    return (
        <div className={s.root}>
            <li>
                {aboutUs}
            </li>
            <li>
                {productsUs}
            </li>
            <li>
                {supportUs}
            </li>

            <div className={s.network}>
                <span className={s.networkNew}>Новости Xiaomi</span>
                <li className={s.network__link}>
                    <ul><Link to="/ShopPhone/"><img src={facebook} alt="facebook" /></Link></ul>
                    <ul><Link to="/ShopPhone/"><img src={instagram} alt="instagram" /></Link></ul>
                    <ul><Link to="/ShopPhone/"><img src={telegram} alt="telegram" /></Link></ul>
                    <ul><Link to="/ShopPhone/"><img src={twitter} alt="twitter" /></Link></ul>
                </li>
                <div className={s.network__sending}>
                    <div><span>Будьте в курсе обновлений.</span></div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder="Введите адрес e-mail"
                            className={s.network__sending__input}
                            {...register('email', {
                                required: 'Email is require field!',
                                pattern: {
                                    value:
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter valid email!',
                                },
                            })}
                        />
                        {errors?.email && (
                            <div style={{ color: 'red' }}>{errors.email.message}</div>
                        )}
                        <input type="image" alt="red" src={arrow} className={s.network__sending__click}></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
