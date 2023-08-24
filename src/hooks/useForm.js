import { useState } from "react";
import { useFormValidation } from "./useFormValidation";

export function useForm(initialValues, onSubmitHandler, userId, petId) {

    const [formValues, setFormValues] = useState(initialValues);
    const [styledInputs, setStyledInputs] = useState([]);
    const [message, setMessage] = useState("");
    const validator = useFormValidation();


    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormValues(values => ({ ...values, [name]: value }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const { error, styledValues } = validator(formValues);
        setStyledInputs(styledValues);
        setMessage(error);

        if (!styledValues.length) {
            const result = await onSubmitHandler(formValues, userId, petId);
            if (result === "Login or password don't match") {
                setMessage(result);
            }
        }
    }

    const outlineStyle = {
        pink: {
            outline: "none!important",
            border: "3px solid #ea2879"
        }
    }

    return {
        formValues,
        onChangeHandler,
        onSubmit,
        setFormValues,
        styledInputs,
        message,
        outlineStyle
    };
}