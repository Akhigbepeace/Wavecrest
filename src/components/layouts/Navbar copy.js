import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="header-logo">
        <a href="#!" rel="noreferrer">
          <img src="/assets/Images/WC-LOGO-july.png" alt="logo"></img>
        </a>

        <div className="header-links">
          <a href="#!" rel="noreferrer">
            <img
              src="/assets/Images/magnifying glass.png"
              alt="magnifying glass"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/company/wavecrest-college-of-hospitality/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/Images/linked in logo.png" alt="linkedin"></img>
          </a>
          <a
            href="https://web.facebook.com/WavecrestCollegeLagos/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/Images/facebook logo.png" alt="facebook"></img>
          </a>
          <a
            href="https://twitter.com/WaveColl"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/Images/twitter.png" alt="twitter"></img>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=09155003700&text&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/Images/whatsapp logo.png" alt="whatsapp"></img>
          </a>
          <a
            href="http://instagram.com/wavecrestcollege"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/Images/Instagram.png" alt="instagram"></img>
          </a>
        </div>
      </div>

      <nav className="header-nav">
        <ul>
          <li className="nav-links">
            <a href="#!">Home</a>
            <div className="bar"></div>
            <div className="bar-list"></div>
          </li>

          <li className="nav-links">
            <a href="#!">About Us</a>
            <div className="bar-list">
            <div className="bar"></div>
              <ul className="nested-lists">
                <li>
                  <a href="#!">Profile</a>
                </li>
                <li>
                  <a href="#!">Milestone</a>
                </li>
                <li>
                  <a href="#!">Our Team</a>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-links">
            <a href="#!!">Admission</a>
            <div className="bar"></div>
            <div className="bar-list">
              <ul className="nested-lists">
                <li>
                  <a href="#!">Apply Online</a>
                </li>
                <li>
                  <a href="#!">Admission Requirements</a>
                </li>
                <li>
                  <a href="#!">Tuition and Scholarships</a>
                </li>
                <li>
                  <a href="#!">Hostel</a>
                </li>
                <li>
                  <a href="#!">FAQs</a>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-links">
            <a href="#!">Academics</a>
            <div className="bar"></div>
            <div className="bar-list">
              <ul className="nested-lists">
                <li>
                  <a href="#!">Programmes</a>
                </li>
                <li>
                  <a href="#!">Training</a>
                </li>
                <li>
                  <a href="#!">Job Placement</a>
                </li>
                <li>
                  <a href="#!">Internship</a>
                </li>
                <li>
                  <a href="#!">NYSC</a>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-links">
            <a href="#!">Blog</a>

            <div className="bar"></div>
            <div className="bar-list"></div>
          </li>
          <li className="nav-links">
            <a href="#!">Alumni</a>
            <div className="bar"></div>
            <div className="bar-list"></div>
          </li>

          <li className="nav-links">
            <a href="#!">Contact Us</a>
            <div className="bar"></div>
            <div className="bar-list"></div>
          </li>
        </ul>S

        <div className="nav-button">
          <a href="#!">SUPPORT US</a>
          <a href="#!">APPLY NOW</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
