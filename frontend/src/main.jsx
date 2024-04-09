import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router.jsx';
import './index.css'
import { UserContext, UserContextProvider } from './context/userContext.jsx';
import { ChatContextProvider } from './context/chatContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <ChatContextProvider>
        <UserContextProvider>
          <Router>
            <UserContextProvider></UserContextProvider>
          </Router>
        </UserContextProvider>
      </ChatContextProvider>

    </React.StrictMode>
  </>
)