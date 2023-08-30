import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import { useAuth } from "../../hooks/useAuth";
import { history } from "../../helpers/history";

export default function Header() {

    const { user } = useAuth();

    const path = history.location.pathname;

    const onLogoClickHandler = () => {
        history.navigate("/");
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
            {user &&
                <Link style={path === "/my-cave" ? underlineStyle.undrelined : linkColorStyle.none} to="/my-cave" className={styles["user-greet"]}>{user?.displayName}'s cave</Link>}
            <nav >
                <ul>
                    <li><Link style={path === "/" ? linkColorStyle.pink : linkColorStyle.unset} to="/" className={styles["home-link"]} >Home</Link></li>
                    <li><Link style={path === "/pet-cave" ? linkColorStyle.pink : linkColorStyle.unset} to="/pet-cave">PetCave</Link></li>
                    {!user ? <div className={styles.guest}>
                        <li><Link style={path === "/register" ? linkColorStyle.pink : linkColorStyle.unset} to="/register">Register</Link></li>
                        <li><Link style={path === "/login" ? linkColorStyle.pink : linkColorStyle.unset} to="/login">Login</Link></li>
                    </div> :
                        <div className={styles.user}>
                            <li><Link style={path === "/create" ? linkColorStyle.pink : linkColorStyle.unset} to="/create">Post Story</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </div>}
                </ul>
            </nav>
        </header>
    )
}