import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
//do we need import { products } from "../pricing"

const [state, dispatch] = useStoreContext();

const { cart } = state;

const addToCart = (_id) => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...itemInCart, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...itemInCart, purchaseQuantity: 1 });
    }
  }

export default addToCart