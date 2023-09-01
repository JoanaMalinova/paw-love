import { deleteStory } from "../../service/petService";
import { history } from "../../helpers/history";
import styles from "../../styles/Modal.module.css"

export function DeleteModal({ petName, setPets, id, setDisplay, display }) {

    const onCloseClick = () => {
        setDisplay('none');
    }

    const onDeleteClick = async () => {
        await deleteStory(id);

        setPets(state => state.filter((curr) => curr._id !== id));

        setDisplay('none');

        history.navigate('/pet-cave');
    }

    return (
        <div className={`${styles.modal} ${styles["delete-modal"]}`} style={{ "display": display }} onClick={onCloseClick}>
            <div className={styles["modal-content"]} onClick={e => e.stopPropagation()} >
                <span className={`${styles.close} ${styles["close-delete"]}`} onClick={onCloseClick}>&times;</span>
                <div className={styles["flex-div"]}>
                    <h3>{`Are you sure you want to delete ${petName}'s story? `}</h3>
                    <div className={styles["del-cancel-div"]}>
                        <button className="submit-btn" onClick={onDeleteClick}>Delete</button>
                        <button className="submit-btn " onClick={onCloseClick}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}