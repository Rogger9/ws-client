import { Socket } from 'socket.io-client'
import { emitMessage } from './socket'

const messageForm = document.querySelector('#message-form')!
const messageInput = document.querySelector<HTMLInputElement>('#message-input')!

export const handleOnSubmit = (socket: Socket) => {
  const onSubmit = (e: Event) => {
    e.preventDefault()
    const message = messageInput.value.trim()
    if (!socket.connected || !message) return console.error('Error')

    emitMessage({ id: 'Yo', message })
    messageInput.value = ''
  }

  messageForm.addEventListener('submit', onSubmit)
}
