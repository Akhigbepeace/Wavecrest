import React from 'react'

const StudyProgrammes = () => {
  return (
    <div id="study-programmes">
      <div className ="study-programmes">
        <h1>Study Programmes</h1>

        <div className ="programmes">
          <a href="#!">HND IN HOSPITALITY MANAGEMENT</a>
          <a href="#!">HND IN HOTEL AND CATERING MANAGEMENT</a>
          <a href="#!">CERTIFICATE COURSE IN HOSPITALITY OPERATIONS</a>
          <a href="#!">SHORT COURSES</a>
        </div>

        <div className ="programmes-caption">
          <img src="assets/Images/coffee.jpg" alt="coffee" />
          <div className ="caption">
            <h1>SPEND A GAP YEAR IN HOSPITALITY TRAINING</h1>
            <p>1 Year | Full Time</p>
            <button>APPLY NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudyProgrammes