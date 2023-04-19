import { Manager, Socket } from 'socket.io-client'
import { updateClientsList, updateConnectionStatus } from './main'
import { addMessage } from './message'
import { SOCKET_URL } from './utils/constants'
import { ConnectionStatus, Events } from './utils/enums'

let socket: Socket

export const connect = (token: string) => {
  const manager = new Manager(SOCKET_URL, { extraHeaders: { authentication: token } })
  socket?.removeAllListeners()
  socket = manager.socket('/')
  addListeners()
  return socket
}

const addListeners = () => {
  socket.on(Events.CONNECT, () => updateConnectionStatus(ConnectionStatus.ONLINE))
  socket.on(Events.DISCONNECT, () => updateConnectionStatus(ConnectionStatus.OFFLINE))
  socket.on(Events.CLIENTS_UPDATED, updateClientsList)
  socket.on(Events.MESSAGE_SERVER, addMessage)
}

export const emitMessage = (data: unknown) => socket.emit(Events.MESSAGE_CLIENT, data)
