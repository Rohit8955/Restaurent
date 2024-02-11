import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NoteState from './Context/NoteState'
import Cartview from './Components/Cartview'
import Details from './Components/Details'

function App() {
  

  return (
    <>
    <NoteState>
      <BrowserRouter>
         <Routes>
           <Route path={"/"} element={<Home/>} />
           <Route path={'/cart'} element={<Cartview/>} />
           <Route path={'/details/:name'} element={<Details/>} />
         </Routes>
      </BrowserRouter>
    </NoteState>
    </>
  )
}

export default App
