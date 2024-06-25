import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="w-9/12 m-auto">
            <h1 className="text-center m-4 text-xl font-bold border-black">Cart</h1>
            <button className="p-2 m-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1 className="text-center">Cart is Empty. Please add some items.</h1>}
            <ItemList data={cartItems} />
        </div>
    )
}
export default Cart;