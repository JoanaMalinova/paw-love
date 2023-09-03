import { headerStyles } from "../../helpers/dynamic-styles";
import { Link } from "react-router-dom";

export const NavLink = ({ path, currPath, styles, username }) => {

    const { linkColorStyle, underlineStyle } = headerStyles;
    const currStyle = path === "/my-cave" ? underlineStyle : linkColorStyle;

    return (
        <Link
            style={path === currPath.path ? currStyle.active : currStyle.none}
            to={currPath.path}
            className={currPath.path === "/my-cave" ? styles["user-greet"] : ""}
        >{currPath.path === "/my-cave" ? username + 's cave' : currPath.name}</Link>
    )
}
