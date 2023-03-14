import React from 'react'
import axios from 'axios'
import { SubmitHandler, useForm, } from 'react-hook-form'

import s from "./Enter.module.scss"
import vk from "..//../assets/img/vk.png"
import google from "..//../assets/img/google.png"



type propsData={
    name?:string,
    type?:string,
   
}
export const Enter: React.FC<propsData>= ({name,type,}) => {
    console.log(name,type,)
    interface IShippingFields {
        name: string
        password: string
    }
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IShippingFields>()
    const onSubmit: SubmitHandler<IShippingFields> = data => {
        (async () => {
            try {
                await axios({
                    method: 'post',
                    url: 'https://618e3ea350e24d0017ce1178.mockapi.io/enter',
                    data
                })
            } catch (error) {
                console.log("error", error)
            }
        })()
        reset()
        alert("ваша почта пришла нам на сервер)")
    }
    return (
        <div className={s.root}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.inputs} >
                    <input type="email" className={s.inputs__Text}
                        {...register('name', {
                            required: 'Email is require field!',
                            pattern: {
                                value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter valid email!',
                            },
                        })} />
                    <span className={s.inputs__label}>Email / Номер телефона / Mi Aккаунт</span>
                </div>
                {errors?.name && (<div style={{ color: 'red' }}>{errors.name.message}</div>)}


                <div className={s.inputs}>
                    <input type="password" className={s.inputs__Text} 
                        {...register('password', {
                            required: 'password is require field!',
                            pattern: {
                                value:
                                /^[a-zA-Z0-9]{3,20}$/,
                                message: 'Please enter valid password!',
                            },
                        })} />
                    <span className={s.inputs__label}>Пароль</span>
                </div>
                {errors?.password && (<div style={{ color: 'red' }}>{errors.password.message}</div>)}
                
                <div className={s.root__btn}>
                    <button>вход</button>
                </div>
            </form>
            <div className={s.root__additionally}>
                <p>дополнительно</p>
                <img className={s.root__additionally__vk} src={vk} alt="vk" />
                <img src={google} alt="google" />
            </div>
        </div>
    )
}
