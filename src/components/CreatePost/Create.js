import { useForm } from '../../hooks/useForm';
import Description from './Description';
import styles from '../../styles/Create.module.css';

export default function CreatePost({ submitHandler }) {

    const { formValues, onChangeHandler, styledInputs, onSubmit, outlineStyle, message } = useForm({
        name: "",
        imageUrl: "",
        breed: "",
        gender: "",
        age: "",
        petStory: ""
    }, submitHandler);

    const data = formValues; 

    return (

        <div className={styles["create-wrapper"]}>
            <img src="images/guinea pig-create.png" alt="guinea-pig" className={styles["quinea-pig-img"]} />
            <Description />
            <form onSubmit={onSubmit}>
                <fieldset className={`${styles.field} ${styles["create-field"]}`}>
                    <div className={styles["input-wrapper"]}>
                        <div className={styles["left-container"]}>
                            <div>
                                <label htmlFor="name">Pet Name:</label>
                                <input
                                    style={styledInputs.includes("name") ? outlineStyle.pink : outlineStyle.unset}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={onChangeHandler} />
                            </div>
                            <div>
                                <label htmlFor="imageUrl">Picture:</label>
                                <input
                                    style={styledInputs.includes("imageUrl") ? outlineStyle.pink : outlineStyle.unset}
                                    type="text"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={data.imageUrl}
                                    onChange={onChangeHandler} />
                            </div>
                            <div>
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
                            <div>
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
                                cols="36"
                                rows="12"
                                placeholder="Whatever comes to mind. Don't be shy!"
                                value={data.petStory}
                                onChange={onChangeHandler} >
                            </textarea>
                        </div>                        
                    </div>  
                    <p className={styles.message}>{message}</p>              
                    <button type="submit" className="submit-btn">Create Story</button>
                </fieldset>
            </form>
            <img src="images/bunny-create.png" alt="bunny" className={styles["bunny-img"]} />
        </div>
    )
}