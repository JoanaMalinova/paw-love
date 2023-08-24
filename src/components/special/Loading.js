import styles from "../../styles/Loading.module.css";

export function Loading() {

    return (
        <div className={styles["loader-wrapper"]}>
            <div className={styles.loader}></div>
        </div>
    )
}