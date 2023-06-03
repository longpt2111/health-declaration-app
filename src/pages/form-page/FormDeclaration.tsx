import { Formik, FormikHelpers, Form } from "formik";
import React from "react";
import { IFormData } from "../../interfaces/formData.interface";
import CustomInput from "../../components/custom-input";
import { validationSchema } from "./validation-schema";
import CustomSelect from "../../components/custom-select";
import {
  districtOptions,
  genderOptions,
  nationalityOptions,
  objectOptions,
  provinceOptions,
} from "./formOptions";

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
        const { values, errors, touched } = formikProps;

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
                  value={values.fullName}
                  hasError={!!errors.fullName && touched.fullName}
                  required
                />
              </div>
            </div>
            <div className="mb-4 row">
              <div className="col-lg-6">
                <CustomSelect
                  label="Object"
                  name="object"
                  value={values.object}
                  hasError={!!errors.object && touched.object}
                  options={objectOptions}
                  required
                />
              </div>
              <div className="col-lg-3">
                <CustomInput
                  type="date"
                  label="Date of birth"
                  name="dateOfBirth"
                  value={values.dateOfBirth}
                  hasError={!!errors.dateOfBirth && touched.dateOfBirth}
                  required
                />
              </div>
              <div className="col-lg-3">
                <CustomSelect
                  label="Gender"
                  name="gender"
                  value={values.gender}
                  hasError={!!errors.gender && touched.gender}
                  options={genderOptions}
                  required
                />
              </div>
            </div>
            <div className="mb-4 row">
              <div className="col-lg-6">
                <CustomSelect
                  label="Nationality"
                  name="nationality"
                  value={values.nationality}
                  hasError={!!errors.nationality && touched.nationality}
                  options={nationalityOptions}
                  required
                />
              </div>
              <div className="col-lg-6">
                <CustomInput
                  type="text"
                  label="Nation ID or Passport ID"
                  name="nationId"
                  value={values.nationId}
                  hasError={!!errors.nationId && touched.nationId}
                  required
                />
              </div>
            </div>
            {/*  */}
            <div className="mt-4 row">
              <div className="col-lg-12">
                <h4 className="fs-5 fw-bold">Contact:</h4>
              </div>
            </div>
            <div className="mb-4 row">
              <div className="col-lg-6">
                <CustomSelect
                  label="Province"
                  name="province"
                  value={values.province}
                  hasError={!!errors.province && touched.province}
                  options={provinceOptions}
                  required
                />
              </div>
              <div className="col-lg-6">
                <CustomSelect
                  label="District"
                  name="district"
                  value={values.district}
                  hasError={!!errors.district && touched.district}
                  options={districtOptions}
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
