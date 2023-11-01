import * as yup from "yup";

export const formValidaiton = yup.object({
  name: yup.string().required("To pole jest wymagane"),
  email: yup.string().required("To pole jest wymagane"),
  message: yup
    .string()
    .min(3, "Wiadomość jest za krótka")
    .required("To pole jest wymagane"),
});

export const labels = {
  globalError: "Wystąpił błąd",
  successMsg: "Poprawnie wysłano wiadomość",
};
