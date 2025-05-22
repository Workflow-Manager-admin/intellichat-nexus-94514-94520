import React, { useEffect, useRef } from 'react';

/**
 * MessageList - Component for displaying chat messages
 * 
 * Renders the list of messages in the chat interface
 */
// PUBLIC_INTERFACE
const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="message-list-container">
      <div className="message-list">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`message-item ${message.type}`}
          >
            {message.type === 'assistant' && (
              <div className="message-avatar">AI</div>
            )}
            
            <div className="message-content">
              <div className="message-text">{message.text}</div>
              <div className="message-timestamp">{formatTime(message.timestamp)}</div>
            </div>
            
            {message.type === 'user' && (
              <div className="message-avatar user">You</div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;
