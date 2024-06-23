import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Nah! This is my starting line!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);