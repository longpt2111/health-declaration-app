import * as Yup from "yup";

const requiredFieldError = (field: string) => `${field} is required`;

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required(requiredFieldError("Name")),
  object: Yup.string().required(requiredFieldError("Object")),
  dateOfBirth: Yup.string().required(requiredFieldError("Date of birth")),
  gender: Yup.string().required(requiredFieldError("Gender")),
  nationality: Yup.string().required(requiredFieldError("Nationality")),
  nationId: Yup.string().required(requiredFieldError("Nation ID")),
  travels: Yup.array().of(
    Yup.object().shape({
      departureDate: Yup.string().required(requiredFieldError("Depature Date")),
      immigrationDate: Yup.string().required(
        requiredFieldError("Immigration Date")
      ),
      departure: Yup.string().required(requiredFieldError("Depature")),
      destination: Yup.string().required(requiredFieldError("Destination")),
    })
  ),
  province: Yup.string().required(requiredFieldError("Contact province")),
  district: Yup.string().required(requiredFieldError("Contact district")),
  address: Yup.string().required(requiredFieldError("Contact address")),
  email: Yup.string()
    .email("Email is invalid")
    .required(requiredFieldError("Email")),
  mobile: Yup.string().required(requiredFieldError("Mobile")),
});
