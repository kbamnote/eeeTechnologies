import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader } from 'lucide-react';

// ChatBot API Configuration
const CHATBOT_API_URL = 'https://eliteassociate1.app.n8n.cloud/webhook/sessionId';
const CHATBOT_MESSAGE_URL = 'https://eliteassociate1.app.n8n.cloud/webhook/eeebot';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEmailCapture, setIsEmailCapture] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [emailError, setEmailError] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 I'm your EEE Technologies assistant. To better assist you, could you please share your email address?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check for existing email and session in localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem('chatbot_user_email');
    const savedSessionId = localStorage.getItem('chatbot_session_id');
    if (savedEmail && savedSessionId) {
      setUserEmail(savedEmail);
      setSessionId(savedSessionId);
      setIsEmailCapture(false);
      setMessages([
        {
          id: 1,
          text: `Welcome back! 👋 I'm your EEE Technologies assistant. How can I help you today?`,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    }
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = async () => {
    if (!emailInput.trim()) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(emailInput)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      // Call session ID API with email as sessionId
      const sessionResponse = await fetch(CHATBOT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: emailInput
        })
      });

      if (!sessionResponse.ok) {
        throw new Error(`Session API error! status: ${sessionResponse.status}`);
      }

      const sessionData = await sessionResponse.json();
      const newSessionId = sessionData[0]?.sessionId || 'session_' + Date.now();

      // Save email and session ID to localStorage
      localStorage.setItem('chatbot_user_email', emailInput);
      localStorage.setItem('chatbot_session_id', newSessionId);
      
      setUserEmail(emailInput);
      setSessionId(newSessionId);
      setEmailError('');
      setIsEmailCapture(false);
      
      // Add confirmation message
      const confirmationMessage = {
        id: messages.length + 1,
        text: `Thank you! I'll remember ${emailInput} for future conversations. How can I help you today?`,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, confirmationMessage]);
    } catch (error) {
      console.error('Session API Error:', error);
      setEmailError('Failed to initialize chat session. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getBotResponse = async (userMessage, sessionId) => {
    try {
      const response = await fetch(CHATBOT_MESSAGE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
          query: userMessage
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data[0]?.output || "I'm processing your request. Please try again.";
    } catch (error) {
      console.error('ChatBot API Error:', error);
      return "Sorry, I'm having trouble connecting right now. Please try again later or contact our support team.";
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // Use session ID from state
    if (!sessionId) {
      const errorMessage = {
        id: messages.length + 1,
        text: "Session not initialized. Please refresh the page and enter your email again.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const botResponse = await getBotResponse(inputValue, sessionId);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I encountered an error. Please try again or contact support.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isEmailCapture) {
        handleEmailSubmit();
      } else {
        sendMessage();
      }
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center group"
        >
          <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-md h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-2xl text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">EEE Assistant</h3>
                <p className="text-xs opacity-90">
                  {isEmailCapture ? 'Email Required' : userEmail ? `Chatting as ${userEmail}` : 'Online now'}
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-blue-500' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-br-md'
                        : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-200'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-md px-4 py-2 shadow-sm border border-gray-200">
                      <div className="flex items-center gap-2">
                        <Loader className="w-4 h-4 text-blue-500 animate-spin" />
                        <span className="text-sm text-gray-600">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            {isEmailCapture ? (
              <div className="space-y-3">
                <div>
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => {
                      setEmailInput(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${emailError ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1">{emailError}</p>
                  )}
                </div>
                <button
                  onClick={handleEmailSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  Continue to Chat
                </button>
                <p className="text-xs text-gray-500 text-center">
                  We'll use this to personalize your experience and follow up if needed
                </p>
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            )}
            
            {/* Quick Actions */}
            {!isEmailCapture && (
              <div className="flex flex-wrap gap-2 mt-3">
                {['Courses', 'Placement', 'Price', 'Contact'].map((action) => (
                  <button
                    key={action}
                    onClick={() => {
                      setInputValue(action);
                      setTimeout(sendMessage, 100);
                    }}
                    className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;