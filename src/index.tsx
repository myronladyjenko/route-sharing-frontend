import React from 'react';
import { ReactDOM } from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const root = createRoot(document.getElementById('root') as HTMLElement);
const baseURL = "http://34.148.97.171/";
function getClimbs(baseURL) {
  console.log(0);
  if (sessionStorage.length === 0) {
    fetchClimb(baseURL);
  }
}

function fetchClimb(baseURL) {
  axios
    .get(`${baseURL}climbConfigs`)
    .then((response) => {
      sessionStorage.setItem("holds", JSON.stringify(response.data));
      console.log(response.data);
    })
    .catch((error) => console.log(error));
}
getClimbs(baseURL);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
