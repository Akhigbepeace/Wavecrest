import React from 'react'
import { Link } from 'react-router-dom'

const DiscoverHospitality = () => {
  return (
    <div id="discover-hospitality">
      <div className="brief-desc">
        <h1>NIGERIAN'S PREMIERE HOSPITALITY MONOTECHNIC</h1>
        <p>
          Wavecrest College of Hospitality is consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <Link to="#!">APPLY NOW</Link>
      </div>
      <div className="discover-pics">
        <div className="first-pic">
          <img src="assets/Images/workbench.jpg" alt="workbench" />
        </div>

        <div className="discover">
          <h1>Discover Hospitality</h1>
        </div>

        <div>
          <img src="assets/Images/img_ny.jpg" alt="img_ny" />
        </div>

        <div className="last-pic">
          <img src="assets/Images/coffee.jpg" alt="coffee" />
        </div>
      </div>
    </div>
  );
}

export default DiscoverHospitality