import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const Chat = ({ loading }) => {
  const [chatData, setChatData] = useState([]);

  // Retrieve data from localStorage when component mounts
  useEffect(() => {
    const storedChatData = JSON.parse(localStorage.getItem('chatData')) || [];
    setChatData(storedChatData);
    console.log(storedChatData);
  }, [loading]);

  return (
    <div className="chat-container">
      <div className="chat">
        {loading ? (
          <Box sx={{ width: '100%' }}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" height={60} />
            <Skeleton variant="rounded" height={60} />
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        ) : (
          chatData.map(({ id, prompt, response }) => (
            <article className="single-conversation" key={id}>
              {/* User Prompt */}
              <div className="chat-message-input">
                <div className="inner-input-container">
                  <p className="chat-message-text">{prompt}</p>
                </div>
              </div>

              {/* AI Response */}
              <div className="chat-message-response">
                <div className="bot-details">
                  <img src="any image" alt="avatar" />
                  <h3 className="chat-name">Bot</h3>
                </div>
                <div className="chat-content">
                  <p className="chat-text">{response}</p>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
};
