import styles from '../../styles/Details.module.css';

export function Comment({ comment, username, created }) {

    return (
        <li className={styles['comment-list-item']}>
            <span className={styles['username']}>{username}:</span>
            <div className={styles["comment-box"]}>
                <p className={styles['main']}><span className={styles['comment']}>{comment}</span></p>
                <p className={styles['sub']}>{created}</p>
            </div>
        </li>
    )
}      