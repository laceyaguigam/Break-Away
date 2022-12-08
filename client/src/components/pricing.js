import React from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { useStoreContext } from "../utils/GlobalState";
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
  const [state, dispatch] = useStoreContext();

  const { cart } = state;

  const addToCart = (_id) => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...itemInCart, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...itemInCart, purchaseQuantity: 1 });
    }
  };

  return (
    <>
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
            <button onClick={() => addToCart({ name: 'Basic' })} id="basic">
              Add to cart
            </button>
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
            <button onClick={() => addToCart({ name: 'Sincere' })} id="sincere">
              Add to cart
            </button>
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
            <button onClick={() => addToCart({ name: 'Epic' })} id="epic">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
