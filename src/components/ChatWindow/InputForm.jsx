import React from 'react';
import SendIcon from '@mui/icons-material/Send';

export const InputForm = () => {
  return (
    <div className="input-container">
      <form className="form-container" onsubmit="handleSubmit(event)">
        <div className="input-wrapper">
          <input
            type="text"
            className="input-field"
            placeholder="Send a message"
            value=""
          />
          <button className="send-button" type="submit">
            <SendIcon />
          </button>
        </div>
      </form>
      <p className="info-text">
        This AI model text generation is not accurate, it is for testing
        purposes only.
      </p>
    </div>
  );
};
