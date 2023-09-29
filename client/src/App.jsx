
import './App.css'
<<<<<<< HEAD
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Navbar} from './Components/Navbar.jsx'
import {Home} from './Routes/Home.jsx'
import {Notice} from './Routes/Notice.jsx'
import {Trackmap} from './Routes/Trackmap.jsx'
import {Results} from './Routes/Results.jsx'
import {signuproute} from './Routes/SignUproute.jsx'
import {Chatroom} from './Routes/Chatroom.jsx'
=======
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'

>>>>>>> 1735944d56b0ad33f77336cbb3fae4f17f03269b
function App() {

  return (
    <>
<<<<<<< HEAD
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/notice' element={<Notice/> }/>
      
    </Routes>
    
=======
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </BrowserRouter>
>>>>>>> 1735944d56b0ad33f77336cbb3fae4f17f03269b
    </>
  )
}

export default App
