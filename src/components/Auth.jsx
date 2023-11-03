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
        <div
            className="container d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    padding: "20px",
                    backgroundColor: "#f4f4f4",
                    borderRadius: "5px",
                }}
            >
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Enter Username"
                />
                <input
                    className="form-control mb-3"
                    type="email"
                    placeholder="Enter Email"
                />
                <button
                    style={{ width: "100%" }}
                    className="btn btn-primary"
                    type="submit"
                >
                    Log in
                </button>
            </form>
        </div>
    );
};

export default Auth;
