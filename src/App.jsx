import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react"
import Navbar from "./Navbar";
import Home from "./Home";
function App() {


  return (
<> 
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </>     
    
  )
}

export default App
