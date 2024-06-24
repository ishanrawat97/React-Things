import React from "react";
import ReactDOM from "react-dom/client";

const title = (
    <h1
        className="head"
        tableIndex="5"
    >
        One for All
    </h1>
);
//React Functional Component
const HeadingComponent = () => (
    <div>
        {title}
        <h1 className="head">
            Starting-a Line-a Priss Uratra!
        </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
