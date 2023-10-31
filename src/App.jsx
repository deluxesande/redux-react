import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedin);
    console.log(isLoggedIn);

    const itemList = useSelector((state) => state.cart.itemList);
    console.log(itemList);

    return (
        <div>
            {!isLoggedIn && <Auth />}
            {isLoggedIn && <Layout />}
        </div>
    );
}

export default App;
