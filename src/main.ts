import { handleOnSubmit } from './form'
import { connect } from './socket'
import { ConnectionStatus } from './utils/enums'

const connectionStatus = document.querySelector('#connection-status')!
const clientsUl = document.querySelector('#clients-ul')!

export const updateConnectionStatus = (status: ConnectionStatus) =>
  (connectionStatus.innerHTML = status)

export const updateClientsList = (clients: string[]) => {
  let clientsHtml = ''
  clients.forEach(id => (clientsHtml += `<li>${id}</li>`))
  clientsUl.innerHTML = clientsHtml
}

const socket = connect()

handleOnSubmit(socket)
