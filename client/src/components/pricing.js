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
import addToCart from '../components/ProductItem';
import { useStoreContext } from '../utils/GlobalState';
import {  
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

//modal variable for sign-up form

//BTN NEEDS COMMAND TO SUBMIT FORM

// //define products array, here or in GlobalState?? as a prop? no idea syntax? need useState hook??
const products = () => {
  [{
    _id: 1,
    name: 'basic',
    price: '5.99'
  },
  {
    _id: 2, 
    name: 'sincere',
    price: '29.99'
  },
  {
    _id: 3,
    name: 'epic',
    price: '1000.00'
  }]
}


function Pricing() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

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
          <button>
            {/* <button onClick={() => addToCart(1)} id="basic"> */}
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
          <button>
            {/* <button onClick={addToCart(2)} id="sincere"> */}
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
          <button>
            {/* <button onClick={addToCart(3)} id="epic"> */}
            Add to cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Pricing;
