import React from 'react';
import SendIcon from '@mui/icons-material/Send';

export const InputForm = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [rows, setRows] = React.useState(1);
  const maxRows = 5;
  const handleChange = (e) => {
    const lineBreaks = e.target.value.split('\n').length; // Count number of lines
    const newRows = Math.min(lineBreaks, maxRows); // Set the rows, limiting to maxRows
    setRows(newRows); // Adjust rows dynamically
    setInputValue(e.target.value); // Set the input value
  };
  
  return (
    <div className="input-container">
      <form className="form-container" onSubmit="handleSubmit(event)">
        <div className="input-wrapper">
          <textarea
            className="input-field"
            placeholder="Send a message"
            value={inputValue}
            onChange={handleChange}
            rows={rows}
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
