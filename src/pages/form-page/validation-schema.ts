import * as Yup from "yup";

const requiredFieldError = (field: string) => `${field} is required`;

export const validationSchema = Yup.object({
  fullName: Yup.string().required(requiredFieldError("Name")),
  object: Yup.string().required(requiredFieldError("Object")),
  dateOfBirth: Yup.string().required(requiredFieldError("Date of birth")),
  gender: Yup.string().required(requiredFieldError("Gender")),
  nationality: Yup.string().required(requiredFieldError("Nationality")),
  nationId: Yup.string().required(requiredFieldError("Nation ID")),
});
