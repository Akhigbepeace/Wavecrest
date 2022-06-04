import React from 'react'

const Showcase = () => {
  return (
    <div id="showcase">
      <div className ="showcase-video">
        <div className ="caption-video">
          <video src="assets/Images/Study at Wavecrest College of Hospitality, Lagos.mp4" height="448px" width="100%" autoPlay loop muted>
          </video>
        </div>
        <p>STUDY IN NIGERIAN'S PREMIERE HOSPITALITY MONOTECHNIC</p>
      </div>

      <div className ="showcase-gallery">
        <div className ="image-caption">
          <img src="assets/Images/Wavecrest Images 1.jpeg" alt="Wavecrest Images 1" />
          <p>PREPARE CONTINENTAL DISHES</p>
        </div>
        <div className ="image-caption">
          <img src="assets/Images/Wavecrest Images 2.jpeg" alt="Wavecrest Images 2" />
          <p>WE'VE ALSO GOT THE SWAGS</p>
        </div>
        <div className ="image-caption">
          <img src="assets/Images/Wavecrest Images 3.jpg" alt="Wavecrest Images 3" />
          <p>CONDUCIVE LEARNING ENVIRONMENT</p>
        </div>
        <div className ="image-caption">
          <img src="assets/Images/Wavecrest Images 4.jpg" alt="Wavecrest Images 4" />
          <p>HAND'S-ON PRACTICAL APPROACH</p>
        </div>
      </div>
    </div>
  )
}

export default Showcase