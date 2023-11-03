import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
    const cartItems = useSelector((state) => state.cart.itemList);
    // console.log(cartItems);

    let total = 0;
    cartItems.forEach((item) => {
        total += item.totalPrice;
    });

    return (
        <div
            className="modal fade"
            id="cartModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="cartModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="cartModalLabel">
                            Cart
                        </h5>
                        <button
                            type="button"
                            className="btn-sm btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <ul className="list-group">
                            {cartItems.map((item, index) => (
                                <li className="list-group-item" key={index}>
                                    <CartItem item={item} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <h1 className="lead">
                            <b>Total:</b> ${total}
                        </h1>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartList;
