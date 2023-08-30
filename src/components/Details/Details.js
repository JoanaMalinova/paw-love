import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPet } from '../../service/petService';
import { PetProfile } from './PetProfile';
import { Comments } from './Comments';
import { CommentLikeContext } from '../../contexts/CommentLikeContext';
import styles from '../../styles/Details.module.css';
import { Loading } from '../special/Loading';
import { useAuth } from '../../hooks/useAuth';
import { checkIfLiked } from '../../service/likeService';
import { history } from '../../helpers/history';


export default function Details({ setPets, isLoading, setIsLoading }) {

    const [data, setData] = useState({});
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(0);

    const { petId } = useParams();

    const { user } = useAuth();

    useEffect(() => {
        setIsLoading(true);
        getPet(petId)
            .then((res) => {
                setData(res);
                if (res.comments) {
                    setComments(res.comments);
                }
                setLikes(res.likes);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err.message);
                history.navigate('/error');
            });

        if (user) {

            checkIfLiked({ userId: user.uid, petId })
                .then((res) => {
                    setLiked(res)
                })
                .catch((err) => {
                    setIsLoading(false);
                    console.log(err.message);
                    history.navigate('/error');
                });
        }
    }, [petId, user])

    const context = {
        comments,
        setComments,
        likes,
        liked,
        setLikes,
        setLiked
    }

    const detailsCard = (
        <div className={styles["outer-wrapper"]}>
            <div className={styles["details-wrapper"]}>
                <div className={styles["profile-pic"]}>
                    <img src={data.imageUrl} alt={data.name} />
                </div>
                {history.location.pathname === `/pet-cave/${petId}` ?
                    <PetProfile
                        data={data}
                        petId={petId}
                        setPets={setPets}
                        userId={user?.uid}
                        username={user?.displayName} /> :
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