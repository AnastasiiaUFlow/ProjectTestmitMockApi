import { useState } from 'react'


import Header from './components/Header'
import PostList from './components/PostList.jsx'
import PostForm from './components/PostForm.jsx'
import style from './App.module.css'
function App() {

  return (
    <>
      <Header></Header>
      <div className={style.main_container}>
        <PostList />
        <PostForm />
      </div>
    </>
  )
}

export default App
