import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "../../styles/Home.module.css";

export default function Home() {

    const { user } = useAuth();

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h1>You <span className="pink">love</span> your pet?
                    We would <span className="pink">love</span> to know more about it!
                </h1>
                <h2 className="pink">A community to share and care</h2>
                {!user && <h3><Link to="/register">join us now</Link></h3>}
            </div>
            <div className={styles["img-holder"]}>
                <img src="images/pngwing.com.png" alt="dog-cat-kissing" />
            </div>
        </div>
    )
}