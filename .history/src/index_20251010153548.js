import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
=======
import {Provider} from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { Toaster } from "react-hot-toast";


const store=configureStore({
  reducer:rootReducer
})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
    </Provider>
>>>>>>> clean-main
  </React.StrictMode>
);
