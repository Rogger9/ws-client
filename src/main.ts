import { handleOnSendJwt } from './jwt'
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

handleOnSendJwt()
