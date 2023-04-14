import { Manager } from 'socket.io-client'
import { SOCKET_URL } from './utils/constants'

export const connect = () => {
  const manager = new Manager(SOCKET_URL)

  const socket = manager.socket('/')
}
