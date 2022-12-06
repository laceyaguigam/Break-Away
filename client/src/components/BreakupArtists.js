import React from "react";

import img1 from "../assets/images/alex.jpg";
// import img2 from "../assets/images/alicia.jpg";
import img3 from "../assets/images/cassie.jpg";
// import img4 from "../assets/images/joe.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";
 
function BreakupArtists() {
  return (
    <div>
      <h2 class="section-title">Meet The Breakup Artists</h2>
      <div class="row-breakup">
        <div class="column-breakup">
          <img
            src={img1}
            alt="Alex the breakup artist"
            style={{ width: "75%" }}
          />
          <h3>Alex</h3>
          <p class="title">Why Alex?</p>
          <p>Describe specialties, qualifications, personality</p>
        </div>

        {/* <div class="column-breakup">
          <img
            src={img2}
            alt="photograph of Sarah the breakup artist"
            // style={{ width: "60%" }}
          />
          <h1>Alicia</h1>
          <p class="title">(insert info)</p>
          <p>(insert info)</p>
          <p>
            <button>Hire</button>
          </p>
        </div> */}

        <div class="column-breakup">
          <img
            src={img3}
            alt="Cassie the breakup artist"
            style={{ width: "60%" }}
          />
          <h3>Cassie</h3>
          <p class="title">Why Cassie?</p>
          <p>Describe specialties, qualifications, personality</p>
        </div>

        {/* <div class="column-breakup">
          <img
            src={img4}
            alt="photograph of Sarah the breakup artist"
            // style={{ width: "20%" }}
          />
          <h1>Joe</h1>
          <p class="title">(insert info)</p>
          <p>(insert info)</p>
          <p>
            <button>Hire</button>
          </p>
        </div> */}

        <div class="column-breakup">
          <img
            src={img5}
            alt="Kyle the breakup artist"
            style={{ width: "60%" }}
          />
          <h3>Kyle</h3>
          <p class="title">Why Kyle?</p>
          <p>Describe specialties, qualifications, personality</p>
        </div>

        <div class="column-breakup">
          <img
            src={img6}
            alt="Sarah the breakup artist"
            style={{ width: "60%" }}
          />
          <h3>Sarah</h3>
          <p class="title">Why Sarah?</p>
          <p>Describe specialties, qualifications, personality</p>
        </div>
      </div>
    </div>
  );
}

export default BreakupArtists;
