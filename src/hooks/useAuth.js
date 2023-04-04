import { useNavigate } from "react-router-dom";
import {login, register, logout} from "../service/authService";
import { useLocalStorage } from "./useLocalStorage";


export function useAuth(){

    const [auth, setAuth] = useLocalStorage('auth', {});
    
    const navigate = useNavigate();    

    const onLoginSubmit = async (data) => {

        const result = await login(data);
        setAuth(result);       
        navigate("/pet-cave");

    }

    const onRegisterSubmit = async (data) => {

        const { rePass ,...registerData} = data;
        if (rePass !== registerData.password){
            return
        }

        const result = await register(registerData);
        console.log(result)
        setAuth(result);       
        navigate("/pet-cave");
    }

    const onLogout = async (e) => {
        e.preventDefault();
        await logout();
        setAuth({});
        localStorage.clear();
        navigate("/");
    }

    const authKeeper = { 

        onLoginSubmit,
        onRegisterSubmit,
        onLogout      
        
    }

    if(auth){

        authKeeper.userId=  auth._id;
        authKeeper.token = auth.accessToken;
        authKeeper.userName = auth.userName;
        authKeeper.email = auth.email;
        authKeeper.isAuthenticated = !!auth.accessToken;

    }

    return authKeeper;
}