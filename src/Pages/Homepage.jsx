import React from 'react';
import Button from '@mui/material/Button'; // Import Button component
import fashion from "../Assets/fashion.png"
import "../Styles/Homepage.css";
import Section1 from './Section1';
import Section2 from './Section2';
import  Section3  from './Section3';
import  Carousel  from '../Pages/Carusel';

const Homepage = () => {
  return (
    <>
      <div className='homepage'>
        <div className='section-left'>
        <div className="text-section">
  <p>Smart Products</p>
  <h1>Winter Offer 2024 Collection</h1>
  <div className="button">
    <Button className="home-button">Shop Now</Button>
  </div>
</div>
        </div>
        <div className='section-right'>
        </div>
        <div className='image' >
          <img src={fashion} alt='wrong'/>
        </div>
      </div>
    
      <Section1 />
      <Carousel />
      <Section2 />
      <Section3 />
    </>
    
  );
};

export default Homepage;
