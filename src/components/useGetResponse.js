import React from 'react'

export const useGetResponse = () => {
    const getResponse = async (prompt,model_path,num_tokens,temp) => {
        try {
          const response = await fetch('/prompt', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt,model_path,num_tokens,temp}),
          });
          const data = await response.json();
    
          if (!response.ok) {
            throw new Error(data.error);
          }
          return data.received_answer;
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      return {getResponse};
}
