import styles from '../../styles/Details.module.css';

export function Comment({ comment }) {

    return (
        <li className={styles["comment-box"]}>
            <p>{comment}</p>
        </li>
    )
}      