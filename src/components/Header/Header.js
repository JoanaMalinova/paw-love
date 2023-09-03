import styles from "../../styles/Header.module.css";
import { useAuth } from "../../hooks/useAuth";
import { history } from "../../helpers/history";
import { HorizontalNav } from "./HorizontalNav";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { navigationData } from "../../helpers/navigationData";
import { useState } from "react";

export default function Header() {

    const [dropdownDisplay, setDropdownDisplay] = useState("flex");

    const { user } = useAuth();

    const path = history.location.pathname;

    const mql = window.matchMedia("(max-width: 1000px)");

    mql.onchange = (e) => {
        if (e.matches) {
            setDropdownDisplay("none")
        } else {
            setDropdownDisplay("flex")
        }
    }

    const onLogoClick = () => {
        history.navigate("/");
    }

    const onDropdownClick = () => {

        if (dropdownDisplay === "none") {
            setDropdownDisplay("flex");
        } else {
            setDropdownDisplay("none");
        }
    }

    return (
        <header >
            <Logo onLogoClick={onLogoClick} styles={styles} />
            <button onClick={onDropdownClick}>{dropdownDisplay === 'flex' ? <i className="fa-solid fa-angles-up fa-xl"></i> : <i className="fa-solid fa-angles-down fa-xl"></i>}</button>
            <div className={styles["drop-down"]} style={{ "display": dropdownDisplay }}>
                {user &&
                    <NavLink path={path} currPath={navigationData['myCave']} styles={styles} username={user.displayName} />}
                <HorizontalNav user={user} path={path} styles={styles} />
            </div>
        </header>
    )
}
