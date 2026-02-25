import React from 'react'
import userlogo from '../img/logo user.svg'
export default function Post() {
  return (
    <div className=''>
      <img src={userlogo} alt="" />
      <div className='grid-container'>
        <h2>Title</h2>
        <h4>text</h4>
        <p>id</p>
        <button>Delete</button>
      </div>
    </div>
  )
}
