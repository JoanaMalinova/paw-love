import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CommentLikeContext } from "../../contexts/CommentLikeContext";
import { useAuth } from "../../hooks/useAuth";
import { likePet } from "../../service/likeService";
import { CommentModal } from "./CommentModal";
import styles from '../../styles/Details.module.css';
import { DeleteModal } from "./DeleteModal";

export default function LikesAndButtons({ id, ownerId, petName, setPets }) {

    const navigate = useNavigate();

    const { user } = useAuth();

    const { comments, likes, liked, setLiked } = useContext(CommentLikeContext);

    const onDeleteClick = () => {
        const modal = document.getElementById("del-modal");
        const close = document.getElementsByClassName("close-delete")[0];
        modal.style.display = "block";
        close.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (ev) {
            if (ev.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    const onLike = async () => {
        const data = { petId: id };
        await likePet(data);
        setLiked(1);
    }

    const navigateToEdit = () => {
        navigate(`/pet-cave/${id}/edit`);
    }

    const onModalAppear = () => {
        const modal = document.getElementById("my-modal");
        const close = document.getElementsByClassName("comment-close")[0];
        modal.style.display = "block";
        close.onclick = function () {
            modal.style.display = "none";
        }
    }

    return (
        <div className={styles["like-div"]}>
            <div className={styles["likes-and-comments"]}>
                {likes == 1 ? <p> {likes} <span className="pink">like <i className="fa-solid fa-heart"></i></span></p>
                    : <p> {likes} <span className={`pink ${styles["comment-link"]}`}>likes <i className="fa-solid fa-thumbs-up"></i></span></p>}

                {comments.length === 1 ? <p> {comments.length} <Link to={`/pet-cave/${id}/comments`} ><span className="pink">comment </span><i className="fa-solid fa-comment"></i></Link></p> :
                    <p> {comments.length} <Link to={`/pet-cave/${id}/comments`} ><span className="pink">comments </span><i className="fa-solid fa-comment"></i></Link></p>}
            </div>
            {user &&
                <div className={styles["button-div"]}>
                    {ownerId == user?.uid ?
                        <div className={styles["edit-del-btn-wrapper"]}>
                            <button className="submit-btn" onClick={navigateToEdit}>Edit</button>
                            <button className="submit-btn" onClick={onDeleteClick} >Delete</button>
                        </div>
                        : liked ? <div className={styles["bottom-div"]}><p className={styles["add-comment"]} onClick={onModalAppear}>Add a comment <i className="fa-solid fa-comment"></i></p></div> :
                            <div className={styles["bottom-div"]}><p className={styles["add-comment"]} onClick={onLike}><i class="fa-solid fa-thumbs-up fa-xl"></i></p>
                                <p className={styles["add-comment"]} onClick={onModalAppear}><i className="fa-solid fa-comment fa-xl"></i></p></div>
                    }
                    <CommentModal id={id} />
                    <DeleteModal petName={petName} setPets={setPets} id={id} />
                </div>}
        </div>
    )
}