import React from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import {
  BsFillTelephoneFill,
  BsFillChatRightTextFill,
  BsWhatsapp,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger, FaPoop } from "react-icons/fa";
import { GiFlowers, GiChocolateBar, GiNotebook } from "react-icons/gi";
import { TbPlaylist } from "react-icons/tb";

//modal variable for sign-up form

//BTN NEEDS COMMAND TO SUBMIT FORM

function Pricing() {
  return (
    <div>
      <div className="pricing-header">
        <h2>Service Pricing</h2>
      </div>
      <p>
        All packages are customizable form: polite, enraged, respectful,
        sorrowful, dramatic or what ever you desire or feel.
      </p>
      <div className="pricing-body">
        <div className="columns">
          <ul className="price">
            <h4>Basic Breakup</h4>
            <li>$5.99</li>
            <li>
              <BiRightArrow />
              Simple no physical contact.
              <BiLeftArrow />
            </li>
            <br />
            <p>Some options are:</p>
            <li>
              <BsFillTelephoneFill />
              Phone call
            </li>
            <li>
              <MdEmail />
              Email message
            </li>
            <li>
              <BsFillChatRightTextFill />
              Text message
            </li>
            <li>
              <FaFacebookMessenger />
              FB message
            </li>
            <li>
              <BsWhatsapp />
              Whatsapp message
            </li>
          </ul>
        </div>

        <div className="columns">
          <ul className="price">
            <h4>Sincere Farewell</h4>
            <li>$29.99</li>
            <li>
              <BiRightArrow />
              Ship a package
              <BiLeftArrow />
            </li>
            <br />
            <p>Some options are:</p>
            <li>
              <GiFlowers />
              Flowers
            </li>
            <li>
              <GiChocolateBar />
              Chocolates
            </li>
            <li>
              <GiNotebook />
              Hand-written dear jane/john letter
            </li>
            <li>
              <FaPoop />
              Doggy doodoo
            </li>
            <li>
              <TbPlaylist />
              Playlist of sad songs
            </li>
          </ul>
        </div>

        <div className="columns">
          <ul className="price">
            <h4>Epic Sendoff</h4>
            <li>up to $1,000</li>
            <li>
              <BiRightArrow />
              In-Person Delivery and/or Performance
              <BiLeftArrow />
            </li>
            <br />
            <p>Dazzle and un-delight! Your breakup can be delivered by:</p>
            <li>A mariachi band</li>
            <li>An acapalla group</li>
            <li>A Breakup Artist acting on your behalf</li>

            <br />
            <li>
              Please NOTE: Customization subject to limitations according to
              federal and state law.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
