import React, { useContext } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import {
  BsFillTelephoneFill,
  BsFillChatRightTextFill,
  BsWhatsapp,
} from "react-icons/bs";
import { MdEmail, MdEmojiPeople } from "react-icons/md";
import { FaFacebookMessenger, FaPoop } from "react-icons/fa";
import {
  GiFlowers,
  GiChocolateBar,
  GiNotebook,
  GiMusicalNotes,
} from "react-icons/gi";
import { TbPlaylist } from "react-icons/tb";

import { CartContext, useStoreContext } from "../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { GET_PRODUCT_BY_NAME } from "../utils/queries";
import { useQuery } from "@apollo/client";

import Cart from "./Cart";

function Pricing() {
  const { loading, data, result } = useQuery(GET_PRODUCT_BY_NAME, {
    variables: { name: "Phone Call" },
  });
  console.log("a product", loading, data, result);

  const { state, dispatch } = useContext(CartContext);
  console.log("the state from CartContext is", state);
  const myFunction = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = {};
    for (const pair of formData.entries()) {
      formDataObject[pair[0]] = pair[1];
    }
    console.log("form data: ", formDataObject);

    dispatch({
      type: ADD_TO_CART,
      payload: { product: formDataObject.comType },
    });
  };
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
          <div className="price">
            <h4>Basic Breakup</h4>
            <label className="listPrice">$5.99</label>
            <p>
              <BiRightArrow />
              Simple no physical contact.
              <BiLeftArrow />
            </p>
            <br />
            <p>Options are:</p>
            <form onSubmit={myFunction} className="addToCart">
              <input
                type="radio"
                id="phone"
                name="comType"
                value="Phone Call"
              />
              <label htmlFor="phone">
                <BsFillTelephoneFill />
                Phone call
              </label>
              <br />
              <input
                type="radio"
                id="email"
                name="comType"
                value="Email Message"
              />
              <label htmlFor="email">
                <MdEmail />
                Email message
              </label>
              <br />
              <input
                type="radio"
                id="textMessage"
                name="comType"
                value="Text Message"
              />
              <label htmlFor="textMessage">
                <BsFillChatRightTextFill />
                Text message
              </label>
              <br />
              <input
                type="radio"
                id="fbMessage"
                name="comType"
                value="FB Message"
              />
              <label htmlFor="fbMessage">
                <FaFacebookMessenger />
                FB message
              </label>
              <br />
              <input
                type="radio"
                id="whatsAppMsg"
                name="comType"
                value="Whatsapp Message"
              />
              <label htmlFor="whatsAppMsg">
                <BsWhatsapp />
                Whatsapp message
              </label>
              <button>Add to cart</button>
            </form>
          </div>
        </div>

        <div className="columns">
          <div className="price">
            <h4>Sincere Farewell</h4>
            <label className="listPrice">$29.99</label>
            <p>
              <BiRightArrow />
              Ship a package
              <BiLeftArrow />
            </p>
            <br />
            <p>Options are:</p>
            <form onSubmit={myFunction} className="addToCart">
              <input
                type="radio"
                id="flowers"
                name="comType"
                value="Send Flowers"
              />
              <label htmlFor="flowers">
                <GiFlowers />
                Flowers
              </label>
              <br />
              <input
                type="radio"
                id="chocolates"
                name="comType"
                value="Send Chocolates"
              />
              <label htmlFor="chocolates">
                <GiChocolateBar />
                Chocolates
              </label>
              <br />
              <input
                type="radio"
                id="sendletter"
                name="comType"
                value="Send Letter"
              />
              <label htmlFor="sendletter">
                <GiNotebook />
                Letter
              </label>
              <br />
              <input
                type="radio"
                id="doodoo"
                name="comType"
                value="Send Doggy Doodoo"
              />
              <label htmlFor="doodoo">
                <FaPoop />
                Doggy doodoo
              </label>
              <br />
              <input
                type="radio"
                id="playlist"
                name="comType"
                value="Send a playlist of songs"
              />
              <label htmlFor="playlist">
                <TbPlaylist />
                Playlist
              </label>
              <button>Add to cart</button>
            </form>
          </div>
        </div>

        <div className="columns">
          <div className="price">
            <h4>Epic Sendoff</h4>
            <label className="listPrice">up to $1,000</label>
            <p>
              <BiRightArrow />
              In-Person Delivery and/or Performance
              <BiLeftArrow />
            </p>
            <br />
            <p>Options are:</p>
            <form onSubmit={myFunction} className="addToCart">
              <input
                type="radio"
                id="band"
                name="comType"
                value="Send a Mariachi band"
              />
              <label htmlFor="band">
                <GiMusicalNotes />A mariachi band
              </label>
              <br />
              <input
                type="radio"
                id="group"
                name="comType"
                value="Send an acapalla group"
              />
              <label htmlFor="group">
                <GiMusicalNotes />
                An acapalla group
              </label>
              <br />
              <input
                type="radio"
                id="sendArtist"
                name="comType"
                value="Send a Breakup Artists"
              />
              <label htmlFor="sendArtist">
                <MdEmojiPeople />A Breakup Artist acting on your behalf
              </label>
              <br />

              <button>Add to cart</button>
              <p className="note">
                NOTE: Customization subject to limitations according to federal
                and state law.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
