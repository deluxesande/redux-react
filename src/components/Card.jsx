/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { CartActions } from "../store/CartSlice";

const Card = ({ item }) => {
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(
            CartActions.addToCart({
                id: item.id,
                title: item.title,
                price: item.price,
            })
        );
    };
    return (
        <div>
            <img src="src/assets/react.svg" />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <button onClick={handleAdd}>Add to Cart</button>
        </div>
    );
};

export default Card;
