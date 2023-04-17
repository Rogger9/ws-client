import { Manager, Socket } from 'socket.io-client'
import { addMessage, updateClientsList, updateConnectionStatus } from './main'
import { SOCKET_URL } from './utils/constants'
import { ConnectionStatus, Events } from './utils/enums'

export const connect = () => {
  const manager = new Manager(SOCKET_URL)
  const socket = manager.socket('/')
  addListeners(socket)
  return socket
}

const addListeners = (socket: Socket) => {
  socket.on(Events.CONNECT, () => updateConnectionStatus(ConnectionStatus.ONLINE))
  socket.on(Events.DISCONNECT, () => updateConnectionStatus(ConnectionStatus.OFFLINE))
  socket.on(Events.CLIENTS_UPDATED, updateClientsList)
  socket.on(Events.MESSAGE_SERVER, addMessage)
}

export const emitMessage = (socket: Socket, data: unknown) =>
  socket.emit(Events.MESSAGE_CLIENT, data)
