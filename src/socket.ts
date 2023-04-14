import { Manager, Socket } from 'socket.io-client'
import { SOCKET_URL } from './utils/constants'

export const connect = () => {
  const manager = new Manager(SOCKET_URL)

  const socket = manager.socket('/')

  addListeners(socket)
}

const addListeners = (socket: Socket) => {
  const connectionStatus = document.querySelector('#connection-status')!
  const clientsUl = document.querySelector('#clients-ul')!

  socket.on('connect', () => {
    connectionStatus.innerHTML = 'Online'
  })

  socket.on('disconnect', () => {
    connectionStatus.innerHTML = 'Offline'
  })

  socket.on('clients-updated', (clients: string[]) => {
    let clientsHtml = ''
    clients.forEach(id => (clientsHtml += `<li>${id}</li>`))
    clientsUl.innerHTML = clientsHtml
  })
}
