import React from "react";
import { Field, ErrorMessage } from "formik";

interface IPropCustomSelect {
  label?: string;
  value: string;
  name: string;
  hasError?: boolean;
  required?: boolean;
  options: string[];
}

const CustomSelect: React.FC<IPropCustomSelect> = ({
  label = "",
  name,
  hasError = false,
  required = false,
  options,
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
        as="select"
        className={hasError ? "form-select border-danger" : "form-select"}
        placeholder={`${label}...`}
        {...props}
      >
        <option value="">-----Choose</option>
        {options &&
          options.length > 0 &&
          options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
      </Field>
      <ErrorMessage name={name}>
        {(msg: string) => <div className="invalid-feedback d-block">{msg}</div>}
      </ErrorMessage>
    </>
  );
};

export default CustomSelect;
