import React from "react";

const Table: React.FC = () => {
  return (
    <table className="table table-md table-bordered table-hover">
      <thead>
        <tr className="table-success w-100">
          <th className="text-center" style={{ maxWidth: "150px" }}>
            #
          </th>
          <th className="" style={{ maxWidth: "150px" }}>
            Form ID
          </th>
          <th className="" style={{ maxWidth: "150px" }}>
            Full Name
          </th>
          <th className="" style={{ maxWidth: "150px" }}>
            Object
          </th>
          <th className="" style={{ maxWidth: "150px" }}>
            Date Of Birth
          </th>
          <th className="" style={{ maxWidth: "150px" }}>
            Gender
          </th>
          <th className="" style={{ maxWidth: "150px" }}>
            Contact Province
          </th>
        </tr>
      </thead>
      <tbody className="w-100">
        <tr className="w-100">
          <td className="text-center py-3">1</td>
          <td className="d-flex gap-3 py-3">
            <a href="/edit/_671b3">
              <i className="fa fa-edit"></i>
            </a>
            <button className="btn text-danger m-0 p-0">
              <i className="fa fa-trash-alt"></i>
            </button>
            _671b3
          </td>
          <td
            className="py-3 text-truncate"
            style={{ maxWidth: "100px", minWidth: "100px" }}
          >
            Pham Thanh Long
          </td>
          <td
            className="py-3 text-truncate"
            style={{ maxWidth: "100px", minWidth: "100px" }}
          >
            International Student
          </td>
          <td
            className="py-3 text-truncate"
            style={{ maxWidth: "100px", minWidth: "100px" }}
          >
            11/21/2000
          </td>
          <td
            className="py-3 text-truncate"
            style={{ maxWidth: "100px", minWidth: "100px" }}
          >
            male
          </td>
          <td
            className="py-3 text-truncate"
            style={{ maxWidth: "100px", minWidth: "100px" }}
          >
            Hà Nội
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
