import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from './actions';


function App() {

    const counter=useSelector(state=>state.counter);
    const dispetch=useDispatch();

  return (
    <div className="App">
       <h1>Counter  {counter} </h1>

       <button onClick={()=>dispetch(increment())} >+</button>

       <button onClick={()=>dispetch(decrement())} >-</button>
    </div>
  );
}

export default App;
