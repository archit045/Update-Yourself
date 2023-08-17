import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Mens from './components/Mens';
import Women from './components/Women';
import Kids from './components/Kids';
import About from './components/About';






function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/mens' element={<Mens />} />
          <Route exact path='/women' element={<Women />} />
          <Route exact path="/kids" element={<Kids/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
