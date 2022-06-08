import * as yup from "yup";

const validations = yup.object().shape({
    username: yup.string().min(3).required("username is cannot be empty"),
    email: yup.string().email().required("email is cannot be empty"),
    password: yup.string().min(6,"password must be at least 6 characters").required("password is cannot be empty"),
    passwordConfirm: yup.string().min(6).oneOf([yup.ref("password")],"passwords do not match").required("this field cannot be empty")
})

export default validations;