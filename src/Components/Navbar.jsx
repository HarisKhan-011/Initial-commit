import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faAngleDown,  faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Navbar.css";
import { Badge, Button } from 'react-bootstrap';


import Menu from '../Assets/menu.png';

import { CartContext } from '../CardContext/CardContext';

const Navbar = ({show,setshow}) => {
const {count,handleincrease,handledecrease}=useContext(CartContext)

  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showBlogsDropdown, setShowBlogsDropdown] = useState(false);
  const [showinput,setshowinput] =useState(false)
  const handleinput=()=>{
    setshowinput(true)
  }
  const [toggle, settoggle] = useState(false);

  const handletoggle = () => {
    settoggle(!toggle);
  };

  const handleMouseEnterPages = () => setShowPagesDropdown(true);
  const handleMouseLeavePages = () => setShowPagesDropdown(false);

  const handleMouseEnterBlogs = () => setShowBlogsDropdown(true);
  const handleMouseLeaveBlogs = () => setShowBlogsDropdown(false);

  
  return (
    <>
      <nav>
        <div className="Navbar">
          <div className="Navbar1">
            <div className="left">
              <h1>E-Commerce</h1>
            </div>
            
            <button className="Toggle" onClick={handletoggle}>
              <img src={Menu} alt="menu" />
            </button>

            <div className={`mid ${toggle ? "show" : "hide"}`}>
              <ul className="ul" 
  onMouseEnter={handleMouseEnterPages} 
  onMouseLeave={handleMouseLeavePages} >
                <li className="li">
                  <Link to="/home">Home </Link>
                </li>
                
              
                <li
  className="li" 
//  
>
  <li className="li"><a href="/shop">Shop</a> </li> {/* Dropdown trigger */}
  
 
</li>




                
                {/* <li className="li">
                  <a href="#collection">Collection</a>
                </li> */}

                <li 
                  className="li" 
                  
                >
                  <Link to="/electronics">Electronics <FontAwesomeIcon icon={faAngleDown} className="icon" /></Link>
                  {showPagesDropdown && (
                    <ul className="submenu ">
                      <li><Link to="/mobile">Mobiles</Link></li>
                      <li><Link to="/accessories">Computer & Accessories</Link></li>
                      <li><Link to="/watch">Smart Watch Accessories</Link></li>
                     
                    </ul>
                  )}
                </li>
                
                <li 
                  className="li" 
                  onMouseEnter={handleMouseEnterBlogs} 
                  onMouseLeave={handleMouseLeaveBlogs}
                >
                  <Link to="/Blog">Blogs <FontAwesomeIcon icon={faAngleDown} className="icon" /></Link>
                  {showBlogsDropdown && (
                    <ul className="submenu">
                      <li><Link to="/blog1">A guide to latest trends</Link></li>
                      <li><Link to="/blog2">Five ways to lead a happy life</Link></li>
                      <li><Link to="/blog3">Tips on having a happy life</Link></li>
                    </ul>
                  )}
                </li>
                
                <li className='li'><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="right">
            <ul className="icon-list">
              <ul className="icon-list1">

              <li className="badge">
        {!showinput && (
          <FontAwesomeIcon 
            onClick={handleinput} 
            icon={faSearch} 
            className="icon" 
          />
        )}
        {showinput && (
          <input 
            type="text" 
            name="input" 
            className="search-input" 
            placeholder="Search..." 
          />
        )}
      </li>
      </ul>
                <li className='badge' onClick={()=>{setshow(true)}}><a href="/cardpage"> <FontAwesomeIcon icon={faCartShopping} className="icon" /><Badge  className="ms-2 badge-position">{count}</Badge></a></li>
                <li className='badge'><Link  to="/wishlist"><FontAwesomeIcon icon={faHeart} className="icon" /><Badge  className="ms-2 badge-position">0</Badge></Link></li>
                <Button variant="primary" href='/signin'>Sign In</Button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
