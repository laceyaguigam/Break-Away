import React from "react";

import img1 from "../assets/images/alex.jpg";
import img2 from "../assets/images/alicia.jpg";
import img3 from "../assets/images/cassie.jpg";
import img4 from "../assets/images/joe.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";

function BreakupArtists() {
  return (
    <section id="your-breakup-artists">
      <div class="flex-row">
        <h2 class="section-title">Meet The Breakup Artists</h2>
      </div>
      <div class="artists">
        <article class="artist">
          <img src={img1} alt="" />
          <div class="artist-bio">
            <h3 class="artist-name">Alex</h3>
            <p>Stuff goes here!</p>
            <button>Hire</button>
          </div>
        </article>

        <article class="artist">
          <img src={img2} alt="" />
          <div class="artist-bio">
            <h3 class="artist-name">Alicia</h3>
            <p>Stuff goes here!</p>
            <button>Hire</button>
          </div>
        </article>

        <article class="artist">
          <img src={img3} alt="" />
          <div class="artist-bio">
            <h3 class="artist-name">Cassie</h3>
            <p>Stuff goes here!</p>
            <button>Hire</button>
          </div>
        </article>

        <br />
        <br />

        <article class="artist">
          <img src={img4} alt="" />
          <div class="artist-bio">
            <h3 class="artist-name">Joe</h3>
            <p>Stuff goes here!</p>
            <button>Hire</button>
          </div>
        </article>

        <article class="artist">
          <img src={img5} alt="" />
          <div class="artist-bio">
            <h3 class="artist-name">Kyle</h3>
            <p>Stuff goes here!</p>
            <button>Hire</button>
          </div>
        </article>

        <article class="artist">
          <img src={img6} alt="" />
          <div class="artist-bio">
            <h3 class="artist-name">Sarah</h3>
            <p>Stuff goes here!</p>
            <button>Hire</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BreakupArtists;
