import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div id="blog">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
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
            <img src="assets/Images/coffee.jpg" alt="coffee" />
            <div>
              <h1>Founder's Day</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                odit aperiam officiis repudiandae quo ipsa, accusamus omnis
                quaerat? Nulla laborum ab est a expedita hic doloribus modi
                magni fuga asperiores.
              </p>
              <p className="date">July 24th, 2022</p>
              <Link to="#!">Apply Now</Link>
            </div>
          </div>

          <div className="item">
            <img src="./Images/img_ny.jpg" alt="img_ny"></img>
            <div>
              <h1>Founder's Day</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                odit aperiam officiis repudiandae quo ipsa, accusamus omnis
                quaerat? Nulla laborum ab est a expedita hic doloribus modi
                magni fuga asperiores.
              </p>
              <p className="date">July 24th, 2022</p>
              <a href="#">Apply Now</a>
            </div>
          </div>

          <div className="item">
            <img src="./Images/workbench.jpg" alt="workbench"></img>
            <div>
              <h1>Founder's Day</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                odit aperiam officiis repudiandae quo ipsa, accusamus omnis
                quaerat? Nulla laborum ab est a expedita hic doloribus modi
                magni fuga asperiores.
              </p>
              <p className="date">July 24th, 2022</p>
              <a href="#">Apply Now</a>
            </div>
          </div>
        </div>

        {/* Left and right controls */}
        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Blog;
