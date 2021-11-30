import React from 'react'
import styles from './RegistrationPage.module.css'
import {users} from '../database/users'
import { useState } from 'react'

const RegistrationPage = (props) => {
    const [newUser, setNewUser] = useState({
        name:'',
        email:'',
        password:''
    })
const handleChange = (event) => {
    setNewUser({
        ...newUser,
        [event.target.name]:event.target.value
    })
}

const handleRegister = () => {
    console.log(newUser)
    users.push(newUser)
    console.log(users)
}
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.credential_wrapper}>
                    <input 
                        name='name'
                        type="name" 
                        placeholder='Name'
                        onChange={handleChange}
                    />
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
                    <div className={styles.btns_wrapper}>
                        <button onClick={handleRegister}>Register</button>
                        <div>Already registered? <button onClick={() => {props.setRegister(false)}}>Login</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage
