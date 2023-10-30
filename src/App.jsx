import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store";
import "./App.css";

function App() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const add = () => {
        dispatch(actions.add());
    };

    const sub = () => {
        dispatch(actions.sub());
    };

    return (
        <div>
            <h1>Counter app</h1>
            <span>{counter}</span>

            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
        </div>
    );
}

export default App;
