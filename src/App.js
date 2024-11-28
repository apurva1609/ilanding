// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';
// import ILanding from "./Assets/Css/ILanding.css";
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
      {/* <ILanding/> */}
       <Pricing/>
    <Contact />
     {/* <BrowserRouter>
        <Routes>
          <Route path="/Contact" elament={<Contact/>}/>
          <Route path='/Pricing' element={<Pricing/>}/>
        </Routes>
     </BrowserRouter> */}
     
    </>
   
  );
}

export default App;
