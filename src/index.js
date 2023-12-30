import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
// import $ from "jquery";
import 'popper.js/dist/popper.min.js';
import './assets/css/main.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

