import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react"
import Navbar from "./Navbar";
import Home from "./Home";
import Education from "./Education";
import Projects from "./Projects";
function App() {


  return (
<> 
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      </>     
    
  )
}

export default App
