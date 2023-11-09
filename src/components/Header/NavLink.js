import { headerStyles } from "../../helpers/dynamic-styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DropDownContext } from "../../contexts/DropdownDisplayContext";

export const NavLink = ({ path, currPath, styles, username }) => {

    const {setDropdownDisplay, mediaSize} = useContext(DropDownContext);

    const { linkColorStyle, underlineStyle } = headerStyles;
    const currStyle = path === "/my-cave" ? underlineStyle : linkColorStyle;

    const onClick = ()=>{
        
        if(mediaSize === "smaller"){
            setDropdownDisplay("none")
        }      
    }

    return (
        <Link
            onClick={onClick}
            style={path === currPath.path ? currStyle.active : currStyle.none}
            to={currPath.path}
            className={currPath.path === "/my-cave" ? styles["user-greet"] : ""}
        >{currPath.path === "/my-cave" ? username + 's cave' : currPath.name}</Link>
    )
}
