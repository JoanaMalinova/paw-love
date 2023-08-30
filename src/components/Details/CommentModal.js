import { useContext } from "react";
import { CommentLikeContext } from "../../contexts/CommentLikeContext";
import { useForm } from "../../hooks/useForm";
import { postComment } from "../../service/commentService";
import { history } from "../../helpers/history";

export function CommentModal({ id, userId, username }) {

    const { formValues, onChangeHandler } = useForm({});
    const { setComments } = useContext(CommentLikeContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const { comment } = formValues;

        const petId = id;

        setComments(state => [...state, comment]);

        postComment({ petId, comment, userId, username });

        history.navigate(`/pet-cave/${id}/comments`);
    }

    return (
        <div id="my-modal" className="modal comment-modal">
            <div>
                <span className="close comment-close">&times;</span>
                <h3>Your comment here:</h3>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="comment"></label>
                    <textarea
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="8"
                        value={formValues.comment || ""}
                        onChange={onChangeHandler}
                    >
                    </textarea>
                    <button type="submit" className="submit-btn">Comment</button>
                </form>
            </div>
        </div>
    )
}