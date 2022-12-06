import React from "react";

import BurningPicture from "../assets/images/burningpicture.jpg";
import BurnBaby from "../assets/images/burnbaby.jpg";
import BrokenHeart from "../assets/images/brokenheart.jpg";
import RockPic from "../assets/images/aloneonrock.jpg";

function HomePage() {
  return (
 

    <section>
      <div class="flex-row">
        <h1>Ready to break-up but don't know how?</h1>
      </div>
      <br />
      <div class="row-home">
        <div class="column-home">
          <img
            src={BurningPicture}
            alt="placeholder text"
            style={{ width: "75%" }}
          />
          <p>
            Do you want the breakup to be respestful?
            <br />
            <br />
            We got you!
          </p>
        </div>

        <div class="column-home">
          <img src={BurnBaby} alt="placeholder text" style={{ width: "75%" }} />
          <p>
            Want to have a sense of rage, betrayal and/or disdain?
            <br />
            <br />
            They can do that too.
          </p>
        </div>

        <div class="column-home">
          <img
            src={BrokenHeart}
            alt="placeholder text"
            style={{ width: "75%" }}
          />
          <p>
            Do you just want to take a break without closing the door forever?
            <br />
            <br />
            Ding, ding we can do that too!
          </p>
        </div>

        <div class="column-home">
          <img src={RockPic} alt="placeholder text" style={{ width: "75%" }} />
          <p>
            How ever you do want to do it, we're here for you!
            <br />
            <br />
            Checkout our pricing page.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
