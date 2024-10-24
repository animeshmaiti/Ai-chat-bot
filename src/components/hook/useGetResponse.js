import { useState } from 'react'

export const useGetResponse = () => {
  const [loading, setLoading] = useState(false);
  const getResponse = async (prompt, model_path, num_tokens, temp) => {
    setLoading(true);
    try {
      const response = await fetch('/prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, model_path, num_tokens, temp }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }
      return data.received_answer;
    } catch (error) {
      console.error('Error:', error);
    }finally {
      setLoading(false);
    }
  };

  return { getResponse, loading };
}
