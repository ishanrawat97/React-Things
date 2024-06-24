import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1
        className="head"
        tabIndex="5"
    >
        Namaste All for one!!!
    </h1>
);

//React Functional Component
const HeadingComponent = () => (
    <div>
        <h1 className="head">
            <Title></Title>
            <Title />
            {Title()}
            Starting-a Line-a Priss Uratra!
        </h1>
    </div>
);
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<HeadingComponent />);
