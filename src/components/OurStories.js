import React from "react";

const OurStories = () => {
  return (
    <div id="our-stories">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="our-stories">
          <h1>Wavecrest</h1>
          <p>Our Stories</p>
        </div>

        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <div className="student-testimonial">
              <h1>Sara Smart</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <img src="assets/Images/coffee.jpg" alt="coffee" />
          </div>

          {/* <div className="item">
            <div>
              <h1>Jane Wilson</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit aperiam officiis repudiandae quo ipsa, accusamus omnis quaerat? Nulla laborum ab est a expedita hic doloribus modi magni fuga asperiores.</p>
            </div>
            <img src="./Images/img_ny.jpg" alt="img_ny" />
          </div> */}

          {/* <div className="item">
            <div>
              <h1>Mia Jacob</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio odit aperiam officiis repudiandae quo ipsa, accusamus omnis quaerat? Nulla laborum ab est a expedita hic doloribus modi magni fuga asperiores.</p>
            </div>
            <img src="./Images/workbench.jpg" alt="workbench" />
          </div> */}
        </div>

        {/* <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
          <Link>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        <Link> */}
      </div>
    </div>
  );
};

export default OurStories;
