import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderDiv from './header/HeaderDiv.jsx'
import MainDivSection1 from './main_div/MainDivSection1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderDiv />
    <MainDivSection1 />
  </StrictMode>,
)
