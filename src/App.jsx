import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
