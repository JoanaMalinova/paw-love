import { signIn, signUp, signOutUser } from "../service/authService";
import { history } from "../helpers/history";


export function useSubmit() {

    const onLoginSubmit = async (data) => {

        const { email, password } = data;

        const result = await signIn(email, password);

        if (result.error) {

            return result.error
        }
        history.navigate("/pet-cave");
    }

    const onRegisterSubmit = async (data) => {

        const { username, email, password } = data;

        const result = await signUp(username, email, password);

        if (result.error) {

            return result.error
        }

        history.navigate("/pet-cave");
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