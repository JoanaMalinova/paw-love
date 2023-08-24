export function useFormValidation() {

    const validator = (data) => {

        const styledValues = [];
        let error = "";
        let inputIsEmpty = false;

        if (data.rePass) {

            if (data.rePass !== data.password) {
                error = "Password and confirm password don't match!";
                styledValues.push("password", "rePass");
            }

            if (data.username.length < 3) {
                error = "Username must be at least three letters long!";
                styledValues.push("userName");
            }
        }

        for (const key in data) {
            if (!data[key]) {
                inputIsEmpty = true;
                styledValues.push(key);
            }
        }

        if (inputIsEmpty) {
            error = "All fields are required!";
        }

        return { error, styledValues };
    }
    return validator;
}