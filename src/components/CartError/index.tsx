import React from 'react';
import { Link } from 'react-router-dom';
import s from './CartErrorModule.scss'
import cartEmptyImg from '..//../assets/img/add-cart.png';

export const CartErrore: React.FC = () => (
  <div className={s.cartError}>
    <h2>
      Корзина пустая 
    </h2>
    <p>
      Перед переходом в корзину желательно выбрать товар :)
      <br />
      Для того, чтобы выбрать товар, перейди на главную страницу.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Вернуться назад</span>
    </Link>
  </div>
);
