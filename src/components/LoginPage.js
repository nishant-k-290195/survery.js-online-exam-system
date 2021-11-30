import React from 'react'
import styles from './LoginPage.module.css'
import { useState } from 'react'
import {users} from '../database/users'

const LoginPage = (props) => {
    const [loginForm, setLoginForm] = useState({
        email:'',
        password:''
    })

    const handleChange = (event) => {
        setLoginForm({
            ...loginForm, 
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = () => {
        const { email, password } = loginForm
        for(let val of users){
            if(val.email === email && val.password === password){
                props.setLogin(false)
            } else(alert(`INVALID CREDENTIALS`))
        }
    }

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.credential_wrapper}>
                    <input 
                        name='email'
                        type="email" 
                        placeholder='Email'
                        onChange={handleChange}
                    />
                    <input 
                        name='password'
                        type="password" 
                        placeholder='Password' 
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>Login</button>
                </div>
                <div className={styles.wrapper}>
                    <a href='#'>Forgot Password or email?</a>
                    <p>
                        Not registered yet? 
                        <span>
                            <button 
                                onClick={
                                    () => {props.setRegister(true)}
                                }
                            >Register
                            </button>
                        </span>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default LoginPage
