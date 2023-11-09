import styles from "../../styles/Header.module.css";
import { useAuth } from "../../hooks/useAuth";
import { history } from "../../helpers/history";
import { HorizontalNav } from "./HorizontalNav";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { navigationData } from "../../helpers/navigationData";
import { useEffect, useState } from "react";
import { DropDownContext } from "../../contexts/DropdownDisplayContext";

export default function Header() {

    const [dropdownDisplay, setDropdownDisplay] = useState("flex");
    const [mediaSize, setMediaSize] = useState("");

    const { user } = useAuth();

    useEffect(() => {
        
        if (window.innerWidth < 1000) {
            setMediaSize("smaller");
            setDropdownDisplay("none");
        } else {
            setMediaSize("larger");
            setDropdownDisplay("flex");
        }

    }, [mediaSize]);    
   
    const path = history.location.pathname;

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
        <DropDownContext.Provider value={{ setDropdownDisplay, mediaSize }}>
            <header >
                <Logo onLogoClick={onLogoClick} styles={styles} />
                <button onClick={onDropdownClick}>{dropdownDisplay === 'flex' ? <i className="fa-solid fa-angles-up fa-xl"></i> : <i className="fa-solid fa-angles-down fa-xl"></i>}</button>
                <div className={styles["drop-down"]} style={{ "display": dropdownDisplay }}>
                    {user &&
                        <NavLink
                            path={path}
                            currPath={navigationData['myCave']}
                            styles={styles}
                            username={user.displayName}
                        />
                    }
                    <HorizontalNav user={user} path={path} styles={styles} />
                </div>
            </header>
        </DropDownContext.Provider>
    )
}
