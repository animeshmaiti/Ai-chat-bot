import React from 'react'
import { Chat } from './Chat'
import { InputForm } from './InputForm'

export const ChatWindow = () => {
  return (
    <div className='chat-window'>
        <Chat/>
        <InputForm/>
    </div>
  )
}
