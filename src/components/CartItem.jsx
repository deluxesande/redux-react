/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { CartActions } from "../store/CartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(
            CartActions.addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
            })
        );
    };
    const handleSub = () => {
        dispatch(CartActions.removeFromCart(item.id));
    };

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.quantity}</p>
            <p>{item.totalPrice}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSub}>-</button>
        </div>
    );
};

export default CartItem;
