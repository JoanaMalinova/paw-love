import { Comment } from './Comment';
import { useContext } from 'react';
import { CommentLikeContext } from '../../contexts/CommentLikeContext';
import styles from '../../styles/Details.module.css';

export function Comments({ data }) {

    const { comments } = useContext(CommentLikeContext);

    return (
        <div className={styles["details-info-wrapper"]}>
            <h1>{data.name}</h1>
            <div className={styles["comments-div"]}>
                {comments?.length ?
                    <ul className={styles["comment-holder"]}>
                        {comments.map((curr) => <Comment
                            key={curr._id}
                            comment={curr.comment}
                            username={curr.username}
                            created={curr.created.toDate().toDateString()}
                        />)}
                    </ul>
                    :
                    <p className={styles["no-comments"]}>No Comments yet</p>
                }
            </div>
        </div>
    )
}