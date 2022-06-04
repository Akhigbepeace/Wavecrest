import React from 'react'

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
          <a href="https://www.linkedin.com/company/wavecrest-college-of-hospitality/" target='_blank' rel="noreferrer"><img src="/assets/Images/linkedin.png" alt="linkedin"></img></a>
          <a href="https://web.facebook.com/WavecrestCollegeLagos/" target='_blank' rel="noreferrer"><img src="/assets/Images/facebook.png" alt="facebook"></img></a>
          <a href="https://twitter.com/WaveColl" target='_blank' rel="noreferrer"><img src="/assets/Images/twitter.png" alt="twitter"></img></a>
          <a href="https://api.whatsapp.com/send/?phone=09155003700&text&app_absent=0" target='_blank' rel="noreferrer"><img src="/assets/Images/whatsapp.jpg" alt="whatsapp"></img></a>
          <a href="http://instagram.com/wavecrestcollege" target='_blank' rel="noreferrer"><img src="/assets/Images/instagram.jpg" alt="instagram" ></img></a>
        </div>
      </div>

      <div className="quick-links">
        <ul>
          <li><a href="#!">ABOUT US</a></li>
          <li><a href="#!">ADMISSION</a></li>
          <li><a href="#!">OPUS DEI</a></li>
          <li><a href="#!">CONTACT</a></li>
          <li><a href="#!">ACADEMICS</a></li>
          <li><a href="#!">WOMEN'S BOARD</a></li>
          <li><a href="#!">FAQs</a></li>
          <li><a href="#!">ALUMNI</a></li>
          <li><a href="#!">CARRER</a></li>
          <li><a href="#!">BLOG</a></li>
          <li><a href="#!">DOWNLOADS</a></li>
          <li><a href="#!">SUPPORT US</a></li>
        </ul>
      </div>
      
      <div className="newsletter">
        <h1>Suscribe to our Newsletter</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos tenetur voluptate, similique earum obcaecati placeat.</p>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default Footer