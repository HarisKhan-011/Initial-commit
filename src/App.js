import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Approutes } from './Routes/Approutes';
import Navbar from './Components/Navbar';
import { Footer } from './Components/Footer';
import { CartProvider } from './CardContext/CardContext'; // Ensure correct path
// import Cardpage from './Pages/Cardpage';

function App() {
  const [show,setShow]=useState(false)
  return (

    <CartProvider >
      <BrowserRouter>
      <Navbar show={show} setshow={setShow} />
        <Approutes />
        <Footer />
       
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
