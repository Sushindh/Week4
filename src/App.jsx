import Web1 from "./pages/Web1.jsx"
import Home from "./pages/Home.jsx"
import Web2 from "./pages/Web2.jsx"
import Web3 from "./pages/Web3.jsx"
import Web4 from "./pages/Web4.jsx"
import Final from "./pages/Final.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Web1" element={< Web1/>} />
          <Route path="/Web2" element={<Web2 />} />
          <Route path="/Web3" element={<Web3 />} />
          <Route path="/Web4" element={<Web4 />} />
          <Route path="/Final" element={<Final />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
