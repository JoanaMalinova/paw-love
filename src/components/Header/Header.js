import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "../../styles/Header.module.css";

export default function Header() {

    const { isAuthenticated, onLogout, userName } = useAuth();   

    const navigate = useNavigate();

    const location = useLocation();
    const path = location.pathname;

    const onLogoClickHandler = () => {
        navigate("/");

    }

    const linkColorStyle = {
        pink: {
            backgroundColor: "#ea2879",
            color: "white"
        }
    }

    const underlineStyle = {
        undrelined: {
            textDecoration: "underline"
        },
        none: {
            textDecoration: "none"
        }
    }

    return (
        <header >
            <div className={styles.logo} onClick={onLogoClickHandler}>
                <img src="images/logo.png" alt="paw-love-logo" />
                <p>PAW<span className="pink">Love</span></p>
            </div>
            {userName &&
                <Link style={path == "/my-cave" ? underlineStyle.undrelined : linkColorStyle.none} to="/my-cave" className={styles["user-greet"]}>{userName}'s cave</Link>}
            <nav >
                <ul>
                    <li><Link style={path == "/" ? linkColorStyle.pink : linkColorStyle.unset} to="/" className={styles["home-link"]} >Home</Link></li>
                    <li><Link style={path == "/pet-cave" ? linkColorStyle.pink : linkColorStyle.unset} to="/pet-cave">PetCave</Link></li>
                    {!isAuthenticated ? <div className={styles.guest}>
                        <li><Link style={path == "/register" ? linkColorStyle.pink : linkColorStyle.unset} to="/register">Register</Link></li>
                        <li><Link style={path == "/login" ? linkColorStyle.pink : linkColorStyle.unset} to="/login">Login</Link></li>
                    </div> :
                        <div className={styles.user}>
                            <li><Link style={path == "/create" ? linkColorStyle.pink : linkColorStyle.unset} to="/create">Post Story</Link></li>
                            <li><a href="#" onClick={onLogout}>Logout</a></li>
                        </div>}
                </ul>
            </nav>
        </header>
    )
}