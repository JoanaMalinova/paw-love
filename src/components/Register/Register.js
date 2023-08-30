import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { useSubmit } from "../../hooks/useSubmit";
import styles from "../../styles/LoginRegister.module.css";


export default function Register() {

    const { onRegisterSubmit } = useSubmit();
    const { formValues, onChangeHandler, onSubmit, outlineStyle, styledInputs, message } = useForm({
        username: "",
        email: "",
        password: "",
        rePass: ""
    }, onRegisterSubmit);

    const data = formValues;

    return (
        <div className={styles["form-wrapper"]}>
            <form method="POST" onSubmit={onSubmit}>
                <fieldset className={styles.field}>
                    <legend>Join our community</legend>
                    <div>
                        <label htmlFor="username">Username:</label><br />
                        <input
                            style={styledInputs.includes("username") ? outlineStyle.pink : outlineStyle.unset}
                            type="text"
                            id="username"
                            name="username"
                            value={data.username}
                            onChange={onChangeHandler} />
                    </div>
                    <div >
                        <label htmlFor="email">Email:</label><br />
                        <input
                            style={styledInputs.includes("email") ? outlineStyle.pink : outlineStyle.unset}
                            type="text"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br />
                        <input
                            style={styledInputs.includes("password") ? outlineStyle.pink : outlineStyle.unset}
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="rePass">Confirm password:</label><br />
                        <input
                            style={styledInputs.includes("rePass") ? outlineStyle.pink : outlineStyle.unset}
                            type="password"
                            id="rePass"
                            name="rePass"
                            value={data.rePass}
                            onChange={onChangeHandler} />

                    </div>
                    <div className={styles["bottom-div"]}>
                        {message && <p className={styles.message}>{message}</p>}
                        <button type="submit" className="submit-btn">Register</button>
                        <Link to="/login">I am already a member!</Link>
                    </div>
                </fieldset>
            </form>
            <img src="https://c4.wallpaperflare.com/wallpaper/2/880/843/aquariums-fish-white-background-spikes-wallpaper-preview.jpg" alt="bulldog" />
        </div>
    )
}


