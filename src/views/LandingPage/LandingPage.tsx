import React, { useState, MouseEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LangingPage.module.css'

const LandingPage = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState<string>('')

    useEffect(() => {
        if (localStorage.getItem('User')) {
            navigate('/chat')
        }
    }, [])
    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        const nameLowerCase = userName.toLocaleLowerCase()
        if (localStorage.getItem('User')) {
            navigate('/chat')
        } else {
            console.log('No hay nadie registrado con ese nombre')
            localStorage.setItem('User', JSON.stringify(nameLowerCase))
            navigate('/chat')
        }
        console.log(userName)
    }
    return (
        <div>
            <h1>Chat app</h1>
            <h2>Welcome to Chat App</h2>
            <div className={styles.landing_container}>
                <h2>Please, Enter your UserName</h2>
                <input placeholder='Type Username....' type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <button type="submit" onClick={(e) => handleSubmit(e)} >Entry Chat Room</button>
            </div>
        </div>
    )
}

export default LandingPage