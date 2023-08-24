import { useContext, useEffect, useState } from "react";
import { getMy } from "../../service/petService";
import Card from "../PetCave/Card";
import styles from "../../styles/PetCave.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { Loading } from "../special/Loading";


export default function MyCave({ isLoading, setIsLoading }) {

    const [myPets, setMyPets] = useState([]);
    const auth = useContext(AuthContext);
    
    const userId = auth.userId;

    useEffect(() => {
        
        setIsLoading(true);       
        getMy(userId)
            .then(result => {
                setMyPets(result);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            })
    }, []);

    const cave = (<div className={styles["cave-wrapper"]}>
        {(myPets && myPets.length) ? myPets.map(pet => <Card key={pet._id} pet={pet} />) : <p className={styles["no-story-yet"]}>No stories yet</p>}
    </div>);

    return (
        <div className={styles["main-wrapper"]}>
            {isLoading ? <Loading /> : cave}
        </div>
    )
}