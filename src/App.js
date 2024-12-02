// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Components/Navbar';
// import Navbar from "./Components/Navbar";
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
// import ILanding from "./Assets/Css/ILanding.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/Pricing' element={<Pricing/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>
        <Footer/>
     </BrowserRouter>
     
    </>
   
  );
}

export default App;
