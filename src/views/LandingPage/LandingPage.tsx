import React, { useState, MouseEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <div>
                <h2>Ingrese su nombre de usuario</h2>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <button type="submit" onClick={(e) => handleSubmit(e)} ></button>
            </div>
        </div>
    )
}

export default LandingPage