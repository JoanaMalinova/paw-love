import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.css";
import { useAuth } from "../../hooks/useAuth";
import { history } from "../../helpers/history";
import { headerStyles } from "../../helpers/dynamic-styles";
import { HorizontalNav } from "./HorizontalNav";

export default function Header() {

    const { user } = useAuth();

    const path = history.location.pathname;

    const { underlineStyle } = headerStyles;

    const onLogoClickHandler = () => {
        history.navigate("/");
    }

    return (
        <header >
            <div className={styles.logo} onClick={onLogoClickHandler}>
                <img src="http://localhost:3000/images/logo.png" alt="paw-love-logo" />
                <p><span className="green">PAW</span><span className="pink">Love</span></p>
            </div>
            {user &&
                <Link style={path === "/my-cave" ? underlineStyle.undrelined : underlineStyle.none} to="/my-cave" className={styles["user-greet"]}>{user?.displayName}'s cave</Link>}
            <HorizontalNav user={user} path={path} styles={styles} />
        </header>
    )
}