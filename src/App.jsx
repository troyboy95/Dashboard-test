import React from 'react'
import './index.css'
import Sidebar from './Components/Sidebar'
import Home from './Components/MainHome'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/staffing" element={<Home />} />
        <Route path="/messages" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App