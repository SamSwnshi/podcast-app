
import './App.css'
import Home from './component/Home/Home'
import Project from './component/Project/Project'
import Signup from './component/Signup/Signup';
import Upload from './component/Upload/Upload';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  )
}

export default App
