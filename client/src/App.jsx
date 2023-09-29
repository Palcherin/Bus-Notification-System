import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Navbar} from './Components/Navbar.jsx'
import {Home} from './Routes/Home.jsx'
import {Notice} from './Routes/Notice.jsx'
import {Trackmap} from './Routes/Trackmap.jsx'
import {Results} from './Routes/Results.jsx'
import {signuproute} from './Routes/SignUproute.jsx'
import {Chatroom} from './Routes/Chatroom.jsx'
function App() {

  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/notice' element={<Notice/> }/>
      
    </Routes>
    
    </>
  )
}

export default App
