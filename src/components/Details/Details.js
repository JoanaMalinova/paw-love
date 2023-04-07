import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getPet } from '../../service/petService';
import { getComments } from "../../service/commentService";
import { PetProfile } from './PetProfile';
import { Comments } from './Comments';
import { CommentLikeContext } from '../../contexts/CommentLikeContext';
import styles from '../../styles/Details.module.css';
import { Loading } from '../special/Loading';
import { checkIfLiked, getLikeCount } from "../../service/likeService";
import { useAuth } from '../../hooks/useAuth';

export default function Details({ setPets, isLoading, setIsLoading }) {

    const [data, setData] = useState({});
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(0);

    const { petId } = useParams();

    const { userId } = useAuth();

    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        const petPomise = getPet(petId);
        const commentPromise = getComments(petId);
        const checkLikesPomise = checkIfLiked(petId, userId);
        const getLikesPromise = getLikeCount(petId);
        Promise.all([petPomise, commentPromise, checkLikesPomise, getLikesPromise])
            .then((res => {
                setData(res[0]);
                setComments(res[1]);
                setLiked(res[2]);
                setLikes(res[3]);
                setIsLoading(false);               
            }))
            .catch(() => {
                setIsLoading(false);
            });
    }, [petId, likes, liked])

    const context = {
        comments,
        setComments,
        likes,
        liked,
        setLiked,
        isLoading
    }

    const detailsCard = (<div className={styles["details-wrapper"]}>
        <div className={styles["profile-pic"]}>
            <img src={data.imageUrl} />
        </div>
        {location.pathname == `/pet-cave/${petId}` ?
            <PetProfile data={data} petId={petId} setPets={setPets} /> :
            <Comments data={data} />
        }
    </div>)

    return (
        <CommentLikeContext.Provider value={context}>
            {isLoading ? <Loading /> : detailsCard}
        </CommentLikeContext.Provider >
    )
}