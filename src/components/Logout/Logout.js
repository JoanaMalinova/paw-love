import { Navigate } from "react-router-dom";
import { useSubmit } from "../../hooks/useSubmit";
import { useEffect, useRef } from "react";

export default function Logout() {

    const isInitialMount = useRef(true);
    const { onLogout } = useSubmit();
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            onLogout();
        }
    });

    return <Navigate to="/" />;
}