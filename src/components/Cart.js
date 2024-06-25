import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import useOnlineStatus from "../utils/useOnlineStatus";
import CartShimmer from "./CartShimmer";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false)
        return (
    <CartShimmer/>
    )

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="pt-10">
            <div className="w-12/12 m-auto flex justify-between">
                <h1 className="ml-24 text-2xl font-bold border-black">🛒 Cart</h1>
                <button className="p-1 m-2 mr-24 h-8 bg-red-600 text-white font-bold text-xs rounded-lg hover:bg-red-700" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="w-12/12 h-60 ml-24 mr-20 m-10 rounded-3xl align-middle">
            {cartItems.length === 0 && <h1 className="text-center font-bold flex-col justify-center p-20 h-84">Cart is Empty. Please add some items.</h1> }
                <ItemList data={cartItems} />
            </div>
        </div>
    )
}
export default Cart;
