import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navnar from './Navnar.jsx'
import Profile from './Profile.jsx'
import Content from './content.jsx'
import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import Articles from './Articles.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Articles/>
    <Navnar/>
    <Profile/>
    <Content/>
    <Experience/>
    <Projects/>
    <Contact/>
  </StrictMode>
)
