import React from "react";
import FormDeclaration from "./FormDeclaration";

const FormPage: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="pt-4 mb-3 row">
          <div className="col-lg-12">
            <h2 className="fs-2 text-center text-success">
              MEDICAL DECLARATION FORM FOR FOREIGN ENTRY
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormDeclaration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
