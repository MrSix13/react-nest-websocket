import styles from './WebSocket.module.css';
import { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "../../contexts/WebsocketContext";
import { useNavigate } from 'react-router-dom';

export type MessagePayload = {
    contentss: string,
    msg: string
    user: string
    date: string
}

export const Websocket = () => {
    const [textInput, setTextInput] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [messages, setMessages] = useState<MessagePayload[]>([])
    const socket = useContext(WebsocketContext);
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('User')) {
            navigate('/')
        }
        const user = JSON.parse(localStorage.getItem('User')!);
        setUser(user)
    }, [])

    useEffect(() => {
        socket.on('onMessage', (newMessage: MessagePayload) => {
            setMessages((prev) => [...prev, newMessage]);
        });

        return () => {
            socket.off('connect');
            socket.off('onMessage');
        }
    }, [])

    const onSubmit = () => {
        socket.emit('newMessage', user, textInput)
        setTextInput('')
    }

    return (
        <div className={styles.container_chat}>
            <h1>Public Chat Room</h1>
            <div>{messages.length === 0 ? <div></div> : <div>
                {messages.map((msg, index) => (
                    <div className={styles.mensaje_chat} key={index}>
                        <div className={styles.user_chat}>
                            <h2>{msg.contentss[0]}</h2>
                            <img src="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png" alt="" />
                        </div>
                        <p>{msg.contentss[1]}</p>
                        <div className={styles.date_chat}>
                            <h4>Hora: {msg.date.slice(11).split("")}</h4>
                        </div>
                    </div>
                ))}
            </div>}</div>
            <div className={styles.input_chat}>
                <input
                    type="text"
                    placeholder='Type a Message...'
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                />
                <button onClick={onSubmit}>Send Messaje</button>
            </div>
        </div>
    )
}