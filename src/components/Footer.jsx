import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="logo">
              <a href="#home"><img src="assets/logo.png" alt="logo" /></a>
            </div>
            <p className="section__description">
              Discover a world of comfort, luxury, and adventure as you explore
              our curated selection of hotels, making every moment of your getaway
              truly extraordinary.
            </p>
            <a href="room.html">
                <Link to="/book">

              <button className="btn nav__btn">Book Now</button>
                </Link>
            </a>
          </div>
          <div className="footer__col">
            <h4>QUICK LINKS</h4>
            <ul className="footer__links">
              <li><a href="#">Browse Destinations</a></li>
              <li><a href="#">Special Offers & Packages</a></li>
              <li><a href="#">Customer Reviews & Ratings</a></li>
              <li><a href="#">Travel Tips & Guides</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>OUR SERVICES</h4>
            <ul className="footer__links">
              <li><a href="#">Concierge Assistance</a></li>
              <li><a href="#">Flexible Booking Options</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>CONTACT US</h4>
            <ul className="footer__links">
              <li><a href="#">houserentservice@info.com</a></li>
            </ul>
            <div className="footer__socials">
              <a href="#"><img src="assets/facebook.png" alt="facebook" /></a>
              <a href="#"><img src="assets/instagram.png" alt="instagram" /></a>
              <a href="#"><img src="assets/youtube.png" alt="youtube" /></a>
              <a href="#"><img src="assets/twitter.png" alt="twitter" /></a>
            </div>
          </div>
        </div>
        <div className="footer__bar">
        </div>
      </footer>
    </>
  )
}

export default Footer
