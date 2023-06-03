import * as Yup from "yup";

const requiredFieldError = (field: string) => `${field} is required`;

export const validationSchema = Yup.object({
  fullName: Yup.string().required(requiredFieldError("Name")),
});
