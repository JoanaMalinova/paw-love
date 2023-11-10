import { useContext } from "react";
import { CommentLikeContext } from "../../contexts/CommentLikeContext";
import { useForm } from "../../hooks/useForm";
import { postComment } from "../../service/commentService";
import { history } from "../../helpers/history";
import styles from "../../styles/Modal.module.css"

export function CommentModal({ id, userId, username, display, setDisplay }) {

    const { formValues, onChangeHandler } = useForm({});
    const { setComments } = useContext(CommentLikeContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        setDisplay('none');

        const { comment } = formValues;

        const petId = id;

        setComments(state => [...state, comment]);

        postComment({ petId, comment, userId, username });

        history.navigate(`/pet-cave/${id}/comments`);
    }

    const onCloseClick = (ev) => {
        if (ev.target === ev.currentTarget) {
            // ev.stopPropagation();
            setDisplay('none');
        }       
    }

    return (
        <div className={styles["outer-wrapper"]} onClick={onCloseClick} style={{ "display": display }}>
            <div className={`${styles.modal} ${styles["comment-modal"]}`} style={{ "display": display }}>
                <div>
                    <span className={`${styles.close} ${styles["comment-close"]}`} onClick={onCloseClick}>&times;</span>
                    <h3>Your comment here:</h3>
                    <form onSubmit={onSubmitHandler}>
                        <label htmlFor="comment" />
                        <textarea
                            name="comment"
                            id="comment"                           
                            value={formValues.comment || ""}
                            onChange={onChangeHandler}
                        >
                        </textarea>
                        <button type="submit" className="submit-btn">Comment</button>
                    </form>
                </div>
            </div>
        </div>
    )
}