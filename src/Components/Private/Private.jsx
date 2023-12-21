import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Private = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default Private;