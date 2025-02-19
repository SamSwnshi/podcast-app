
import './App.css'
import Home from './component/Home/Home'
import Project from './component/Project/Project'
import Signup from './component/Signup/Signup';
import Upload from './component/Upload/Upload';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Userauth from './auth/Userauth';
import { UserProvider } from './context/user.context';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/projects" element={
            // <Userauth>
            //   <Project />
            // </Userauth>
            <Project/>
          } />
          <Route path="/upload" element={
            // <Userauth>
            //   <Upload />
            // </Userauth>
            <Upload/>
          } />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
