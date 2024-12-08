import { useState } from 'react'
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import OneMOvieCard from './Component/Cards/OneMOvieCard'
 import AllCard from './Component/CombineDataCard/AllCard'
import Home from './Component/Home'

import SeatBooking from './Component/Cards/SeatBooking'
import Success from './Component/Succes'
import Failure from './Component/Fail'
function App() {
  let a=false

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={} /> */}
        <Route path='/movies/:id' element={<OneMOvieCard />} />
        <Route path="/book-seats" element={<SeatBooking />} />
        <Route path='/AllCard' element={<AllCard />} />
        <Route path='/success' element={a?<Success/>:<Home/>} />
        <Route path='/cancel' element={<Failure/>} />


      </Routes>

    </>
  )
}

export default App