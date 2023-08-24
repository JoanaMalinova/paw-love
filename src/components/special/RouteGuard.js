import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function RouteGuard() {

    const location = useLocation();
    const path = location.pathname;
    const user = useContext(AuthContext);

    if (path === "/login" || path === "/register") {
        if (user) {
            return <Navigate to="/" replace />
        }
    } else {
        if (!user) {
            return <Navigate to="/login" replace />
        }
    }

    return (
        <Outlet />
    );
}