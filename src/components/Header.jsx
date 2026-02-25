import React from 'react'
import logoimage from "../img/logo mpeg.svg"
import style from "../styles/Header.module.css"
export default function Header() {
  return (
    <div className={style.container}>
      <img src={logoimage} alt="" />
      <div className={style.navi}>
        <a>Главная</a>
        <a>Друзья</a>
        <a>Сообщества</a>
        <a>Музыка</a>
      </div>
    </div>
  )
}
