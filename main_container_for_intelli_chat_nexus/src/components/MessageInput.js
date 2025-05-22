import React, { useState } from 'react';

/**
 * MessageInput - Component for user message input
 * 
 * Handles user input for sending messages to the chatbot
 */
// PUBLIC_INTERFACE
const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const toggleRecording = () => {
    // This would connect to voice recognition API in a real implementation
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        setMessage('This is a simulated voice message');
      }, 2000);
    }
  };

  return (
    <div className="message-input-container">
      <form onSubmit={handleSubmit} className="message-input-form">
        <textarea
          className="message-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here..."
          rows={1}
        />
        
        <div className="message-actions">
          <button 
            type="button"
            className={`action-btn voice-btn ${isRecording ? 'recording' : ''}`}
            onClick={toggleRecording}
            title={isRecording ? "Stop recording" : "Voice input"}
          >
            🎤
          </button>
          
          <button 
            type="button"
            className="action-btn attach-btn"
            title="Attach files"
          >
            📎
          </button>
          
          <button 
            type="submit"
            className="action-btn send-btn"
            disabled={message.trim() === '' && !isRecording}
            title="Send message"
          >
            ➤
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
