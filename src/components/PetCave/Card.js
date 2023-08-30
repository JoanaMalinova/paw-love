import styles from "../../styles/PetCave.module.css";
import { history } from '../../helpers/history';

export default function Card({ pet }) {

    const onClickHandler = () => {

        history.navigate(`/pet-cave/${pet.petId}`);
    }

    return (
        <div className={styles.card} onClick={onClickHandler} >
            <img src={pet.imageUrl} alt={pet.name} />
            <div className={styles["short-info-wrapper"]}>
                <h3>{pet.name}</h3>
                <ul>
                    <li><i className="fa-solid fa-paw"></i><span className="pink bold">Breed:</span> {pet.breed}</li>
                    <li><i className="fa-solid fa-paw"></i><span className="pink bold">Age:</span> {pet.age} </li>
                    <li><i className="fa-solid fa-paw"></i><span className="pink bold">Gender:</span> {pet.gender} </li>
                </ul>
            </div>
        </div>
    )
}