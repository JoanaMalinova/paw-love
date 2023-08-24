import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import styles from "../../styles/LoginRegister.module.css";
import { useSubmit } from "../../hooks/useSubmit";

export default function Login() {

    const { onLoginSubmit } = useSubmit();
    const { formValues, onChangeHandler, onSubmit, outlineStyle, message, styledInputs } = useForm({
        email: "",
        password: ""
    }, onLoginSubmit);

    const data = formValues;

    return (

        <div className={styles["form-wrapper"]} >
            <form method="POST" onSubmit={onSubmit}>
                <fieldset className={styles.field}>
                    <legend>Do we know you?</legend>
                    <div>
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
                    <div className={styles["bottom-div"]}>
                        <p className={styles.message}>{message}</p>
                        <button type="submit" className="submit-btn">Login</button>
                        <Link to="/register">No, not really. But i want in!</Link>
                    </div>
                </fieldset>
            </form>
            <img src="images/form-kitty.png" alt="cat-looking-sideways" />
        </div>

    )
}