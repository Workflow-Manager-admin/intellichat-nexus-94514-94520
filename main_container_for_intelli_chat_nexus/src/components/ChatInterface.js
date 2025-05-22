import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

/**
 * ChatInterface - Component for handling the main chat interaction
 * 
 * This component combines the message display area and input field
 */
// PUBLIC_INTERFACE
const ChatInterface = () => {
  // This would later be connected to a proper state management solution
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      type: 'system',
      text: 'Welcome to IntelliChat Nexus! How can I assist you today?',
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = (message) => {
    if (message.trim() === '') return;
    
    // Add user message to chat
    const newUserMessage = {
      id: messages.length + 1,
      type: 'user',
      text: message,
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    
    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'assistant',
        text: 'Thank you for your message. This is a placeholder response from IntelliChat Nexus.',
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, aiResponse]);
    }, 1000);
  };

  return (
    <div className="intellichat-interface">
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatInterface;
