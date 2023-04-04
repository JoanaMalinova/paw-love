import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CommentContext } from "../../contexts/CommentContext";
import { useForm } from "../../hooks/useForm";
import { postComment } from "../../service/commentService";

export function Modal({ id }) {

    const { formValues, onChangeHandler } = useForm({});
    const { setComments } = useContext(CommentContext);
    const navigate = useNavigate()

    const onSubmitHandler =  (e) => {
        e.preventDefault();
        const { comment } = formValues;
        
        const petId = id;

        setComments(state => [...state, comment]);

        postComment({ petId, comment });

        navigate(`/pet-cave/${id}/comments`);
    }

    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
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