import { navigationData } from "../../helpers/navigationData";
import { NavLink } from "./NavLink";

export const HorizontalNav = ({ user, path, styles}) => {

    return (       
        <nav>
            <ul>
                <li><NavLink path={path} currPath={navigationData.home} /></li>
                <li><NavLink path={path} currPath={navigationData.petCave} /></li>
                {!user ?
                    <div className={styles.guest}>
                        <li><NavLink path={path} currPath={navigationData.register} /></li>
                        <li><NavLink path={path} currPath={navigationData.login} /></li>
                    </div>
                    :
                    <div className={styles.user}>
                        <li><NavLink path={path} currPath={navigationData.create} /></li>
                        <li><NavLink path={path} currPath={navigationData.logout} /></li>
                    </div>
                }
            </ul>
        </nav>
    )
}