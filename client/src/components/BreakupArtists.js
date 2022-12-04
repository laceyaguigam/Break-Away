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
  
  <div className="card" class="row">
    <div class="column">
      <img src={img1} alt="photograph of Sarah the breakup artist" style={{width: '50%'}} />
      <h1>Alex</h1>
      <p className="title">(insert info)</p>
      <p>(insert info)</p>
      <p><button>Hire</button></p>
    </div>


<div className="card">
  <div class="column">
    <img src={img2} alt="photograph of Sarah the breakup artist" style={{width: '260%'}} />
    <h1>Alicia</h1>
    <p className="title">(insert info)</p>
    <p>(insert info)</p>
    <p><button>Hire</button></p>
</div>
</div>


<div className="card">
  <div class="column">
    <img src={img3} alt="photograph of Sarah the breakup artist" style={{width: '260%'}} />
    <h1>Cassie</h1>
    <p className="title">(insert info)</p>
    <p>(insert info)</p>
    <p><button>Hire</button></p>
</div>
</div>

<br></br>

<div className="card" class="row">
<div class="column">
  <img src={img4} alt="photograph of Sarah the breakup artist" style={{width: '260%'}} />
  <h1>Joe</h1>
  <p className="title">(insert info)</p>
  <p>(insert info)</p>
  <p><button>Hire</button></p>
</div>
</div>

<div className="card">
  <div class="column">
  <img src={img5} alt="photograph of Sarah the breakup artist" style={{width: '260%'}} />
  <h1>Kyle</h1>
  <p className="title">(insert info)</p>
  <p>(insert info)</p>
  <p><button>Hire</button></p>
</div>
</div>

<div className="card">
<div class="column">
  <img src={img6} alt="photograph of Sarah the breakup artist" style={{width: '260%'}} />
  <h1>Sarah</h1>
  <p className="title">(insert info)</p>
  <p>(insert info)</p>
  <p><button>Hire</button></p>
  </div>
</div>
</div>
</section>
      );
      }
      
     export default BreakupArtists;








    






   



