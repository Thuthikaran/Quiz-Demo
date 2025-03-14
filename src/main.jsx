import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Quiz from './components/Quiz.jsx'
import Nav from './components/Nav.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <App />
    <Quiz/>
  </StrictMode>,
)
