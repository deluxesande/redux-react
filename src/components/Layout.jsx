import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import CartList from "./CartList";
import { CartActions } from "../store/CartSlice";
import { AuthActions } from "../store/AuthSlice";
import { useGetAllItemsQuery } from "../store/ApiSlice";

const Layout = () => {
    const items = [
        {
            id: "1",
            name: "item1",
            price: 10,
        },
        {
            id: "2",
            name: "item2",
            price: 15,
        },
        {
            id: "3",
            name: "item3",
            price: 20,
        },
        {
            id: "4",
            name: "item4",
            price: 25,
        },
        {
            id: "5",
            name: "item5",
            price: 30,
        },
        {
            id: "6",
            name: "item6",
            price: 35,
        },
        {
            id: "7",
            name: "item7",
            price: 40,
        },
        {
            id: "8",
            name: "item8",
            price: 45,
        },
        {
            id: "9",
            name: "item9",
            price: 50,
        },
        {
            id: "10",
            name: "item10",
            price: 55,
        },
    ];

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const showCart = useSelector((state) => state.cart.showCart);
    const itemList = useSelector((state) => state.cart.itemList);
    const dispatch = useDispatch();

    const handleShow = () => {
        dispatch(CartActions.setShowCart());
    };

    let total = 0;
    itemList.forEach((item) => {
        total += item.totalPrice;
    });

    const handleLogout = () => {
        dispatch(AuthActions.logout());
    };

    const { data } = useGetAllItemsQuery();
    console.log(data);

    return (
        <>
            <nav
                style={{
                    marginBottom: 20,
                }}
            >
                <h2 style={{ cursor: "pointer" }} onClick={handleShow}>
                    Cart: {totalQuantity} items
                </h2>
                <button onClick={handleLogout}>Log out</button>
            </nav>
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
            <hr></hr>
            {showCart && <CartList />}

            <div style={{ width: "100%", background: "red" }}>
                <h4>{total}</h4>
            </div>
        </>
    );
};

export default Layout;
