import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
// import About from './Components/About';
// import Features from './Components/Features';
import Services from './Components/Services';
import ServiceDetails from "./Components/ServiceDetails";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MyNavbar from './Components/MyNavbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar/>
        {/* <Hero/> */}
          <Routes>
            <Route path='/Hero' element={<Hero/>}/>
            {/* <Route path='/About' element={<About/>}/> */}
            {/* <Route path='/Features' element={<Features/>}/> */}
            <Route path='/Services' element={<Services/>}/>
            <Route path='/ServiceDetails' element={<ServiceDetails/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        <Footer/>
     </BrowserRouter>
    
     
    </>
   
  );
}

export default App;
