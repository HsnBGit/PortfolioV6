import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navnar from './Navnar.jsx'
import Profile from './Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navnar/>
    <Profile/>
  </StrictMode>,
)
