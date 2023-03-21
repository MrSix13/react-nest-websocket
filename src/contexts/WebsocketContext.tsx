import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

//export const socket = io('socketio-back-ecommerce-production.up.railway.app'); link de produccion
export const socket = io('http://localhost:3000')
export const WebsocketContext = createContext<Socket>(socket);
export const WebsocketProvider = WebsocketContext.Provider;