import { useDispatch } from "react-redux";
import { CartActions } from "../store/CartSlice";

/* eslint-disable react/prop-types */
const Card = ({ item }) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(CartActions.addToCart({ item }));
    };
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                className="card-img-top"
                src={item.thumbnail}
                alt="Card image cap"
            />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="lead">${item.price}</p>
                <p className="card-text">{item.description}</p>
                <a className="btn btn-primary" onClick={handleAdd}>
                    Add to Cart
                </a>
            </div>
        </div>
    );
};

export default Card;
