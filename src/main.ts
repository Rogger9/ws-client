import { handleOnSubmit } from './form'
import { connect } from './socket'
import { ConnectionStatus } from './utils/enums'
import { IMessage } from './utils/types'

const connectionStatus = document.querySelector('#connection-status')!
const messagesUl = document.querySelector('#messages-ul')!
const clientsUl = document.querySelector('#clients-ul')!

export const updateConnectionStatus = (status: ConnectionStatus) =>
  (connectionStatus.innerHTML = status)

export const updateClientsList = (clients: string[]) => {
  let clientsHtml = ''
  clients.forEach(id => (clientsHtml += `<li>${id}</li>`))
  clientsUl.innerHTML = clientsHtml
}

export const addMessage = ({ fullName, message }: IMessage) => {
  const newMessage = `
    <li>
      <strong>${fullName}</strong>
      <span>${message}</span>
    </li>
  `

  const li = document.createElement('li')
  li.innerHTML = newMessage

  messagesUl.append(li)
}

const socket = connect()

handleOnSubmit(socket)
