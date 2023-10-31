import { useDispatch } from "react-redux";
import { AuthActions } from "../store/AuthSlice";

const Auth = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // !dispatch actions
        dispatch(AuthActions.login());
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Username" />
            <input type="email" placeholder="Enter Email" />
            <button type="submit">Log in</button>
        </form>
    );
};

export default Auth;
