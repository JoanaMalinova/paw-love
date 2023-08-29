import { useForm } from '../../hooks/useForm';
import Description from './Description';
import styles from '../../styles/Create.module.css';
import { useAuth } from '../../hooks/useAuth';

export default function CreatePost({ submitHandler }) {

    const { user } = useAuth();

    const { formValues, onChangeHandler, styledInputs, onSubmit, outlineStyle, message } = useForm({
        name: "",
        imageUrl: "",
        breed: "",
        gender: "",
        age: "",
        petStory: ""
    }, submitHandler, user?.uid);

    const data = formValues;

    return (
        <div className={styles["create-wrapper"]}>
            <img src="images/guinea pig-create.png" alt="guinea-pig" className={styles["quinea-pig-img"]} />
            <div className={styles["central-wrapper"]}>
                <Description />
                <form onSubmit={onSubmit} className={styles.field}>
                    <fieldset className={styles["create-field"]}>
                        <div className={styles["left-container"]}>
                            <div className={styles["inner-div"]}>
                                <label htmlFor="name">Pet Name:</label>
                                <input
                                    style={styledInputs.includes("name") ? outlineStyle.pink : outlineStyle.unset}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={onChangeHandler} />
                            </div>
                            <div className={styles["inner-div"]}>
                                <label htmlFor="imageUrl">Picture:</label>
                                <input
                                    style={styledInputs.includes("imageUrl") ? outlineStyle.pink : outlineStyle.unset}
                                    type="text"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={data.imageUrl}
                                    onChange={onChangeHandler} />
                            </div>
                            <div className={styles["inner-div"]}>
                                <label htmlFor="breed">Breed:</label>
                                <input
                                    style={styledInputs.includes("breed") ? outlineStyle.pink : outlineStyle.unset}
                                    type="text"
                                    id="breed"
                                    name="breed"
                                    value={data.breed}
                                    onChange={onChangeHandler} />
                            </div>
                            <div className={styles["gender-wrapper"]}>
                                <p>Gender:</p>
                                <label htmlFor="male">male</label>
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    checked={data.gender === "male"}
                                    onChange={onChangeHandler} />
                                <label htmlFor="female">female</label>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    checked={data.gender === "female"}
                                    onChange={onChangeHandler}
                                />
                            </div>
                            <div className={styles["inner-div"]}>
                                <label htmlFor="age">Age:</label>
                                <input
                                    style={styledInputs.includes("age") ? outlineStyle.pink : outlineStyle.unset}
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={data.age}
                                    onChange={onChangeHandler} />
                            </div>
                        </div>
                        <div className={styles["right-container"]}>
                            <label htmlFor="petStory">Pet Story:</label>
                            <textarea
                                style={styledInputs.includes("petStory") ? outlineStyle.pink : outlineStyle.unset}
                                name="petStory"
                                id="petStory"
                                cols="38"
                                rows="13"
                                placeholder="Whatever comes to mind. Don't be shy!"
                                value={data.petStory}
                                onChange={onChangeHandler} >
                            </textarea>
                        </div>
                    </fieldset>
                    <p className={styles.message}>{message}</p>
                    <button type="submit" className="submit-btn">Create Story</button>
                </form>
            </div>
            <img src="images/bunny-create.png" alt="bunny" className={styles["bunny-img"]} />
        </div>
    )
}