import { editStory, getPet } from "../../service/petService";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export default function Edit({ setPets }) {

    const { petId } = useParams();

    const navigate = useNavigate();

    const { formValues, onChangeHandler, setFormValues } = useForm({});
    
    useEffect(() => {

        getPet(petId).then(res => setFormValues(res));

    }, [petId]);

    const onSubmitHandler = async (e) => {

        e.preventDefault();

        const result = await editStory(petId, formValues);

        setPets(state => state.map(curr=> curr._id=== formValues._id ? result: curr));

        navigate(`/pet-cave/${petId}`);

    };

    return (
        <div className="create-wrapper">
            <img src="https://photosfine.files.wordpress.com/2012/04/hamster-white-background-4.jpg?w=1200" alt="hamster" className="hamster-img" />
            <form onSubmit={onSubmitHandler}>
                <fieldset className="field create-field">
                    <legend>Did you mean to change anything?</legend>
                    <div className="left-container">
                        <div>
                            <label htmlFor="name">Pet Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formValues.name || ""}
                                onChange={onChangeHandler} />
                        </div>
                        <div>
                            <label htmlFor="imageUrl">Picture:</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                value={formValues.imageUrl || ""}
                                onChange={onChangeHandler} />
                        </div>
                        <div>
                            <label htmlFor="breed">Breed:</label>
                            <input
                                type="text"
                                id="breed"
                                name="breed"
                                value={formValues.breed || ""}
                                onChange={onChangeHandler} />
                        </div>
                        <div className="gender-wrapper">
                            <p>Gender:</p>
                            <label htmlFor="male">male</label>
                            <input
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
                                type="number"
                                id="age"
                                name="age"
                                value={formValues.age || ""}
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="right-container">
                        <label htmlFor="petStory">Pet Story:</label>
                        <textarea
                            name="petStory"
                            id="petStory"
                            cols="36"
                            rows="12"
                            placeholder="Whatever comes to mind. Don't be shy!"
                            value={formValues.petStory || ""}
                            onChange={onChangeHandler}
                        >
                        </textarea>
                    </div>
                    <button type="submit" className="submit-btn">Change Story</button>
                </fieldset>
            </form>
        </div>
    )
}