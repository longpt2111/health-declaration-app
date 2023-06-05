import { FieldArray, Form, Formik, FormikErrors, FormikHelpers } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomCheckbox from "../../components/custom-checkbox";
import CustomInput from "../../components/custom-input";
import CustomRadio from "../../components/custom-radio";
import CustomSelect from "../../components/custom-select";
import { IFormData, ITravelForm } from "../../interfaces/formData.interface";
import {
  checkboxOptions,
  districtsOfProvinceOptions,
  genderOptions,
  nationalityOptions,
  objectOptions,
  provinceOptions,
  vaccinesOptions,
} from "./formOptions";
import { validationSchema } from "./validation-schema";

const FormDeclaration: React.FC = () => {
  const [hasTravelForm, setHasTravelForm] = useState(false);
  const navigate = useNavigate();

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
        const { values, errors, touched, resetForm } = formikProps;

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
            <div className="row">
              <div className="col-lg-12">
                <h4 className="fs-5 fw-bold">Travel:</h4>
              </div>
            </div>
            <FieldArray name="travels">
              {({ push, remove }) => (
                <>
                  {!hasTravelForm && (
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="d-flex align-items-center gap-4">
                          <h6>Do you travel in the last 14 days ?</h6>
                          <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => {
                              push({
                                departureDate: "",
                                immigrationDate: "",
                                departure: "",
                                destination: "",
                              });
                              setHasTravelForm(true);
                            }}
                          >
                            Add more
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {values.travels &&
                    values.travels.length > 0 &&
                    values.travels.map((travel, index) => (
                      <div key={index} className="row">
                        <div className="col-lg-12">
                          <div className="mt-1 mb-4 row">
                            <div className="col-lg-12">
                              <h6 className="fw-bold text-primary">
                                Travel {index + 1}
                              </h6>
                            </div>
                            <div className="mb-4 col-lg-6">
                              <CustomInput
                                type="date"
                                label="Departure Date"
                                name={`travels[${index}].departureDate`}
                                value={travel?.departureDate}
                                hasError={
                                  touched.travels?.[index]?.departureDate &&
                                  !!(
                                    errors.travels?.[
                                      index
                                    ] as FormikErrors<ITravelForm>
                                  )?.departureDate
                                }
                              />
                            </div>
                            <div className="mb-4 col-lg-6">
                              <CustomInput
                                type="date"
                                label="Immigration Date"
                                name={`travels[${index}].immigrationDate`}
                                value={travel?.immigrationDate}
                                hasError={
                                  touched.travels?.[index]?.immigrationDate &&
                                  !!(
                                    errors.travels?.[
                                      index
                                    ] as FormikErrors<ITravelForm>
                                  )?.immigrationDate
                                }
                              />
                            </div>
                            <div className="col-lg-6">
                              <CustomSelect
                                label="Departure"
                                name={`travels[${index}].departure`}
                                value={travel?.departure}
                                hasError={
                                  touched.travels?.[index]?.departure &&
                                  !!(
                                    errors.travels?.[
                                      index
                                    ] as FormikErrors<ITravelForm>
                                  )?.departure
                                }
                                options={nationalityOptions}
                                required
                              />
                            </div>
                            <div className="col-lg-6">
                              <CustomSelect
                                label="Destination"
                                name={`travels[${index}].destination`}
                                value={travel?.destination}
                                hasError={
                                  touched.travels?.[index]?.destination &&
                                  !!(
                                    errors.travels?.[
                                      index
                                    ] as FormikErrors<ITravelForm>
                                  )?.destination
                                }
                                options={nationalityOptions}
                                required
                              />
                            </div>
                            <div className="mt-4 col-lg-12">
                              <button
                                type="button"
                                className="me-3 btn btn-warning"
                                onClick={() =>
                                  push({
                                    departureDate: "",
                                    immigrationDate: "",
                                    departure: "",
                                    destination: "",
                                  })
                                }
                              >
                                Add more
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => {
                                  remove(index);
                                  if (values.travels.length <= 1)
                                    setHasTravelForm(false);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </>
              )}
            </FieldArray>
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
                  options={districtsOfProvinceOptions(values.province)}
                  required
                />
              </div>
            </div>
            <div className="mt-4 row">
              <div className="col-lg-6">
                <CustomInput
                  type="text"
                  label="Address"
                  name="address"
                  value={values.address}
                  hasError={!!errors.address && touched.address}
                  required
                />
              </div>
              <div className="col-lg-3">
                <CustomInput
                  type="email"
                  label="Email"
                  name="email"
                  value={values.email}
                  hasError={!!errors.email && touched.email}
                  required
                />
              </div>
              <div className="col-lg-3">
                <CustomInput
                  type="tel"
                  label="Mobile"
                  name="mobile"
                  value={values.mobile}
                  hasError={!!errors.mobile && touched.mobile}
                  required
                />
              </div>
            </div>
            <div className="mt-4 row">
              <div className="col-lg-12">
                <h4 className="fs-5 fw-bold">Symptoms:</h4>
              </div>
            </div>
            <div className="mb-4 row">
              <div className="col-lg-10">
                <CustomCheckbox
                  label="Do you have any following symptoms?"
                  name="symptoms"
                  options={checkboxOptions}
                />
              </div>
            </div>
            <div className="mt-4 row">
              <div className="col-lg-12">
                <h4 className="fs-5 fw-bold">Vaccines:</h4>
              </div>
            </div>
            <div className="mb-4 row">
              <div className="col-lg-10">
                <CustomRadio
                  label="Which one would you like to vaccinate ?"
                  name="vaccines"
                  options={vaccinesOptions}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex align-items-center gap-3">
                  <button type="submit" className="btn btn-success btn-lg">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-lg"
                    onClick={() => {
                      resetForm();
                      navigate("/table");
                    }}
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-secondary btn-lg">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormDeclaration;
