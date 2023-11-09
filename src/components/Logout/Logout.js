import { Navigate } from "react-router-dom";
import { useSubmit } from "../../hooks/useSubmit";
import { useEffect} from "react";

export default function Logout() {

    const { onLogout } = useSubmit();

    useEffect(() => {
        onLogout();
        
    },[]);

    return <Navigate to="/" />;
}