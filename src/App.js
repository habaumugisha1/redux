// import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/actions/counterActions";

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (

    <div className="App">
      <h4>Counter: {counter} </h4>
      <div >
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
