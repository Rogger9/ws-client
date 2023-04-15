import { Manager, Socket } from 'socket.io-client'
import { SOCKET_URL } from './utils/constants'
import { IMessage } from './utils/types'

export const connect = () => {
  const manager = new Manager(SOCKET_URL)

  const socket = manager.socket('/')

  addListeners(socket)
}

const addListeners = (socket: Socket) => {
  const connectionStatus = document.querySelector('#connection-status')!
  const clientsUl = document.querySelector('#clients-ul')!
  const messageForm = document.querySelector('#message-form')!
  const messageInput = document.querySelector<HTMLInputElement>('#message-input')!
  const messagesUl = document.querySelector('#messages-ul')!

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

  messageForm.addEventListener('submit', e => {
    e.preventDefault()
    if (!messageInput.value.trim()) return

    socket.emit('message-client', { id: 'Yo', message: messageInput.value })
    messageInput.value = ''
  })

  socket.on('message-server', ({ fullName, message }: IMessage) => {
    const newMessage = `
      <li>
        <strong>${fullName}</strong>
        <span>${message}</span>
      </li>
    `

    const li = document.createElement('li')
    li.innerHTML = newMessage

    messagesUl.append(li)
  })
}
