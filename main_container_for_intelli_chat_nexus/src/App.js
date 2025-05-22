import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import { ChatProvider } from './contexts/ChatContext';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">⚡</span> IntelliChat Nexus
            </div>
            <div>
              <button className="btn">Documentation</button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">Advanced AI Conversation Platform</div>
            
            <h1 className="title">IntelliChat Nexus</h1>
            
            <div className="description">
              An intelligent conversational AI chatbot powered by advanced natural language 
              processing and machine learning technologies to provide interactive and 
              context-aware communication.
            </div>
            
            <button className="btn btn-large">Learn More</button>
          </div>
        </div>
      </main>

      <ChatProvider>
        <MainContainer />
      </ChatProvider>
    </div>
  );
}

export default App;