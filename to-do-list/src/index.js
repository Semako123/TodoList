import React from "react";
import ReactDOM from "react-dom/client";
import ReactRouterProvider from "./routes";
// import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ReactRouterProvider />   
    {/* <App/> */}
  </>
);
  