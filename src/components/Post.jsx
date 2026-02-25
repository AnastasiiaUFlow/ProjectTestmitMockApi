import React from 'react'
import userlogo from '../img/logo user.svg'
import style from "../styles/Post.module.css"
export default function Post({post, onDelete}) {
  return (
    <div className={style.post}>
      <img src={post.avatar} alt={post.id}/>
      <div className={style.grid_container}>
        <div className={style.flex1}>
        <h2>{post.title}</h2>
        <p>{post.id}</p>
        
        </div>
        <div className={style.flex2}>
        <h4>{post.text}</h4>
        <button onClick={() => onDelete(post.id)}>Delete</button>
        </div>

      </div>
    </div>
  )
}
