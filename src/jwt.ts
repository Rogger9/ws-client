import { handleOnSubmit } from './form'
import { connect } from './socket'

const jwtForm = document.querySelector('#jwt-form')!
const jwtInput = document.querySelector<HTMLInputElement>('#jwt-input')!

export const handleOnSendJwt = () => {
  const onSubmit = (e: Event) => {
    e.preventDefault()
    const token = jwtInput.value.trim()
    if (!token) return console.error('No token')

    const socket = connect(token)
    handleOnSubmit(socket)

    jwtInput.value = ''
  }

  jwtForm.addEventListener('submit', onSubmit)
}
