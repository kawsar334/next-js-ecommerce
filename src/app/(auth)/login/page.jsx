
"use client"
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'

import styles from "../../../styles/login.module.css";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async()=>{
    const data = {email, password}
    try{
    const res = await fetch("http://localhost:3000/api/auth/login", {

      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify(data)
    });

    const result = await res.json();
    return result;
    }catch(err){
      console.log(err);
    }
  }



  return (
    <div className={styles.login}>

      <h1 className={styles.loginheader}>SIGNIN</h1>
      <form action="" className={styles.loginForm} onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' required  onChange={(e)=>setEmail(e.target.value)} className={styles.input}/>
        <input type="password" placeholder='password' required onChange={(e)=>setPassword(e.target.value)} className={styles.input}/>
        <button className={styles.loginbtn}>Login</button>
        <Link className={styles.loginLink} href="/register">Not registered ? <b>SIGNUP </b></Link>
      </form>
      <button  onClick={()=>signIn("google")}>login with google </button>
    </div>
  )
}

export default Login

