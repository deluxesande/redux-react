import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
    const cartItems = useSelector((state) => state.cart.itemList);
    return (
        <div>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <CartItem item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartList;
