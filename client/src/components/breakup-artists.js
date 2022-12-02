import React from "react";
import img1 from "../assets/images/alex.jpg";
import img2 from "../assets/images/alicia.jpg";
import img3 from "../assets/images/cassie.jpg";
import img4 from "../assets/images/joe.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";

function BreakupArtists() {
  return (
    <div>
      <div className="card">
        <img className="alex-img breakupartist-img" src={img1} alt="" />
        <h2 className="breakupartist-title">Alex</h2>
        <p className="breakupartist-description">(insert text)</p>
        <button>Hire</button>
      </div>

      <div className="card">
        <img className="alicia-img breakupartist-img" src={img2} alt="" />
        <h2 className="breakupartist-title">Alicia</h2>
        <p className="breakupartist-description">(insert text)</p>
        <button>Hire</button>
      </div>

      <div className="card">
        <img className="cassie-img breakupartist-img" src={img3} alt="" />
        <h2 className="breakupartist-title">Cassie</h2>
        <p className="breakupartist-description">(insert text)</p>
        <button>Hire</button>
      </div>

      <br></br>

      <div className="card">
        <img className="joe-img breakupartist-img" src={img4} alt="" />
        <h2 className="breakupartist-title">Joe</h2>
        <p className="breakupartist-description">(insert text)</p>
        <button>Hire</button>
      </div>

      <div className="card">
        <img className="kyle-img breakupartist-img" src={img5} alt="" />
        <h2 className="breakupartist-title">Kyle</h2>
        <p className="breakupartist-description">(insert text)</p>
        <button>Hire</button>
      </div>

      <div className="card">
        <img className="sarah-img breakupartist-img" src={img6} alt="" />
        <h2 className="breakupartist-title">Sarah</h2>
        <p className="breakupartist-description">(insert text)</p>
        <button>Hire</button>
      </div>
    </div>
  );
}
export default BreakupArtists;
