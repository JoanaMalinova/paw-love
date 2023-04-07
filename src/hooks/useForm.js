import { useState } from "react";

export function useForm(initialValues, onSubmitHandler) {

    const [formValues, setFormValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormValues(values => ({ ...values, [name]: value }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await onSubmitHandler(formValues);
    }

    return { formValues, onChangeHandler, onSubmit, setFormValues  };
}