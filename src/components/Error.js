import { NA_MAANE_URL } from "../utils/constants";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="error-container">
            <h1>Na maane?</h1>
            <div className="errorImageContainer">
                <img
                    className="error-logo"
                    src={NA_MAANE_URL}
                />
            </div>
            <h1>Karu teri guddi lal?</h1>
            <h3>
                Error {err.status}: {err.statusText}
            </h3>
        </div>
    );
};
export default Error;
