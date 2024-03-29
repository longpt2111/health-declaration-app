import React from "react";
import { Field, ErrorMessage } from "formik";

interface IPropsCustomInput {
  type: string;
  label?: string;
  value: string;
  name: string;
  hasError?: boolean;
  required?: boolean;
}

const CustomInput: React.FC<IPropsCustomInput> = ({
  label = "",
  required = false,
  name,
  hasError = false,
  ...props
}) => {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <Field
        id={name}
        name={name}
        className={hasError ? "form-control border-danger" : "form-control"}
        placeholder={`${label}...`}
        {...props}
      />
      <ErrorMessage name={name}>
        {(msg: string) => <div className="invalid-feedback d-block">{msg}</div>}
      </ErrorMessage>
    </>
  );
};

export default CustomInput;
