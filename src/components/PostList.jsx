import React, { useEffect, useState } from 'react'
import Post from './Post.jsx'
import style from '../styles/PostList.module.css'
import axios from 'axios';
export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://699eb2f278dda56d396b076e.mockapi.io/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки:", error);
        setLoading(false);
      });
  }, []);
const onDelete = ()=>{
        axios.delete('https://699eb2f278dda56d396b076e.mockapi.io/posts/${post.id}')
        .then(response =>{
            console.log('sucssesful', response)
            setPosts(posts.filter((post) => post.id !== id));
        })
        .catch(error=>{
            console.error('error',error)
        })
    }
  if (loading) return <p>Loading</p>;

  return (
    <div className='post_list'>
      {posts.map((post) => (
        
        <Post key={post.id} post={post} onDelete={onDelete}/>
      ))}
    </div>
    
    
  )
}
