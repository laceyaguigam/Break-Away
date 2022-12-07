import React from "react";

import BurningPicture from "../assets/images/burningpicture.jpg";
import BurnBaby from "../assets/images/burnbaby.jpg";
import BrokenHeart from "../assets/images/brokenheart.jpg";
import RockPic from "../assets/images/aloneonrock.jpg";

function HomePage() {
  return (
    <div>
      <div className="section-title">
        <h2>Ready to break up, but don't know how?</h2>
      </div>
      <br />
      <div className="row-home">
        <div className="column-home">
          <img
            src={BurningPicture}
            alt="placeholder text"
            style={{ width: "75%" }}
          />
          <p>
            Do you want the breakup to be respectful?
            <br />
            <br />
            We got you!
          </p>
        </div>

        <div className="column-home">
          <img src={BurnBaby} alt="placeholder text" style={{ width: "75%" }} />
          <p>
            Want to have a sense of rage, betrayal and/or disdain?
            <br />
            <br />
            They can do that too.
          </p>
        </div>

        <div className="column-home">
          <img
            src={BrokenHeart}
            alt="placeholder text"
            style={{ width: "75%" }}
          />
          <p>
            Do you just want to take a break without closing the door forever?
            <br />
            <br />
            Ding, ding! We can do that too!
          </p>
        </div>

        <div className="column-home">
          <img src={RockPic} alt="placeholder text" style={{ width: "75%" }} />
          <p>
            However you do want to do it, we're here for you!
            <br />
            <br />
            Check out our pricing page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
