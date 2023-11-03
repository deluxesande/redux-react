/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { CartActions } from "../store/CartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(CartActions.addToCart({ item }));
    };

    const handleSub = () => {
        dispatch(CartActions.removeFromCart(item.id));
    };

    return (
        <div className="d-flex flex-wrap justify-content-between">
            <h4>{item.title}</h4>
            <p>{item.quantity}</p>
            <p>{item.totalPrice}</p>
            <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={handleAdd}>
                    +
                </button>
                <button className="btn btn-secondary" onClick={handleSub}>
                    -
                </button>
            </div>
        </div>
    );
};

export default CartItem;
