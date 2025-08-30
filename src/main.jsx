import React from "react";
import ReactDOM from "react-dom/client";
import emailjs from 'emailjs-com';
import App from "./App";
import "./index.css";

// Initialize EmailJS with your public key
emailjs.init("5zmPvDu8F7qP6JTfD");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
