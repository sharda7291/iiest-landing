import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About.jsx'
import Department from './components/Department.jsx'
import CommitteePage from './components/CommitteePage.jsx'
import RegistraPage from './components/RegistraPage.jsx'
import SpeakerPage from './components/SpeakerPage.jsx'
import ScheduleUrl from './components/ScheduleUrl.jsx'
import ContactPage from './components/ContactPage.jsx'
import StudentActivity from './components/StudentActivity.jsx'
import Activities from './components/Activities.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/aboutus" element={<About />} />
        <Route path='/department' element={<Department/>}/>
        <Route path='/speaker' element={<SpeakerPage/>}/>
        <Route path='/registration' element={<RegistraPage/>}/>
        <Route path='/schedule' element={<ScheduleUrl/>}/>
        <Route path='/googleform' element={"https://forms.gle/BhSidnHjGHAf6qyC7"}/>
        <Route path='/committee' element={<CommitteePage/>}/>
        <Route path='/contactus' element={<ContactPage/>}/>
        <Route path='/studentactivities' element={<Activities/>}/>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
