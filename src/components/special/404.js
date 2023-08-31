import styles from "../../styles/Error.module.css"

export default function NotFound() {

    return (
        <div className={styles["error-wrapper"]}>
            <h1 className={styles["error-heading"]}>Oops!</h1>
            <p className={styles["error-message"]}>Something went wrong! Try again! </p>
            <img src="https://media.istockphoto.com/id/1255172232/photo/kitten-and-a-pile-of-gnawed-wires.jpg?s=612x612&w=0&k=20&c=xbgLeoHxb3sN8gvu-u-hAxwWlr-XUNXNCWP9dpYijCg=" alt="cats-cables" />
        </div>
    )
}