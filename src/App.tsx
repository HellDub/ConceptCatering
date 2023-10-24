import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Food from "./components/Food/Food";
import Packs from "./components/Packs/Packs";
import Footer from "./components/Footer/Footer";
import { Container } from '@chakra-ui/react'
import Plane from './assets/Airplane_silhouette.svg'
function App() {


  return (
    <>


    <BrowserRouter >
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/food" element={<Food />} />
    <Route path="/packs" element={<Packs/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>


    </>
  )
}

export default App
