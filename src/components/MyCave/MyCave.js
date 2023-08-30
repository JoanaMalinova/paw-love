import { useEffect, useState } from "react";
import { getMy } from "../../service/petService";
import Card from "../PetCave/Card";
import styles from "../../styles/PetCave.module.css";
import { Loading } from "../special/Loading";
import { useAuth } from "../../hooks/useAuth";
import { history } from "../../helpers/history";


export default function MyCave({ isLoading, setIsLoading }) {

    const [myPets, setMyPets] = useState([]);
    const { user } = useAuth();

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
                    history.navigate('/error');
                })
        }
    }, [user]);

    const cave = (<div className={styles["cave-wrapper"]}>
        {(myPets && myPets.length) ? myPets.map(pet => <Card key={pet.petId} pet={pet} />) :
            <div>
                <p className={styles["no-story-yet"]}>No stories yet</p>
                <img className={styles["no-story-img"]} src="https://media.istockphoto.com/id/1494171370/photo/isolated-puppy-sleeping.webp?b=1&s=170667a&w=0&k=20&c=wfRYrVsiX2s0T28v0GN4awvsgjFi0IixN6vkn3r1OI8=" alt="sleeping dog" />
            </div>}
    </div>);

    return (
        <div className={styles["main-wrapper"]}>
            {isLoading ? <Loading /> : cave}
        </div>
    )
}