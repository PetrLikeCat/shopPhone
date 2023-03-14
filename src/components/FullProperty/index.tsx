import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import s from './FullProperty.module.scss'
import { typeNames } from '../phoneBlock';
import { addItem } from '../../redux/cart/slice';

const colorType = ['чёрный', 'белый', 'коралловый']
const ColorKinds = ["colorBlack", "colorWhile", "colorCoral"]

type fullPhoneProps = {
  id: string
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  display: string;
  processor: string;
  ram: number;
  battery: number;
  cameras: string;
  frontalCamera: string;
  nfc: string;
}
type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};
export const FullProperty: React.FC<fullPhoneProps> = ({ id, title, price, imageUrl, sizes, display, processor, ram, battery, cameras, frontalCamera, nfc }) => {
  const dispatch = useDispatch();
  const [color, setColor] = React.useState(0)
  const [choiceMemory, setChoiceMemory] = React.useState(1)
  const clickColor = (str: number) => { setColor(str) }

  const ClickPay = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[choiceMemory],
      size: sizes[color],
      count: 0,
    };
    dispatch(addItem(item));
  }
  return (
    <>
      <div className={s.product}>
        {/* <img className={s.productPhoto} src={imageUrl} /> */}
        <div className={s.productSpecifications}>
        <img className={s.productPhoto} src={imageUrl} />
          <h2 style={{ gridArea:"title"}}>{title}</h2>
          <h4 style={{ gridArea:"price"}}>{price} ₽</h4>
          <li className={s.productMemeres}>{typeNames.map((items, i) => <li key={items} className={`${choiceMemory === i ? s.active : ""}`} onClick={() => setChoiceMemory(i)}>{items}</li>)}</li>
          <div style={{ gridArea:"colorProperty"}}>
          <p>Цвет: {colorType[color]}</p>
          </div>  
          <div className="color">
            {ColorKinds.map((items, i) => <li key={i} onClick={() => clickColor(i)} className={`${items} ${color === i ? `active` : `""`}`}></li>)}
          </div>
          <div className={s.productProperty} >
            <li className={s.productPropertyList}>
              <ul>экран</ul>
              <ul>{display}</ul>
            </li>
            <li className={s.productPropertyList}>
              <ul>Процессор</ul>
              <ul>{processor}</ul>
            </li>
            <li className={s.productPropertyList}>
              <ul>Оперативная память</ul>
              <ul>{ram}ГБ.</ul>
            </li>
            <li className={s.productPropertyList}>
              <ul>Аккумулятор</ul>
              <ul>{battery}мАч</ul>
            </li>
            <li className={s.productPropertyList}>
              <ul>Основная камера МПикс</ul>
              <ul>{cameras}</ul>
            </li>
            <li className={s.productPropertyList}>
              <ul>Фронтальная камера МПикс</ul>
              <ul>{frontalCamera}</ul>
            </li>
            <li className={s.productPropertyList}>
              <ul>Технология NFC</ul>
              <ul>{nfc}</ul>
            </li>
          </div>
        </div>
      </div>
      <div className={s.navigateBtn}>
        <Link to="/ShopPhone/">
          <button className={s.navigateBtnBack}>
            <span>Назад</span>
          </button>
        </Link>
        <Link to="/cart">
          <button className="button button--outline button--add" onClick={ClickPay}>
            <span>Добавить в корзину</span>
          </button>
        </Link>
      </div>
    </>
  )
}
