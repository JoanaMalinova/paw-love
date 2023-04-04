import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {

    const { isAuthenticated, onLogout, userName } = useAuth();

    const navigate = useNavigate();

    // const location = useLocation();

    const onLogoClickHandler = () => {

        navigate("/");

    }

    const onLinkClickHandler = (ev) => {

        const listItems = Array.from(ev.currentTarget.parentNode.getElementsByTagName('a'));

        for (const curr of listItems) {

            if (curr == ev.target) {

                if (curr.classList.contains('user-greet')) {
                    curr.style.textDecoration = "underline";
                } else {
                    curr.style.backgroundColor = "#ea2879";
                    curr.style.color = "white";
                }

            } else {
                curr.style.textDecoration = "none";
                curr.style.backgroundColor = "white";
                curr.style.color = "#ea2879";
            }
        }
    }

    return (
        <header onClick={onLinkClickHandler}>
            <div className="logo" onClick={onLogoClickHandler}>
                <img src="images/logo.png" alt="paw-love-logo" />
                <p>PAW<span className="pink">Love</span></p>
            </div>
            {userName &&
                <Link to="/my-cave" className="user-greet">{userName}'s cave</Link>}
            <nav >
                <ul>
                    <li><Link to="/" className="home-link">Home</Link></li>
                    <li><Link to="/pet-cave">PetCave</Link></li>
                    {!isAuthenticated ? <div className="guest">
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </div> :
                        <div className="user">
                            <li><Link to="/create">Post Story</Link></li>
                            <li><a href="#" onClick={onLogout}>Logout</a></li>
                        </div>}
                </ul>
            </nav>
        </header>
    )
}