import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h3",{id:"heading"},"I am at my starting Line! Only way is up");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);