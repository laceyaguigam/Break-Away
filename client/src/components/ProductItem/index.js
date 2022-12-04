import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';

const [state, dispatch] = useStoreContext();

const addToCart = () => {
  dispatch({
    type: ADD_TO_CART,
    product: { ...item, purchaseQuantity: 1 }
  });
};