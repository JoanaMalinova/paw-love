import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "../../styles/LoginRegister.module.css";


export default function Register() {

    const { onRegisterSubmit, message, styledValues } = useAuth();

    const { formValues, onChangeHandler, onSubmit } = useForm({}, onRegisterSubmit);

    const data = formValues;

    const outlineStyle = {
        pink: {
            outline: "none!important",
            border: "3px solid #ea2879"
        }
    }

    return (
        <div className={styles["form-wrapper"]}>
            <form method="POST" onSubmit={onSubmit}>
                <fieldset className={styles.field}>
                    <legend>Join our community</legend>
                    <div>
                        <label htmlFor="userName">Username:</label><br />
                        <input
                            style={styledValues.includes("userName") ? outlineStyle.pink : outlineStyle.unset}
                            type="text"
                            id="userName"
                            name="userName"
                            value={data.userName || ''}
                            onChange={onChangeHandler} />
                    </div>
                    <div >
                        <label htmlFor="email">Email:</label><br />
                        <input
                            style={styledValues.includes("email") ? outlineStyle.pink : outlineStyle.unset}
                            type="text"
                            id="email"
                            name="email"
                            value={data.email || ''}
                            onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br />
                        <input
                            style={styledValues.includes("password") ? outlineStyle.pink : outlineStyle.unset}
                            type="password"
                            id="password"
                            name="password"
                            value={data.password || ''}
                            onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="rePass">Confirm password:</label><br />
                        <input
                            style={styledValues.includes("rePass") ? outlineStyle.pink : outlineStyle.unset}
                            type="password"
                            id="rePass"
                            name="rePass"
                            value={data.rePass || ''}
                            onChange={onChangeHandler} />

                    </div>
                    <div className={styles["bottom-div"]}>
                        {message && <p className={styles.message}>{message}</p>}
                        <button type="submit" className="submit-btn">Register</button>
                        <Link to="/login">I am already a member!</Link>
                    </div>
                </fieldset>
            </form>
            <img src="images/form-doggy.png" alt="bulldog" />
        </div>
    )
}


