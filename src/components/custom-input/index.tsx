import React from "react";
import { useField } from "formik";

interface IPropsCustomInput {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

const CustomInput: React.FC<IPropsCustomInput> = ({
  label,
  required = false,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name} className="form-label">
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <input
        id={props.name}
        className={meta.error ? "form-control border-danger" : "form-control"}
        placeholder={`${label}...`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="invalid-feedback d-block">{meta.error}</div>
      ) : null}
    </>
  );
};

export default CustomInput;
