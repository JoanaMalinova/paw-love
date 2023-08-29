import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getPet } from '../../service/petService';
import { PetProfile } from './PetProfile';
import { Comments } from './Comments';
import { CommentLikeContext } from '../../contexts/CommentLikeContext';
import styles from '../../styles/Details.module.css';
import { Loading } from '../special/Loading';
import { useAuth } from '../../hooks/useAuth';


export default function Details({ setPets, isLoading, setIsLoading }) {

    const [data, setData] = useState({});
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(0);

    const { petId } = useParams();

    const { user } = useAuth();

    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        getPet(petId)
            .then((res => {
                setData(res);
                setComments(res.comments);
                setLikes(res.likes);
                setIsLoading(false);
            }))
            .catch((err) => {
                setIsLoading(false);
                console.log(err.message);
            });
    }, [petId])

    const context = {
        comments,
        setComments,
        likes,
        setLikes
    }

    const detailsCard = (
        <div className={styles["outer-wrapper"]}>
            <div className={styles["details-wrapper"]}>
                <div className={styles["profile-pic"]}>
                    <img src={data.imageUrl} />
                </div>
                {location.pathname == `/pet-cave/${petId}` ?
                    <PetProfile data={data} petId={petId} setPets={setPets} userId={user?.uid} username={user?.displayName} /> :
                    <Comments data={data} />
                }
            </div>
        </div>
    )

    return (
        <CommentLikeContext.Provider value={context}>
            {isLoading ? <Loading /> : detailsCard}
        </CommentLikeContext.Provider >
    )
}