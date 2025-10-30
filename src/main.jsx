import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderDiv from './header/HeaderDiv.jsx'
import MainDivSection1 from './main_div/MainDivSection1.jsx'
import MainDivSection2 from './main_div/MainDivSection2.jsx'
import MainDivSection3 from './main_div/MainDivSection3.jsx'
import MainDivSection4 from './main_div/MainDivSection4.jsx'
import Footer from './footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderDiv />
    <MainDivSection1 />
    <MainDivSection2 />
    <MainDivSection3 />
    <MainDivSection4 />
    <Footer />
  </StrictMode>,
)
