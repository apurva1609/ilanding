// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Components/Navbar';
// import Navbar from "./Components/Navbar";
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
// import ILanding from "./Assets/Css/ILanding.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
import MyNavbar from './Components/MyNavbar';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <MyNavbar/>
        <Hero/>
          <Routes>
            {/* <Route path='/Home' element={<Hero/>}/> */}
            <Route path='/Pricing' element={<Pricing/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>
        <Footer/>
     </BrowserRouter>
     {/* <Footer/> */}
     
    </>
   
  );
}

export default App;
