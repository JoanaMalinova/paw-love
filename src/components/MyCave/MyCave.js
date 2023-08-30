import { useEffect, useState } from "react";
import { getMy } from "../../service/petService";
import Card from "../PetCave/Card";
import styles from "../../styles/PetCave.module.css";
import { Loading } from "../special/Loading";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


export default function MyCave({ isLoading, setIsLoading }) {

    const [myPets, setMyPets] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        if (user) {
            getMy(user.uid)
                .then(result => {
                    setMyPets(result);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err.message);
                    setIsLoading(false);
                    navigate('/error');
                })
        }
    }, [user]);

    const cave = (<div className={styles["cave-wrapper"]}>
        {(myPets && myPets.length) ? myPets.map(pet => <Card key={pet.petId} pet={pet} />) : <p className={styles["no-story-yet"]}>No stories yet</p>}
    </div>);

    return (
        <div className={styles["main-wrapper"]}>
            {isLoading ? <Loading /> : cave}
        </div>
    )
}