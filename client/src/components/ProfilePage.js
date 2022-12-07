import React from "react";

import img1 from "../assets/images/alex.jpg";
import img3 from "../assets/images/cassie.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";
import img7 from "../assets/images/liz.jpg";

import {ImStarEmpty, ImStarFull} from "react-icons/im"


function ProfilePage() {
  return (
    <div>
      <div className="split left">
        <div className="centered">
          <h1>Welcome!</h1>
          <br></br>
          <img src={img7} alt="of a woman named Liz" />
          <h2>Liz Smith</h2>
          <p>7.4.90</p>
          <p>Sacramento, CA</p>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <section>
            <div class="row-breakup2">
              <div class="column-breakup2">
                <img
                  src={img1}
                  alt="photograph of Sarah the breakup artist"
                  style={{ width: "75%" }}
                />
                <h1>Alex</h1>
                <p class="title">Rating: 
          <ImStarFull/>
          <ImStarFull/>
          <ImStarFull/>
          <ImStarEmpty/>
          <ImStarEmpty/></p>
          <dl>
          <p class="p1"><dt>Specialties: </dt></p>
              <dd> -Phone Call</dd>
                <dd>-FB Message </dd>
                  <dd> -Flowers</dd>
                  </dl>
              </div>

              <div class="column-breakup2">
                <img
                  src={img3}
                  alt="photograph of Sarah the breakup artist"
                  style={{ width: "60%" }}
                />
                <h1>Cassie</h1>
                <p class="title">Rating: 
          <ImStarFull/>
          <ImStarFull/>
          <ImStarFull/>
          <ImStarFull/>
          <ImStarEmpty/></p>
          <dl>
          <p class="p1"><dt>Specialties: </dt></p>
              <dd> Acapella</dd>
                <dd>Hand-written letter </dd>
                  <dd> Playlist</dd>
                    </dl>
              </div>

              <div class="column-breakup2">
                <img
                  src={img5}
                  alt="photograph of Sarah the breakup artist"
                  style={{ width: "60%" }}
                />
                <h1>Kyle</h1>
                <p class="title">Rating: 
          <ImStarFull/>
          <ImStarFull/>
          <ImStarFull/>
          <ImStarFull/>
          <ImStarFull/></p>
          <dl>
          <p class="p1"><dt>Specialties: </dt></p>
              <dd> Acapella</dd>
                <dd>Chocolate </dd>
                  <dd> Email</dd>
                  </dl>
                <p>
                  <button>Hire</button>
                  </p>
              </div>

              <div class="column-breakup2">
                <img
                  src={img6}
                  alt="photograph of Sarah the breakup artist"
                  style={{ width: "60%" }}
                />
                <h1>Sarah</h1>
                <p class="title">Rating: 
          <ImStarFull/>
          <ImStarFull/>
          <ImStarFull/>
          <ImStarFull/>
          <ImStarEmpty/></p>
          <dl>
          <p class="p1"><dt>Specialties: </dt></p>
              <dd> Flowers</dd>
                <dd>Hand-written letter </dd>
                  <dd> Playlist</dd>
                    </dl>
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
