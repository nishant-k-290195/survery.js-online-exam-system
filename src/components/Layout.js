import React from 'react'
import { useState } from 'react'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'
import CreateQuestionsPage from './CreateQuestionsPage'

const Layout = () => {
    const [login, setLogin] = useState(true)
    const [register, setRegister] = useState(false)
    
    if(login){
        if(!register) return  <LoginPage 
            setRegister={setRegister} 
            setLogin={setLogin}/>

        if(register) return <RegistrationPage 
            setRegister={setRegister}/>
    }

    if(!login) return <CreateQuestionsPage />
}

export default Layout
