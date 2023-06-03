import { Formik, FormikHelpers, Form } from "formik";
import React from "react";
import { IFormData } from "../../interfaces/formData.interface";
import CustomInput from "../../components/custom-input";
import { validationSchema } from "./validation-schema";

const FormDeclaration: React.FC = () => {
  const initialValues: IFormData = {
    fullName: "",
    object: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    nationId: "",
    travels: [],
    province: "",
    district: "",
    address: "",
    mobile: "",
    email: "",
    symptoms: [],
    vaccines: "",
  };

  const handleSubmit = (
    values: IFormData,
    actions: FormikHelpers<IFormData>
  ) => {
    console.log(values);
    console.log(actions);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        return (
          <Form>
            <div className="row">
              <div className="col-lg-12">
                <h4 className="fs-5 fw-bold">Personal information:</h4>
              </div>
            </div>
            <div className="mb-4 row">
              <div className="col-lg-12">
                <CustomInput
                  type="text"
                  label="Full name"
                  name="fullName"
                  required
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormDeclaration;
