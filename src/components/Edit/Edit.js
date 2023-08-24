import { getPet } from "../../service/petService";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import styles from "../../styles/Create.module.css";

export default function Edit({ onSubmitHandler }) {

    const { petId } = useParams();
    const { formValues, onChangeHandler, setFormValues, onSubmit, styledInputs, outlineStyle, message } = useForm({
        name: "",
        imageUrl: "",
        breed: "",
        gender: "",
        age: "",
        petStory: ""
    }, onSubmitHandler, petId);

    useEffect(() => {

        getPet(petId).then(res => setFormValues(res));

    }, [petId]);


    return (
        <div className={styles["create-wrapper"]}>
            <img src="https://photosfine.files.wordpress.com/2012/04/hamster-white-background-4.jpg?w=1200" alt="hamster" className={styles["hamster-img"]} />
            <form onSubmit={onSubmit}>
                <fieldset className={`${styles.field} ${styles["create-field"]}`}>
                    <legend>Did you mean to change anything?</legend>
                    <div className={styles["input-wrapper"]}>
                        <div className={styles["left-container"]}>
                            <div>
                                <label htmlFor="name">Pet Name:</label>
                                <input
                                    style={styledInputs.includes("name") ? outlineStyle.pink : outlineStyle.unset}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formValues.name}
                                    onChange={onChangeHandler} />
                            </div>
                            <div>
                                <label htmlFor="imageUrl">Picture:</label>
                                <input
                                    style={styledInputs.includes("name") ? outlineStyle.pink : outlineStyle.unset}
                                    type="text"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={formValues.imageUrl}
                                    onChange={onChangeHandler} />
                            </div>
                            <div>
                                <label htmlFor="breed">Breed:</label>
                                <input
                                    style={styledInputs.includes("name") ? outlineStyle.pink : outlineStyle.unset}
                                    type="text"
                                    id="breed"
                                    name="breed"
                                    value={formValues.breed}
                                    onChange={onChangeHandler} />
                            </div>
                            <div className={styles["gender-wrapper"]}>
                                <p>Gender:</p>
                                <label htmlFor="male">male</label>
                                <input
                                    style={styledInputs.includes("name") ? outlineStyle.pink : outlineStyle.unset}
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    checked={formValues.gender === "male"}
                                    value="male"
                                    onChange={onChangeHandler}
                                />
                                <label htmlFor="female">female</label>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    checked={formValues.gender === "female"}
                                    value="female"
                                    onChange={onChangeHandler}
                                />
                            </div>
                            <div>
                                <label htmlFor="age">Age:</label>
                                <input
                                    style={styledInputs.includes("name") ? outlineStyle.pink : outlineStyle.unset}
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={formValues.age}
                                    onChange={onChangeHandler}
                                />
                            </div>
                        </div>
                        <div className={styles["right-container"]}>
                            <label htmlFor="petStory">Pet Story:</label>
                            <textarea
                                style={styledInputs.includes("name") ? outlineStyle.pink : outlineStyle.unset}
                                name="petStory"
                                id="petStory"
                                cols="36"
                                rows="12"
                                placeholder="Whatever comes to mind. Don't be shy!"
                                value={formValues.petStory}
                                onChange={onChangeHandler}
                            >
                            </textarea>
                        </div>
                    </div>
                    <p className={styles.message}>{message}</p>
                    <button type="submit" className="submit-btn">Change Story</button>
                </fieldset>
            </form>
        </div>
    )
}