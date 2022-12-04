import React, { useState } from "react"
import Cart from './Cart'

import img1 from "../assets/images/alex.jpg";
import img2 from "../assets/images/alicia.jpg";
import img3 from "../assets/images/cassie.jpg";
import img4 from "../assets/images/joe.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";

//create array of brekaup artist object with name and price attributes, send to Cart
const ArtistList = ({ category }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState()

  const [artists] = useState([
    {
      name: 'Alex',
      price: '50'
    },
    {
      name: 'Alicia',
      price: '60'
    },
    {
      name: 'Cassie',
      price: '70'
    },
    {
      name: 'Joe',
      price: '80'
    },
    {
      name: 'Kyle',
      price: '90'
    },
    {
      name: 'Sarah',
      price: '100'
    }

  ])

}
function BreakupArtists() {
  return (
    <section>
      <h2 className="section-title">Meet The Breakup Artists</h2>
      <div className="row">
        <div className="column">
          <img
            src={img1}
            alt="Alex the breakup artist"
            // style={{ width: "20%" }}
          />
          <h1>Alex</h1>
          <p className="title">(insert info)</p>
          <p>(insert info)</p>
          <p>
            <button id="hireAlex">Hire</button>
          </p>
        </div>

        <div className="column">
          <img
            src={img2}
            alt="Alicia the breakup artist"
            // style={{ width: "20%" }}
          />
          <h1>Alicia</h1>
          <p className="title">(insert info)</p>
          <p>(insert info)</p>
          <p>
            <button id="hireAlicia">Hire</button>
          </p>
        </div>

        <div className="column">
          <img
            src={img3}
            alt="Cassie the breakup artist"
            // style={{ width: "20%" }}
          />
          <h1>Cassie</h1>
          <p className="title">(insert info)</p>
          <p>(insert info)</p>
          <p>
            <button id="hireCassie">Hire</button>
          </p>
        </div>

        <div className="row">
          <div className="column">
            <img
              src={img4}
              alt="Joe the breakup artist"
              // style={{ width: "20%" }}
            />
            <h1>Joe</h1>
            <p className="title">(insert info)</p>
            <p>(insert info)</p>
            <p>
              <button id="hireJoe">Hire</button>
            </p>
          </div>

          <div className="column">
            <img
              src={img5}
              alt="Kyle the breakup artist"
              // style={{ width: "20%" }}
            />
            <h1>Kyle</h1>
            <p className="title">(insert info)</p>
            <p>(insert info)</p>
            <p>
              <button hireKyle>Hire</button>
            </p>
          </div>

          <div className="column">
            <img
              src={img6}
              alt="Sarah the breakup artist"
              // style={{ width: "20%" }}
            />
            <h1>Sarah</h1>
            <p className="title">(insert info)</p>
            <p>(insert info)</p>
            <p>
              <button hireSarah>Hire</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreakupArtists;
