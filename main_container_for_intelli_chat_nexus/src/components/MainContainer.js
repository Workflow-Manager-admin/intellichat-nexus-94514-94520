import React, { useState } from 'react';
import ChatInterface from './ChatInterface';
import './MainContainer.css';

/**
 * MainContainer - Primary container component for IntelliChat Nexus
 * 
 * This component serves as the main wrapper for the chatbot interface,
 * providing structure and layout for the chat functionality.
 */
// PUBLIC_INTERFACE
const MainContainer = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`intellichat-container ${isMinimized ? 'minimized' : ''}`}>
      <div className="intellichat-header">
        <div className="intellichat-title">
          <span className="intellichat-icon">⚡</span>
          <h2>IntelliChat Nexus</h2>
        </div>
        <div className="intellichat-controls">
          <button 
            className="control-btn" 
            onClick={toggleCollapse} 
            title={isCollapsed ? "Expand" : "Collapse"}
          >
            {isCollapsed ? '↓' : '↑'}
          </button>
          <button 
            className="control-btn" 
            onClick={toggleMinimize} 
            title={isMinimized ? "Open" : "Minimize"}
          >
            {isMinimized ? '□' : '−'}
          </button>
        </div>
      </div>
      
      {!isCollapsed && !isMinimized && (
        <div className="intellichat-body">
          <div className="intellichat-assistant-info">
            <div className="assistant-avatar">AI</div>
            <div className="assistant-details">
              <span className="assistant-name">IntelliChat Assistant</span>
              <span className="assistant-status online">Active</span>
            </div>
          </div>
          
          <ChatInterface />
          
          <div className="intellichat-footer">
            <span className="intellichat-branding">Powered by KAVIA AI</span>
            <div className="intellichat-options">
              <button className="option-btn" title="Settings">⚙️</button>
              <button className="option-btn" title="Help">?</button>
            </div>
          </div>
        </div>
      )}
      
      {isMinimized && (
        <div className="intellichat-quick-action" onClick={toggleMinimize}>
          <span className="quick-action-icon">💬</span>
        </div>
      )}
    </div>
  );
};

export default MainContainer;
