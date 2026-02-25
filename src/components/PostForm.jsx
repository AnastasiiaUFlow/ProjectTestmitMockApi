import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

export default function PostForm() {
    const {register,handleSubmit, reset, formState:{isValid,isSubmitting,errors}}= useForm()
    const registerPost = (data)=>{
        console.log('Data submited ', data);
        
    }
    const onSubmit = (data)=>{
        const postData = {
            title: data.title,
            text: data.text
        }
        axios.post('https://699eb2f278dda56d396b076e.mockapi.io/posts', postData)
        .then(response =>{
            console.log('sucssesful', response)
            reset()
        })
        .catch(error=>{
            console.error('error',error)
        })
    }
    
  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Заголовок</label>
        <input type="text" placeholder='заголовок' {...register("title", {required:"title is required"})}/>
        {errors.username && (
          <p className={styles.errorStatus}>{errors.username.message}</p>
        )}
        <label htmlFor="">Text</label>
        <input type="text" placeholder='текст' {...register("text", {required:"text is required"})}/>
        {errors.username && (
          <p className={styles.errorStatus}>{errors.username.message}</p>
        )}
        <button type='submit' disabled={!isValid || isSubmitting}>Отправить</button>
      </form>
    </div>
  )
}
