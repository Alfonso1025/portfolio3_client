import { useState } from "react"
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import ChatBot from "./ChatBot";
import Navbar from "./Navbar";
import Header from "./Header";
import { Routes, Route} from 'react-router-dom'
import './styles/App.css'

function App() {

  
  return(
    <div className="app">
      <Navbar/>
      <Header/>
      <Routes>
         <Route path="/" element={<ChatBot/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/Projects" element={<Projects/>}/>
         <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
   
  ) 
}

export default App;
