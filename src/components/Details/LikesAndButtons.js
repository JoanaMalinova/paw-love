import { useContext } from "react";
import { Link } from "react-router-dom";
import { CommentLikeContext } from "../../contexts/CommentLikeContext";
import { useAuth } from "../../hooks/useAuth";
import { likePet } from "../../service/likeService";
import { CommentModal } from "./CommentModal";
import styles from '../../styles/Details.module.css';
import { DeleteModal } from "./DeleteModal";
import { history } from "../../helpers/history";
import { useState } from "react";


export default function LikesAndButtons({ id, ownerId, petName, setPets, userId, username }) {

    const { user } = useAuth();

    const { comments, likes, liked, setLiked, setLikes } = useContext(CommentLikeContext);

    const [commDisplay, setCommDisplay] = useState("none");
    const [delDisplay, setDelDisplay] = useState("none");

    const onLikeClick = async () => {
        const data = { petId: id, userId };
        const isLiked = await likePet(data);

        setLiked(isLiked);
        if (liked) {
            setLikes(curr => curr - 1);
        } else {
            setLikes(curr => curr + 1);
        }
    }

    const onCommentClick = () => {
        setCommDisplay("block");
    }

    const onEditClick = () => {
        history.navigate(`/pet-cave/${id}/edit`);
    }

    const onDeleteClick = () => {
        setDelDisplay("block");
    }

    const likeColorStyle = {
        lighter: {
            opacity: 0.6
        },
        normal: {
            opacity: 1
        }
    }


    return (
        <div className={styles["like-div"]}>
            <div className={styles["likes-and-comments"]}>
                {likes === 1 ? <p> {likes} <span className="pink">like <i className="fa-solid fa-thumbs-up"></i></span></p>
                    : <p> {likes} <span className={`pink ${styles["comment-link"]}`}>likes <i className="fa-solid fa-thumbs-up"></i></span></p>}

                {comments.length === 1 ? <p> {comments.length} <Link to={`/pet-cave/${id}/comments`} ><span className="pink">comment </span><i className="fa-solid fa-comment"></i></Link></p> :
                    <p> {comments.length} <Link to={`/pet-cave/${id}/comments`} ><span className="pink">comments </span><i className="fa-solid fa-comment"></i></Link></p>}
            </div>
            {user &&
                <div className={styles["button-div"]}>
                    {ownerId === user?.uid ?
                        <div className={styles["edit-del-btn-wrapper"]}>
                            <button className="submit-btn" onClick={onEditClick}>Edit</button>
                            <button className="submit-btn" onClick={onDeleteClick} >Delete</button>
                        </div>
                        :
                        <div className={styles["bottom-div"]}><p className={styles["add-comment"]} onClick={onLikeClick}><i className="fa-solid fa-thumbs-up fa-xl" style={liked ? likeColorStyle.lighter : likeColorStyle.normal}></i></p>
                            <p className={styles["add-comment"]} onClick={onCommentClick}><i className="fa-solid fa-comment fa-xl"></i></p></div>
                    }
                    <CommentModal id={id} userId={userId} username={username} display={commDisplay} setDisplay={setCommDisplay} />
                    <DeleteModal petName={petName} setPets={setPets} id={id} display={delDisplay} setDisplay={setDelDisplay} />
                </div>}
        </div>
    )
}