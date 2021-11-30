import React from 'react'
import styles from './RegistrationPage.module.css'

const RegistrationPage = (props) => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.credential_wrapper}>
                    <input 
                        type="name" 
                        placeholder='Name'
                    />
                    <input 
                        type="email" 
                        placeholder='Email'
                    />
                    <input 
                        type="password" 
                        placeholder='Password' 
                    />
                    <div className={styles.btns_wrapper}>
                        <button>Register</button>
                        <div>Already registered? <button onClick={() => {props.setRegister(false)}}>Login</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage
