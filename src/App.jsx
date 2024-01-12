import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import NoteState from './Context/NoteState'
import Cartview from './Components/Cartview'

function App() {
  

  return (
    <>
    <NoteState>
      <BrowserRouter>
         <Routes>
           <Route path={"/"} element={<Home/>} />
           <Route path="cart" element={<Cartview/>} />
         </Routes>
      </BrowserRouter>
    </NoteState>
    </>
  )
}

export default App
