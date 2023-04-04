import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getPet } from '../../service/petService';
import { getComments } from "../../service/commentService";
import { PetProfile } from './PetProfile';
import { Comments } from './Comments';
import { CommentContext } from '../../contexts/CommentContext';


export default function Details() {

    const [data, setData] = useState({});
    const [comments, setComments] = useState([]);

    const { petId } = useParams();

    const location = useLocation();

    useEffect(() => {
        getPet(petId).then((data) => setData(data));
        getComments(petId).then(res => setComments(res));
    }, [petId])

    const context = {
        comments, 
        setComments
    }

    return (
        <CommentContext.Provider value={context}>
            <div className="details-wrapper">
                <div className="profile-pic">
                    <img src={data.imageUrl} />
                </div>
                {location.pathname == `/pet-cave/${petId}` ?
                    <PetProfile data={data} petId={petId} /> :
                    <Comments data={data} />
                }
            </div>
        </CommentContext.Provider >
    )
}