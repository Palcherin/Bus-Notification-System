import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes,  Router} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>

    <Router>
      <Routes />
      <Route path='/'></Route>
    </Router>
    </BrowserRouter>
    </>
  )
}

export default App
