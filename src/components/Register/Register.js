import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
    debugger
    const { onRegisterSubmit } = useAuth();

    const { formValues, onChangeHandler, onSubmit } = useForm({}, onRegisterSubmit);

    const data = formValues;

    return (
        <div className="form-wrapper">
            <form method="POST" onSubmit={onSubmit}>
                <fieldset className="field">
                    <legend>Join our community</legend>
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
                        <input t
                            ype="text"
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
                    <div>
                        <label htmlFor="rePass">Confirm password:</label><br />
                        <input
                            type="password"
                            id="rePass"
                            name="rePass"
                            value={data.rePass || ''}
                            onChange={onChangeHandler} />
                    </div>
                    <button type="submit" className="submit-btn">Register</button>
                    <Link to="/login">I am already a member!</Link>
                </fieldset>
            </form>
            <img src="images/form-doggy.png" alt="bulldog" />
        </div>
    )
}


