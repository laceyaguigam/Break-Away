import React from "react";


import img1 from "../assets/images/alex.jpg";
import img3 from "../assets/images/cassie.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";
import img7 from "../assets/images/breakaway-logo.png";

function ProfilePage() {
  return (
   <div>
  <div className="split left">
    <div className="centered">
      <img src="img_avatar2.png" alt="Avatar woman" />
      <h2>Jane Flex</h2>
      <p>Some text.</p>
    </div>
  </div>
  <div className="split right">
    <div className="centered">

    <section>  
    <div class="row-breakup">
        <div class="column-breakup">
          <img
            src={img1}
            alt="photograph of Sarah the breakup artist"
            style={{ width: "75%" }}
          />
          <h1>Alex</h1>
          <p class="title">(insert info)</p>
          <p>(insert info)</p>
          <p>
            <button>Hire</button>
          </p>
        </div>

        <div class="column-breakup">
          <img
            src={img3}
            alt="photograph of Sarah the breakup artist"
            style={{ width: "60%" }}
          />
          <h1>Cassie</h1>
          <p class="title">(insert info)</p>
          <p>(insert info)</p>
          <p>
            <button>Hire</button>
          </p>
        </div>

        <div class="column-breakup">
          <img
            src={img5}
            alt="photograph of Sarah the breakup artist"
            style={{ width: "60%" }}
          />
          <h1>Kyle</h1>
          <p class="title">(insert info)</p>
          <p>(insert info)</p>
          <p>
            <button>Hire</button>
          </p>
        </div>

        <div class="column-breakup">
          <img
            src={img6}
            alt="photograph of Sarah the breakup artist"
            style={{ width: "60%" }}
          />
          <h1>Sarah</h1>
          <p class="title">(insert info)</p>
          <p>(insert info)</p>
          <p>
            <button>Hire</button>
          </p>
        </div>
      </div>
    </section>

    </div>
  </div>
</div>


  );
}
export default ProfilePage;



