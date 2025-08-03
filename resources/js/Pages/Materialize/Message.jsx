import React, { useState, useEffect, useRef } from 'react'
import { usePage, Link, router } from '@inertiajs/react'

const Message = () => {
  const { users, conversations } = usePage().props
  const [activeConversation, setActiveConversation] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [pollingInterval, setPollingInterval] = useState(null)
  const messagesEndRef = useRef(null)
  
  // Initialize Materialize components
  useEffect(() => {
    if (typeof M !== 'undefined') {
      M.AutoInit()
      // Initialize collapsible for mobile
      const elems = document.querySelectorAll('.collapsible')
      M.Collapsible.init(elems)
    }
  }, [])

  // Start polling when conversation is selected
  useEffect(() => {
    if (activeConversation) {
      fetchMessages()
      // Start polling every 2 seconds
      const interval = setInterval(fetchMessages, 2000)
      setPollingInterval(interval)
      
      return () => clearInterval(interval)
    }
  }, [activeConversation])

  // Auto-scroll to bottom when new messages arrive
//   useEffect(() => {
//     scrollToBottom()
//   }, [messages])

const fetchMessages = () => {
  if (!activeConversation) return
  
  axios.get(`/api/v1/messages/${activeConversation}`)
    .then(response => {
      setMessages(response.data || [])
    })
    .catch(error => {
      console.error('Error fetching messages:', error)
    })
}


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

const handleSendMessage = (e) => {
  e.preventDefault()
  if (!newMessage.trim() || !activeConversation) return
  
  axios.post('/api/v1/messages', {
    conversation_id: activeConversation,
    content: newMessage
  })
  .then(response => {
    setNewMessage('')
    // Immediately fetch new messages without waiting for next poll
    setTimeout(fetchMessages, 300)
  })
  .catch(error => {
    console.error('Error sending message:', error)
  })
}

 const startConversation = (userId) => {
  axios.post('/api/v1/conversations', {
    user_id: userId
  })
  .then(response => {
    if (response.data.conversation_id) {
      setActiveConversation(response.data.conversation_id)
    }
  })
  .catch(error => {
    if (error.response.status === 409 && error.response.data.conversation_id) {
      // Conversation already exists - use existing one
      setActiveConversation(error.response.data.conversation_id)
    } else {
      console.error('Error starting conversation:', error)
    }
  })
}
  return (
    <>
      <div className="row">
        {/* Sidebar - Conversations */}
        <div className="col s12 m4 l3">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Conversations</span>
              <ul className="collection">
                {conversations.map(conv => (
                  <li 
                    key={conv.id} 
                    className={`collection-item avatar ${activeConversation === conv.id ? 'active blue lighten-4' : ''}`}
                    onClick={() => setActiveConversation(conv.id)}
                  >
                    <i className="material-icons circle">chat</i>
                    <span className="title">
                      {conv.users.filter(u => u.id !== usePage().props.auth.user.id).map(u => u.name).join(', ')}
                    </span>
                    <p>Last message...</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <span className="card-title">Start New Chat</span>
              <ul className="collection">
                {users.map(user => (
                  <li 
                    key={user.id} 
                    className="collection-item avatar"
                    onClick={() => startConversation(user.id)}
                  >
                    <i className="material-icons circle">person_add</i>
                    <span className="title">{user.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
<div className="col s12 m8 l9">
  {activeConversation ? (
    <div className="card">
      <div className="card-content">
        <span className="card-title">
          Chat with {conversations.find(c => c.id === activeConversation)?.users
            .filter(u => u.id !== usePage().props.auth.user.id)
            .map(u => u.name).join(', ')}
        </span>
        
        {/* Messages Container */}
        <div 
          className="messages-container" 
          style={{ 
            height: '60vh', 
            overflowY: 'auto', 
            padding: '10px',
            border: '1px solid #eee',
            borderRadius: '4px',
            marginBottom: '20px'
          }}
        >
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`message ${message.sender_id === usePage().props.auth.user.id ? 'right-align' : ''}`}
              style={{ marginBottom: '15px' }}
            >
              <div 
                className={`chip ${message.sender_id === usePage().props.auth.user.id ? 'blue lighten-2' : ''}`}
              >
                {message.content}
              </div>
              <div className="grey-text" style={{ fontSize: '0.8rem' }}>
                {new Date(message.created_at).toLocaleTimeString()}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage}>
          <div className="row">
            <div className="input-field col s10">
              <input
                id="message"
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
              />
            </div>
            <div className="col s2">
              <button 
                className="btn waves-effect waves-light blue" 
                type="submit"
                disabled={!newMessage.trim()}
              >
                <i className="material-icons">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className="card">
      <div className="card-content center-align">
        <i className="material-icons large">chat</i>
        <p>Select a conversation or start a new one</p>
      </div>
    </div>
  )}
</div>
      </div>

      {/* Mobile Collapsible Menu */}
      <div className="fixed-action-btn hide-on-med-and-up">
        <a className="btn-floating btn-large blue">
          <i className="large material-icons">chat</i>
        </a>
        <ul>
          {conversations.map(conv => (
            <li key={conv.id}>
              <a 
                className="btn-floating blue"
                onClick={() => setActiveConversation(conv.id)}
              >
                <i className="material-icons">person</i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Message