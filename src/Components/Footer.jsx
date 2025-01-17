import React from 'react';
import '../Styles/Footer.css'; // Import the external CSS

export const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-4">
            <div className="copyright mb-30">
              <div className="footer-logo">
                <h2>E-Commerce</h2>
              </div>
              <p>© 2024 E-commerce. <br /> All Rights Reserved</p>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ABOUT US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li><a href="/about">About us</a></li>
                  <li><a href="/home-fashion#/">Store location</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/home-fashion#/">Orders tracking</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-4">
            <div className="footer-widget mb-30 ml-50">
              <div className="footer-title">
                <h3>USEFUL LINKS</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li><a href="/home-fashion#/">Returns</a></li>
                  <li><a href="/home-fashion#/">Support Policy</a></li>
                  <li><a href="/home-fashion#/">Size guide</a></li>
                  <li><a href="/home-fashion#/">FAQs</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="footer-widget mb-30 ml-75">
              <div className="footer-title">
                <h3>FOLLOW US</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li><a href="//www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="//www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                  <li><a href="//www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="//www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="footer-widget mb-30 ml-70">
              <div className="footer-title">
                <h3>SUBSCRIBE</h3>
              </div>
              <div className="subscribe-style">
                <p>Get E-mail updates about our latest shop and special offers.</p>
                <div className="subscribe-form">
                  <div className="mc-form">
                    <div>
                      <input id="mc-form-email" className="email" type="email" placeholder="Enter your email address..." />
                     
                    </div>
                    <div className="clear">
                      <button className="button">SUBSCRIBE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
