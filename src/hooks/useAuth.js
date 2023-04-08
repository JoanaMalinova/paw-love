import { useNavigate } from "react-router-dom";
import { login, register, logout } from "../service/authService";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";


export function useAuth() {

    const [auth, setAuth] = useLocalStorage('auth', {});
    const [message, setMessage] = useState("");
    const [styledValues, setStyledValues] = useState([]);

    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {

        setStyledValues([]);       

        let isEmpty = false;

        if (!data.userName || data.userName === "") {
            setStyledValues(state => [...state, "userName"]);
            isEmpty = true;
        }
        if (!data.email || data.email === "") {
            setStyledValues(state => [...state, "email"]);
            isEmpty = true;
        }
        if (!data.password || data.password === "") {
            setStyledValues(state => [...state, "password"]);
            isEmpty = true;
        }        

        if (isEmpty) {
            setMessage("All fileds are required!");
            return;
        }
        
        const result = await login(data);

        if (result === "Login or password don't match") {
            setMessage(result);
            return;
        }
        setAuth(result);
        navigate("/pet-cave");

    }

    const onRegisterSubmit = async (data) => {

        setStyledValues([]);

        const { rePass, ...registerData } = data;        

        let isEmpty = false;        

        if (!data.userName || data.userName === "") {
            setStyledValues(state => [...state, "userName"]);
            isEmpty = true;
        }
        if (!data.email || data.email === "") {
            setStyledValues(state => [...state, "email"]);
            isEmpty = true;
        }
        if (!data.password || data.password === "") {
            setStyledValues(state => [...state, "password"]);
            isEmpty = true;
        }
        if (!data.rePass || data.rePass === "") {
            setStyledValues(state => [...state, "rePass"]);
            isEmpty = true;
        }

        if (isEmpty) {
            setMessage("All fileds are required!");
            return;
        }

        if (data.userName.length < 3) {
            setMessage("Username must be at least three letters long!");
            setStyledValues(state => [...state, "userName"]);
            return;
        }

        if (data.rePass !== data.password) {
            setMessage("Password and confirm password don't match!");
            setStyledValues(state => [...state, "password", "rePass"])
            return;
        }

        const result = await register(registerData);
        setMessage("");
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

    return {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        message,
        styledValues,
        userId: auth._id,
        token: auth.accessToken,
        userName: auth.userName,
        email: auth.email,
        isAuthenticated: auth.accessToken ? 1 : 0
    }
}