import { deleteStory } from "../../service/petService";
import { history } from "../../helpers/history";

export function DeleteModal({ petName, setPets, id }) {

    const getConfirmation = async (ev) => {
        let confirmed;
        if (ev.target.classList.contains("confirm-delete")) {
            confirmed = true;
        } else {
            confirmed = false;
        }
        if (confirmed) {
            await deleteStory(id);
            setPets(state => state.filter((curr) => curr._id !== id));
            history.navigate('/pet-cave');
        } else {
            ev.currentTarget.style.display = "none";
        }
    }

    return (
        <div id="del-modal" className="modal delete-modal" onClick={getConfirmation}>
            <div className="modal-content">
                <span className="close close-delete">&times;</span>
                <div className="flex-div">
                    <h3>{`Are you sure you want to delete ${petName}'s story? `}</h3>
                    <div className="del-cancel-div">
                        <button className="confirm-delete submit-btn">Delete</button>
                        <button className="cancel-delete submit-btn">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}