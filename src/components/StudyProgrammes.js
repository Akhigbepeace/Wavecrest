import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudyProgrammes = () => {
  const objArr = [
    {
      linkContent: "HND IN HOSPITALITY MANAGEMENT",
      imageSrc: "/assets/Images/Wavecrest Images 1.jpeg",
      current: false,
      captionHeading: "ACQUIRE AN HND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Full Time",
      captionButton: "Apply Now",
    },

    {
      linkContent: "ND IN HOTEL AND CATERING MANAGEMENT",
      imageSrc: "/assets/Images/Wavecrest Images 2.jpeg",
      current: false,
      captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Full Time",
      captionButton: "Apply Now",
    },
    {
      linkContent: "CERTIFICATE COURSE IN HOSPITALITY OPERATIONS",
      imageSrc: "/assets/Images/Wavecrest Images 3.jpg",
      current: true,
      captionHeading: "SPEND A GAP YEAR IN HOSPITALITY TRAINING",
      captionTime: "2 Years | Full Time",
      captionButton: "Apply Now",
    },
    {
      linkContent: "SHORT COURSES",
      imageSrc: "/assets/Images/Wavecrest Images 4.jpg",
      current: false,
      captionHeading: "BAG AN ND IN HOSPITALITY MANAGEMENT",
      captionTime: "2 Years | Part Time",
      captionButton: "Apply Now",
    },
  ];
  
  const [currentprogram, setCurrentProgram] = useState(objArr[2]);

  return (
    <div id="study-programmes">
      <div className="study-programmes">
        <h1>Study Programmes</h1>
        <div className="programmes">
          {objArr.map((programm, i) => {
            return (
              <Link
                to="#!"
                className={
                  currentprogram.linkContent === programm.linkContent
                    ? "current-program"
                    : ""
                }
                key={i}
                onClick={() => setCurrentProgram(programm)}
              >
                {programm.linkContent}
              </Link>
            );
          })}
        </div>

        <div className="programmes-caption">
          <img src={currentprogram.imageSrc} alt="coffee" />
          <div className="caption">
            <h1>{currentprogram.captionHeading}</h1>
            <p>{currentprogram.captionTime}</p>
            <button>{currentprogram.captionButton}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyProgrammes;
