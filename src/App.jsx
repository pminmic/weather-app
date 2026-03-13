import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import HourlyReport from "./pages/HourlyReport/HourlyReport";
import DailyReport from "./pages/DailyReport/DailyReport";
import LocalInfo from "./pages/LocalInfo/LocalInfo";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hourly-report/:code" element={<HourlyReport />} />
          <Route path="/daily-report/:code" element={<DailyReport />} />
          <Route path="/local-info/:code" element={<LocalInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
