import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import CartList from "./CartList";
import { CartActions } from "../store/CartSlice";
import { AuthActions } from "../store/AuthSlice";
import {
    useDeleteItemMutation,
    useGetAllItemsQuery,
    useUpdateItemMutation,
} from "../store/ApiSlice";
import { useEffect } from "react";

const Layout = () => {
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    // const showCart = useSelector((state) => state.cart.showCart);
    const dispatch = useDispatch();

    const handleShow = () => {
        dispatch(CartActions.setShowCart());
    };

    const handleLogout = () => {
        dispatch(AuthActions.logout());
    };

    const { data, isSuccess, isFetching } = useGetAllItemsQuery();
    // console.log(data?.products);

    const items = isSuccess ? [...data.products] : null;
    // console.log(items);
    const item = {
        id: 2,
        price: 898,
    };

    const [updateItem] = useUpdateItemMutation();
    const [deleteItem] = useDeleteItemMutation();

    const update = async () => {
        await updateItem(item);
        await deleteItem(item.id);
    };

    useEffect(() => {
        update();
        handleShow();
    }, []);

    // const { data: product } = useGetItemQuery(2);
    // console.log(product);

    return (
        <>
            <nav
                className="navbar navbar-light bg-light"
                style={{
                    marginBottom: 20,
                }}
            >
                <div className="container">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#cartModal"
                        style={{ fontSize: "16px" }}
                    >
                        Cart: <i>{totalQuantity} items</i>
                    </button>

                    <button className="btn btn-danger" onClick={handleLogout}>
                        Log out
                    </button>
                </div>
            </nav>
            {isFetching && (
                <div
                    className="container d-flex justify-content-center align-items-center"
                    style={{
                        width: "100%",
                        height: "100vh",
                    }}
                >
                    <div className="spinner-grow" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            )}
            {isSuccess && (
                <div className="container">
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 50,
                        }}
                    >
                        {items.map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </div>
                </div>
            )}
            <CartList />
        </>
    );
};

export default Layout;
