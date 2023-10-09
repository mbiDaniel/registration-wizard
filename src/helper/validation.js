import * as yup from "yup";

const profileValidationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("This field is required"),
    password: yup.string().required("This field is required"),
    cpassword: yup
      .string()
      .required("This field is required")
      .oneOf([yup.ref("password")], "Password do not match"),
    firstName: yup.string().required("This field is required"),
    lastName: yup.string().required("This field is required"),
    phoneNumber: yup.string().required("This field is required"),
  });
  const businessValidationSchema = yup.object({
    brandName: yup.string().required("This field is required"),
    brandType: yup.string().required("This field is required"),
    streetAddress: yup.string().required("This field is required"),
    city: yup.string().required("This field is required"),
    zipCode: yup.string().required("This field is required"),
    taxId: yup.string().required("This field is required"),
  });
  const usersValidationSchema = yup.object({
    username: yup.string().required("This field is required"),
    pin: yup.string().required("This field is required")
  });

  export const getValidationSchema = index => {
    switch (index) {
        case 0:
            return profileValidationSchema
        case 1:
            return businessValidationSchema
        case 2:
            return usersValidationSchema
        default:
            return yup.object({})
    }
  }


 export const getValues = (index, state) => {
    switch (index) {
        case 0:
            return state.profile ?? {}
        case 1:
            return state.business ?? {}
        case 2:
            return state.users ?? {}
        default:
            return {}
    }
  }

export const dispatchState = (index, values, dispatch, next, state, submit, formik) => {
    switch (index) {
        case 0:
            dispatch({profile: values});
            formik.resetForm()
            next()
            break;
        case 1:
            dispatch({business: values});
            formik.resetForm()
            next()
            break;
        case 2:
            dispatch({users: values});
            formik.resetForm()
            submit({profile: state.profile, business: state.business, users: values})
            break;
        default:
            break;
    }
}