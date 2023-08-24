import { useNavigate } from "react-router-dom";
import { signIn, signUp, signOutUser } from "../service/authService";


export function useSubmit() {

    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {

        const { email, password } = data;

        const result = await signIn(email, password);

        if (result.error) {
            console.log(result.error);
            return
        }
        navigate("/pet-cave");
    }

    const onRegisterSubmit = async (data) => {

        const { username, email, password, rePass } = data;

        const result = await signUp(username, email, password);

        if (result.error) {
            console.log(result.error);
            return
        }

        navigate("/pet-cave");
    }

    const onLogout = async () => {

        const result = await signOutUser();

        if (result.error) {
            console.log(result.error);
            return
        }
    }

    return {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
    }
}