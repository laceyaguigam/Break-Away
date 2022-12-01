import React from "react";
import img1 from "../assets/images/alex.jpg";
import img2 from "../assets/images/alicia.jpg";
import img3 from "../assets/images/cassie.jpg";
import img4 from "../assets/images/joe.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";

function breakupArtist() {
  return (
    <div>
      <div className="card">
        <img src={img1} alt="" />
        <h1>(insert name)</h1>
        <p className=" ">(insert text)</p>
        <p> (more text)</p>
        <p>
          {" "}
          <button>(select or pay here)</button>
        </p>
      </div>

      <div className="card">
        <img src={img2} alt="" />
        <h1>(insert name)</h1>
        <p className=" ">(insert text)</p>
        <p> (more text)</p>
        <p>
          {" "}
          <button>(select or pay here)</button>
        </p>
      </div>

      <div className="card">
        <img src={img3} alt="" />
        <h1>(insert name)</h1>
        <p className=" ">(insert text)</p>
        <p> (more text)</p>
        <p>
          {" "}
          <button>(select or pay here)</button>
        </p>
      </div>

      <div className="card">
        <img src={img4} alt="" />
        <h1>(insert name)</h1>
        <p className=" ">(insert text)</p>
        <p> (more text)</p>
        <p>
          {" "}
          <button>(select or pay here)</button>
        </p>
      </div>

      <div className="card">
        <img src={img5} alt="" />
        <h1>(insert name)</h1>
        <p className=" ">(insert text)</p>
        <p> (more text)</p>
        <p>
          {" "}
          <button>(select or pay here)</button>
        </p>
      </div>

      <div className="card">
        <img src={img6} alt="" />
        <h1>(insert name)</h1>
        <p className=" ">(insert text)</p>
        <p> (more text)</p>
        <p>
          {" "}
          <button>(select or pay here)</button>
        </p>
      </div>
    </div>
  );
}
export default breakupArtist;
