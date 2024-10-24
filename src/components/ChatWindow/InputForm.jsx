import React from 'react';
import SendIcon from '@mui/icons-material/Send';

export const InputForm = ({handleResponse,loading}) => {
  const [inputValue, setInputValue] = React.useState('');
  const [rows, setRows] = React.useState(1);
  const maxRows = 5;
  const maxCharsPerLine = 130; // Set the max characters per line

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const tempPrompt=inputValue;
    setInputValue('');
    setRows(1);
    handleResponse(tempPrompt);
    // console.log(response);
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const lines = value.split('\n').map(line => {
      // Split line into chunks of maxCharsPerLine
      if (line.length > maxCharsPerLine) {
        return line.match(new RegExp(`.{1,${maxCharsPerLine}}`, 'g')).join('\n');
      }
      return line;
    });
    const newValue = lines.join('\n');
    const lineBreaks = newValue.split('\n').length; // Count number of lines

    const newRows = Math.min(lineBreaks, maxRows); // Set rows, limit to maxRows
    
    setRows(newRows); // Adjust rows dynamically
    setInputValue(newValue); // Set the input value
  };

  return (
    <div className="input-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <textarea
            className="input-field"
            placeholder="Send a message"
            value={inputValue}
            onChange={handleChange}
            rows={rows}
          />
          <button className="send-button" disabled={inputValue === '' || loading === true} type="submit">
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
