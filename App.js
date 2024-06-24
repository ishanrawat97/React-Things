import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <h1
        className="head"
        tabIndex="5"
    >
        I am finally at my starting line
    </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
