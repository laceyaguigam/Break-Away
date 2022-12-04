import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';

const [state, dispatch] = useStoreContext();

const { cart } = state;

const addToCart = () => {
  // find the cart item with the matching id
  const itemInCart = cart.find((cartItem) => cartItem._id === _id);

  // if there was a match, call UPDATE with a new purchase quantity
  if (itemInCart) {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      _id: _id,
      purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
    });
  } else {
    dispatch({
      type: ADD_TO_CART,
      product: { ...item, purchaseQuantity: 1 }
    });
  }
};