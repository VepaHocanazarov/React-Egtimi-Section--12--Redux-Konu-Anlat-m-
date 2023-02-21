import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//STORE => globalized state

//ACTION => arttırma



//REDUCER => ne dispatch edilirse onu çalıştırır,actiona göre story'i modify eder.



// Display it on the Screen 


//DİSPATCH => action u execute etdigimiz yanı çalıstırdıgımız yerdir.




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
