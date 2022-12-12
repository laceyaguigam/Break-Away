import React from "react";

import img1 from "../assets/images/alex2.jpg";
import img3 from "../assets/images/cassie.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";

import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import {
  GiFlowers,
  GiChocolateBar,
  GiNotebook,
  GiMusicalNotes,
} from "react-icons/gi";
import { TbPlaylist } from "react-icons/tb";

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
          <p class="title">
            Rating:
            <label className="stars">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarEmpty />
              <ImStarEmpty />
            </label>
          </p>
          <dl>
            <p class="p1">
              <dt>Specialties: </dt>
            </p>
            <dd>
              <BsFillTelephoneFill />
              Phone Call
            </dd>
            <dd>
              <FaFacebookMessenger />
              FB Message
            </dd>
            <dd>
              <GiFlowers />
              Flowers
            </dd>
          </dl>
          {/* <p>
            <button>Hire</button>
          </p> */}
        </div>

        <div class="column-breakup">
          <img
            src={img3}
            alt="photograph of Sarah the breakup artist"
            style={{ width: "60%" }}
          />
          <h3>Cassie</h3>
          <p class="title">
            Rating:
            <label className="stars">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarEmpty />
            </label>
          </p>
          <dl>
            <p class="p1">
              <dt>Specialties: </dt>
            </p>
            <dd>
              <GiMusicalNotes />
              Acapella
            </dd>
            <dd>
              <GiNotebook />
              Hand-written letter
            </dd>
            <dd>
              <TbPlaylist />
              Playlist
            </dd>
          </dl>
          {/* <p>
            <button>Hire</button>
          </p> */}
        </div>

        <div class="column-breakup">
          <img
            src={img5}
            alt="photograph of Sarah the breakup artist"
            style={{ width: "60%" }}
          />
          <h3>Kyle</h3>
          <p class="title">
            Rating:
            <label className="stars">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
            </label>
          </p>
          <dl>
            <p class="p1">
              <dt>Specialties: </dt>
            </p>
            <dd>
              <GiMusicalNotes />
              Acapella
            </dd>
            <dd>
              <GiChocolateBar />
              Chocolates
            </dd>
            <dd>
              <MdEmail />
              Email
            </dd>
          </dl>
          {/* <p>
            <button>Hire</button>
          </p> */}
        </div>

        <div class="column-breakup">
          <img
            src={img6}
            alt="photograph of Sarah the breakup artist"
            style={{ width: "60%" }}
          />
          <h3>Sarah</h3>
          <p class="title">
            Rating:
            <label className="stars">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarEmpty />
            </label>
          </p>
          <dl>
            <p class="p1">
              <dt>Specialties: </dt>
            </p>
            <dd>
              <GiFlowers />
              Flowers
            </dd>
            <dd>
              <GiNotebook />
              Hand-written letter{" "}
            </dd>
            <dd>
              <TbPlaylist />
              Playlist
            </dd>
          </dl>
          {/* <p>
            <button>Hire</button>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default BreakupArtists;
