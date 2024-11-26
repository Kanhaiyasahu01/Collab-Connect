import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard/Dashboard"
import Messages from "./components/Messages"
import Mates from "./components/Mates/Mates"
import Faqs from "./components/Faqs"
import AboutUs from "./components/AboutUs"
import Competition from "./components/competition/Competition"
import ViewProject from "./components/Projects/ViewProject"
function App() {

  return (
 <main className="font-roboto">
  <nav>
    <Navbar />
    {/* <Home /> */}

    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/dashboard/messages" element={<Messages />} />
    <Route path="/dashboard/mates" element={<Mates />} />
    <Route path="/dashboard/competition" element={<Competition />} />
    <Route path="/faqs" element={<Faqs />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/dashboard/project/:id" element={<ViewProject />} />


    </Routes>
  </nav>
    
 </main>
  )
}

export default App
