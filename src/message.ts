import { IMessage } from './utils/types'

const messagesUl = document.querySelector('#messages-ul')!
const template = document.querySelector<HTMLTemplateElement>('#message-temp')!.content
const container = document.querySelector('#messages-container')!

export const addMessage = ({ fullName, message }: IMessage) => {
  const newMessageTemp = template.cloneNode(true) as Element
  const name = newMessageTemp.querySelector('#message-name')!
  const content = newMessageTemp.querySelector('#message-content')!
  const time = newMessageTemp.querySelector('#message-time')!
  const messageTime = new Date().toLocaleTimeString().replace(/:\d{2} /gm, ' ')

  name.innerHTML = fullName
  content.innerHTML = message
  time.innerHTML = messageTime

  messagesUl.append(newMessageTemp)
  container.scrollTop = container.scrollHeight
}
