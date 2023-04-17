export interface IMessage {
  fullName: string
  message: string
}

export interface IMessageClient extends Pick<IMessage, 'message'> {
  id: string
}
