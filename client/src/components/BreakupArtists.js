import React from "react";
import { HIRE_PRODUCT } from '../utils/mutations';
import { hireProduct } from '../../../server/schemas/resolvers';
import img1 from "../assets/images/alex.jpg";
import img3 from "../assets/images/cassie.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";

import { ImStarEmpty, ImStarFull } from "react-icons/im"




function BreakupArtists() {
  return (
    <div>
      <h2 class="section-title">Meet The Breakup Artists</h2>
      <div class="row-breakup">
        <div class="column-breakup">
          <img
            src={img1}
            alt="photograph of Sarah the breakup artist"
            style={{ width: "75%" }}
          />
          <h3>Alex</h3>
          <p class="title">Rating:
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarEmpty />
            <ImStarEmpty /></p>
          <dl>
            <p class="p1"><dt>Specialties: </dt></p>
            <dd> -Phone Call</dd>
            <dd>-FB Message </dd>
            <dd> -Flowers</dd>
          </dl>
          <p>
            <button onClick={hireProduct()} id="basic">
              Hire
            </button>
          </p>
        </div>

        <div class="column-breakup">
          <img
            src={img3}
            alt="photograph of Sarah the breakup artist"
            style={{ width: "60%" }}
          />
          <h3>Cassie</h3>
          <p class="title">Rating:
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarEmpty /></p>
          <dl>
            <p class="p1"><dt>Specialties: </dt></p>
            <dd> -Acapella</dd>
            <dd>-Hand-written letter </dd>
            <dd> -Playlist</dd>
          </dl>
          <p>
            <button onClick={hireProduct()} id="basic">
              Hire
            </button>
          </p>
        </div>

        <div class="column-breakup">
          <img
            src={img5}
            alt="photograph of Sarah the breakup artist"
            style={{ width: "60%" }}
          />
          <h3>Kyle</h3>
          <p class="title">Rating:
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull /></p>
          <dl>
            <p class="p1"><dt>Specialties: </dt></p>
            <dd> -Acapella</dd>
            <dd>-Chocolate </dd>
            <dd> -Email</dd>
          </dl>
          <p>
            <button onClick={hireProduct()} id="basic">
              Hire
            </button>
          </p>
        </div>

        <div class="column-breakup">
          <img
            src={img6}
            alt="photograph of Sarah the breakup artist"
            style={{ width: "60%" }}
          />
          <h3>Sarah</h3>
          <p class="title">Rating:
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarEmpty /></p>
          <dl>
            <p class="p1"><dt>Specialties: </dt></p>
            <dd> -Flowers</dd>
            <dd>-Hand-written letter </dd>
            <dd> -Playlist</dd>
          </dl>
          <p>
            <button onClick={hireProduct()} id="basic">
              Hire
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BreakupArtists;
