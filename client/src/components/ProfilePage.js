import React from "react";

import img1 from "../assets/images/alex.jpg";
import img3 from "../assets/images/cassie.jpg";
import img5 from "../assets/images/kyle.jpg";
import img6 from "../assets/images/sarah.jpg";
import img7 from "../assets/images/liz.jpg";

import {ImStarEmpty, ImStarFull} from "react-icons/im"
import {FaBirthdayCake} from "react-icons/fa"
import {GrMapLocation} from "react-icons/gr"
import {SlEnvolope} from "react-icons/sl"
import {AiOutlineCalendar} from "react-icons/ai"
import {MdAttachMoney} from "react-icons/md"

function ProfilePage() {
  return (
    <div>
      <div className="split left">
        <div className="centered">
          <section>
          <h1 class="welcome">Welcome Liz!</h1>
      </section>

        
          <img src={img7} alt="of a woman named Liz" />
          
          <h2>Liz Smith</h2>
          <br></br>
          <p><FaBirthdayCake/> 7.4.90</p>
          <p><GrMapLocation/>Sacramento, CA</p>
        </div>
      </div>
     

      <table>
 
 <tr>
   <td><SlEnvolope/>Messages</td>
   <td><AiOutlineCalendar/>Calendar</td>
 </tr>
 <tr>
   <td><MdRateReview/> Testimonials</td>
   <td><MdAttachMoney/>Become an Artist</td>
 </tr>
</table>
      


      <div className="split right">
        <div className="centered">
    
        <p class="centered1">Please Select your Artist </p>

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
                  <p>
                  <button>Hire</button>
                  </p>
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
              <dd> -Acapella</dd>
                <dd>-Hand-written letter </dd>
                  <dd> -Playlist</dd>
                    </dl>
                    <p>
                  <button>Hire</button>
                  </p>
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
              <dd> -Acapella</dd>
                <dd>-Chocolate </dd>
                  <dd> -Email</dd>
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
              <dd> -Flowers</dd>
                <dd>-Hand-written letter </dd>
                  <dd> -Playlist</dd>
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
