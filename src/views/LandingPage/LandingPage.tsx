import { useState, useEffect, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { HandleSubmitUserName } from '../../services/handleSubmit';
import styles from './LangingPage.module.css'

const LandingPage: FC = (): JSX.Element => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState<string>('')

    useEffect(() => {
        if (localStorage.getItem('User')) {
            navigate('/chat')
        }
    }, [])

    return (
        <div>
            <h1>Chat app</h1>
            <h2>Welcome to Chat App</h2>
            <div className={styles.landing_container}>
                <h2>Please, Enter your UserName</h2>
                <input placeholder='Type Username....' type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <button type="submit" onClick={() => HandleSubmitUserName({ userName, navigate })} >Entry Chat Room</button>
            </div>
        </div>
    )
}

export default LandingPage