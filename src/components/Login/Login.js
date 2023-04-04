import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {

    const { onLoginSubmit } = useAuth();

    const { formValues, onChangeHandler, onSubmit } = useForm({}, onLoginSubmit);

    const data = formValues;

    return (
        <div className="form-wrapper">
            <form method="POST" onSubmit={onSubmit}>
                <fieldset className="field">
                    <legend>Do we know you?</legend>
                    <div>
                        <label htmlFor="userName">Username:</label><br />
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={data.userName || ''}
                            onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label><br />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={data.email || ''}
                            onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password || ''}
                            onChange={onChangeHandler} />
                    </div>
                    <button type="submit" className="submit-btn">Login</button>
                    <Link to="/register">No, not really. But i want in!</Link>
                </fieldset>
            </form>
            <img src="images/form-kitty.png" alt="cat-looking-sideways" />
        </div>
    )
}