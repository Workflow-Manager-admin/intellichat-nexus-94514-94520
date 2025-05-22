import React, { createContext, useContext, useReducer } from 'react';

// Initial state for chat context
const initialState = {
  messages: [
    {
      id: 1,
      type: 'system',
      text: 'Welcome to IntelliChat Nexus! How can I assist you today?',
      timestamp: new Date()
    }
  ],
  isLoading: false,
  error: null
};

// Actions
const ACTIONS = {
  ADD_MESSAGE: 'ADD_MESSAGE',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_CHAT: 'CLEAR_CHAT'
};

// Reducer to handle state updates
const chatReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ACTIONS.CLEAR_CHAT:
      return {
        ...state,
        messages: initialState.messages
      };
    default:
      return state;
  }
};

// Create context
const ChatContext = createContext();

/**
 * ChatProvider - Context provider for chat state
 * 
 * Provides chat state and actions to all child components
 */
// PUBLIC_INTERFACE
export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  // Actions
  const addMessage = (message) => {
    const newMessage = {
      id: Date.now(),
      timestamp: new Date(),
      ...message
    };
    
    dispatch({ type: ACTIONS.ADD_MESSAGE, payload: newMessage });
    return newMessage;
  };

  const setLoading = (isLoading) => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: isLoading });
  };

  const setError = (error) => {
    dispatch({ type: ACTIONS.SET_ERROR, payload: error });
  };

  const clearChat = () => {
    dispatch({ type: ACTIONS.CLEAR_CHAT });
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;
    
    // Add user message
    addMessage({ type: 'user', text });
    
    // Set loading state
    setLoading(true);
    
    // In a real implementation, this would call an API
    // Simulate AI response
    setTimeout(() => {
      addMessage({
        type: 'assistant',
        text: 'This is a simulated response from IntelliChat Nexus.'
      });
      setLoading(false);
    }, 1500);
  };

  const value = {
    messages: state.messages,
    isLoading: state.isLoading,
    error: state.error,
    addMessage,
    sendMessage,
    clearChat,
    setError
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};

/**
 * useChat - Custom hook for accessing chat context
 * 
 * Provides easy access to chat state and actions
 */
// PUBLIC_INTERFACE
export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
