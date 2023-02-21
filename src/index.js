import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"


//STORE => globalized state

//ACTION => arttırma

const increment = () =>{
  return{
    type:"increment"
  }
};

const decrement = ()=>{
  return{
    type:"decrement"
  }
}



//REDUCER => ne dispatch edilirse onu çalıştırır,actiona göre story'i modify eder.

const counter = (state=0,action)=>{
  switch (action.type) {
    case "increment":
      return state +1;

      case "decrement":
        return state -1;
  }
}

let store = createStore(counter);

// Display it on the Screen 

store.subscribe(()=> console.log(store.getState()));


//DİSPATCH => action u execute etdigimiz yanı çalıstırdıgımız yerdir.
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
