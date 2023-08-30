import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { history } from "../../helpers/history";

export function RouteGuard() {

    const path = history.location.pathname;
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
    )
}