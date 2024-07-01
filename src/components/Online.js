import useOnlineStatus from "../utils/useOnlineStatus";

export const Online = () => {
    const status = useOnlineStatus();
    if (!status) return <h1>Looks like you are offline!</h1>;
};
