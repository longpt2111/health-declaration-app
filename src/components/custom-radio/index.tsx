import { Field } from "formik";
import React from "react";

interface IPropsCustomCheckbox {
  label: string;
  name: string;
  options: string[];
}

const CustomRadio: React.FC<IPropsCustomCheckbox> = ({
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
        <label htmlFor="none" className="form-check-label me-4">
          <input
            type="radio"
            value=""
            className="form-check-input me-1"
            id="none"
            name={name}
            defaultChecked
          />
          None
        </label>
        {options &&
          options.length > 0 &&
          options.map((option) => (
            <label
              key={option}
              className="form-check-label me-4"
              htmlFor={option}
            >
              <Field
                id={option}
                name={name}
                className="form-check-input me-1"
                type="radio"
                value={option}
              />
              {option}
            </label>
          ))}
      </div>
      <div className="col-lg-12"></div>
    </div>
  );
};

export default CustomRadio;
