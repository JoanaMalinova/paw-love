import { navigationData } from "../../helpers/navigationData";
import { headerStyles } from "../../helpers/dynamic-styles";
import { Link } from "react-router-dom";

export const HorizontalNav = ({ user, path, styles }) => {
    const { linkColorStyle } = headerStyles;

    return (
        <nav>
            <ul>
                <li><Link style={path === navigationData.home ? linkColorStyle.pink : linkColorStyle.unset} to={navigationData.home} className={styles["home-link"]} >Home</Link></li>
                <li><Link style={path === navigationData.petCave ? linkColorStyle.pink : linkColorStyle.unset} to={navigationData.petCave}>PetCave</Link></li>
                {!user ? <div className={styles.guest}>
                    <li><Link style={path === navigationData.register ? linkColorStyle.pink : linkColorStyle.unset} to={navigationData.register}>Register</Link></li>
                    <li><Link style={path === navigationData.login ? linkColorStyle.pink : linkColorStyle.unset} to={navigationData.login}>Login</Link></li>
                </div> :
                    <div className={styles.user}>
                        <li><Link style={path === navigationData.create ? linkColorStyle.pink : linkColorStyle.unset} to={navigationData.create}>Post Story</Link></li>
                        <li><Link to={navigationData.logout}>Logout</Link></li>
                    </div>}
            </ul>
        </nav>
    )
}