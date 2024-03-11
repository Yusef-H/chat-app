import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router.jsx';
import './index.css'
import { UserContextProvider } from './context/userContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </React.StrictMode>
  </>
)