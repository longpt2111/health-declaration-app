import { Field } from "formik";
import React from "react";

interface IPropsCustomCheckbox {
  label: string;
  name: string;
  options: string[];
}

const CustomCheckbox: React.FC<IPropsCustomCheckbox> = ({
  label,
  name,
  options,
}) => {
  return (
    <div className="row">
      <div className="col-lg-4">
        <label htmlFor={name} className="form-label me-4 d-inline-block">
          {label}:
        </label>
      </div>
      <div className="col">
        {options &&
          options.length > 0 &&
          options.map((value) => (
            <label
              key={value}
              className="form-check-label me-4"
              htmlFor={value}
            >
              <Field
                id={value}
                name={name}
                className="form-check-input me-1"
                type="checkbox"
                value={value}
              />
              {value}
            </label>
          ))}
      </div>
      <div className="col-lg-12"></div>
    </div>
  );
};

export default CustomCheckbox;
