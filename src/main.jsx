import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import SocialIcons from './Components/SocialIcons/SocialIcons'
import '../src/Components/SocialIcons/SocialIcons.css';
import './index.css'
// import Test from './Test'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
