import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;
//React Functional Component
const HeadingComponent = () => (
    <div>
        <h1 className="head">
            Starting-a Line-a Priss Uratra!
        </h1>
    </div>
);
const title = (
    <h1
        className="head"
        tableIndex="5"
    >
        {elem}
        One for All
        <HeadingComponent />
    </h1>
);

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(title);
