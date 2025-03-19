import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navnar from './Navnar.jsx'
import Profile from './Profile.jsx'
import Content from './content.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import Articles from './Articles.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navnar/>
    <Profile/>
    <Content/>
    <Experience/>
    <Projects/>
    <Articles/>
  </StrictMode>,
)
