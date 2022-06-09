import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-contact">
        <img src="/assets/Images/WC-LOGO-july.png" alt="logo"></img>

        <div className="contact">
          <p>+234 909 685 6606</p>
          <p>info@wavecrest.edu.ng</p>
        </div>

        <div className="footer-links">
          <Link
            to="https://www.linkedin.com/company/wavecrest-college-of-hospitality/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/Images/linked in logo.png" alt="linkedin"></img>
          </Link>
          <Link
            to="https://web.facebook.com/WavecrestCollegeLagos/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/Images/facebook logo.png" alt="facebook"></img>
          </Link>
          <Link
            to="https://twitter.com/WaveColl"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/Images/twitter.png" alt="twitter"></img>
          </Link>
          <Link
            to="https://api.whatsapp.com/send/?phone=09155003700&text&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/Images/whatsapp logo.png" alt="whatsapp"></img>
          </Link>
          <Link
            to="http://instagram.com/wavecrestcollege"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/Images/Instagram.png" alt="instagram"></img>
          </Link>
        </div>
      </div>

      <div className="quick-links">
        <ul>
          <li>
            <Link to="#!">ABOUT US</Link>
          </li>
          <li>
            <Link to="#!">ADMISSION</Link>
          </li>
          <li>
            <Link to="#!">OPUS DEI</Link>
          </li>
          <li>
            <Link to="#!">CONTACT</Link>
          </li>
          <li>
            <Link to="#!">ACADEMICS</Link>
          </li>
          <li>
            <Link to="#!">WOMEN'S BOARD</Link>
          </li>
          <li>
            <Link to="#!">FAQs</Link>
          </li>
          <li>
            <Link to="#!">ALUMNI</Link>
          </li>
          <li>
            <Link to="#!">CARRER</Link>
          </li>
          <li>
            <Link to="#!">BLOG</Link>
          </li>
          <li>
            <Link to="#!">DOWNLOADS</Link>
          </li>
          <li>
            <Link to="#!">SUPPORT US</Link>
          </li>
        </ul>
      </div>

      <div className="newsletter">
        <h1>Suscribe to our Newsletter</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos tenetur
          voluptate, similique earum obcaecati placeat.
        </p>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Footer;
