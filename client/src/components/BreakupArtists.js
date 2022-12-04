import React, { useState } from "react"
// import Cart bc we want Cart to open as modal
import ArtistList from './ArtistList'
import Cart from './Cart'
//how to open Cart modal, but send 'item' array data from 'hire'btn onClick to CartItem or ProductList? 
import img1 from "../assets/images/alex.jpg";
import img2 from "../assets/images/alicia.jpg";
import img3 from "../assets/images/cassie.jpg";
import img4 from "../assets/images/joe.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";


function BreakupArtists() {

  //onClick function for hire buttons to choose object from ArtistList array??
  const hireAlex = (event) => {
    const [name] = useState()
    event.target.value = ArtistList.name
  }
  const hireAlicia = (event) => {
    const [name] = useState()
    event.target.value = ArtistList.name
  }
  const hireCassie = (event) => {
    const [name] = useState()
    event.target.value = ArtistList.name
  }
  const hireJoe = (event) => {
    const [name] = useState()
    event.target.value = ArtistList.name
  }
  const hireKyle = (event) => {
    const [name] = useState()
    event.target.value = ArtistList.name
  }
  const hireSarah = (event) => {
    const [name] = useState()
    event.target.value = ArtistList.name
  }

  return (
    //open cart modal if toggleCart
    <section>
      {isCartOpen && (
        <Cart onClose={toggleCart} selectedArtist={selectedArtist} />
      )}
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
            <button onClick={hireAlex(Alex)} id="hireAlex">Hire</button>
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
          <button onClick={hireAlicia(Alicia)} id="hireAlicia">Hire</button>
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
          <button onClick={hireCassie(Cassie)} id="hireCassie">Hire</button>
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
            <button onClick={hireJoe(Joe)} id="hireJoe">Hire</button>
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
            <button onClick={hireKyle(Kyle)} id="hireKyle">Hire</button>
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
            <button onClick={hireSarah(Sarah)} id="hireSarah">Hire</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreakupArtists;