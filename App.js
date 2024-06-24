import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
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
        <Title />
        <h1 className="head">
            Starting-a Line-a Priss Uratra!
        </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
