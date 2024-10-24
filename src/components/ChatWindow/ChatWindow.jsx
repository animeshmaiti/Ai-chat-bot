import React from 'react'
import { Chat } from './Chat'
import { InputForm } from './InputForm'
import { useGetResponse } from '../hook/useGetResponse';

export const ChatWindow = () => {
  const {getResponse,loading}= useGetResponse();
  const modelPath='models/Llama3-8B-1.58-100B-tokens/ggml-model-i2_s.gguf';
  const numTokens=6;
  const temp=0.0;

  const storePromptResponse = (prompt, response) => {
    // Retrieve stored data, or initialize to an empty array if it doesn't exist
    const existingData = JSON.parse(localStorage.getItem('chatData')) || [];

    // Get the last used ID from localStorage, or initialize to 0 if it doesn't exist
    const lastId = parseInt(localStorage.getItem('lastId')) || 0;
    const newId = lastId + 1;

    // Create a new entry with an incremental ID
    const newEntry = {
      id: newId,
      prompt,
      response
    };

    // Add the new entry to the existing data
    existingData.push(newEntry);

    // Save updated data and new ID back to localStorage
    localStorage.setItem('chatData', JSON.stringify(existingData));
    localStorage.setItem('lastId', newId);
  };

  const handleResponse = async(tempPrompt)=>{
    const response=await getResponse(tempPrompt,modelPath,numTokens,temp);
    storePromptResponse(tempPrompt, response);
    // console.log(response);
  }
  
  return (
    <div className='chat-window'>
        <Chat loading={loading}/>
        <InputForm handleResponse={handleResponse} loading={loading}/>
    </div>
  )
}
