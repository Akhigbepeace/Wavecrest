import React from "react";

const Showcase = () => {
  return (
    <div id="showcase">
      <div className="showcase-video">
        <video
          src="assets/Images/Study at Wavecrest College of Hospitality, Lagos.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div>
          <p>STUDY IN NIGERIAN'S </p>
          <p>PREMIERE HOSPITALITY MONOTECHNIC</p>
        </div>
      </div>

      <div className="showcase-gallery">
        <div className="image-caption">
          <img
            src="assets/Images/Wavecrest Images 1.jpeg"
            alt="Wavecrest Images 1"
          />
        </div>
        <div className="image-caption">
          <img
            src="assets/Images/Wavecrest Images 2.jpeg"
            alt="Wavecrest Images 2"
          />
        </div>
        <div className="image-caption">
          <img
            src="assets/Images/Wavecrest Images 3.jpg"
            alt="Wavecrest Images 3"
          />
        </div>
        <div className="image-caption">
          <img
            src="assets/Images/Wavecrest Images 4.jpg"
            alt="Wavecrest Images 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
