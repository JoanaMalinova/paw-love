import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CommentContext } from "../../contexts/CommentContext";
import { useAuth } from "../../hooks/useAuth";
import { checkIfLiked, getLikeCount, likePet } from "../../service/likeService";
import { deleteStory } from "../../service/petService";
import { Modal } from "./Modal";


export default function LikesAndButtons({ id, ownerId, petName }) {

    const [likes, setLikes] = useState(0);

    const [liked, setLiked] = useState(0);

    const navigate = useNavigate();

    const { userId } = useAuth();

    const { comments } = useContext(CommentContext);   

    useEffect(() => {
        checkIfLiked(id, userId)
            .then(res => setLiked(res));

        getLikeCount(id)
            .then(res => setLikes(res));
    }, [id, likes, liked])

    const onDeleteClick = () => {

        let confirmed = window.confirm(`Are you sure you want to delete ${petName}'s story? `);
        if (confirmed) {
            deleteStory(id);
            navigate('/pet-cave');
        }
        //  delete from state

    }

    const onLike = async () => {

        const data = { petId: id };
        await likePet(data);
        setLiked(1);

    }

    const navigateToEdit = () => {

        navigate(`/pet-cave/${id}/edit`)

    }

    const onModalAppear = () => {
        const modal = document.getElementById("myModal");
        const close = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        close.onclick = function () {
            modal.style.display = "none";
        }
    }

    return (
        <div className="like-div">
            <div className="likes-and-comments">
                {likes == 1 ? <p> {likes} <span className="pink">like <i className="fa-solid fa-heart"></i></span></p>
                    : <p> {likes} <span className="pink comment-link">likes <i className="fa-solid fa-heart"></i></span></p>}

                {comments.length === 1 ? <p> {comments.length} <Link to={`/pet-cave/${id}/comments`} ><span className="pink">comment </span><i className="fa-solid fa-comment"></i></Link></p> :
                    <p> {comments.length} <Link to={`/pet-cave/${id}/comments`} ><span className="pink">comments </span><i className="fa-solid fa-comment"></i></Link></p>}

            </div>
            {userId &&
                <div className="button-div">
                    {ownerId == userId ?
                        <div className="edit-del-btn-wrapper">
                            <button className="submit-btn" onClick={navigateToEdit}>Edit</button>
                            <button className="submit-btn" onClick={onDeleteClick} >Delete</button>
                        </div>
                        : liked ? <div className="bottom-div"><p className="add-comment" onClick={onModalAppear}>Add a comment <i className="fa-solid fa-comment"></i></p></div> : <div className="bottom-div"><button className="submit-btn like-btn" onClick={onLike}>Like <i className="fa-solid fa-heart"></i></button>
                            <p className="add-comment" onClick={onModalAppear}>Add a comment <i className="fa-solid fa-comment"></i></p></div>
                    }
                    <Modal id={id} />
                </div>}
        </div>
    )
}