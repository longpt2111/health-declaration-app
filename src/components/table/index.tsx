import React, { useState, useEffect } from "react";
import { IFormData } from "../../interfaces/formData.interface";
import { Link } from "react-router-dom";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../helpers/getLocalStorage.helper";

interface IPropsTable {
  searchText: string;
  itemsPerPage: number;
  currentPage: number;
}

const Table: React.FC<IPropsTable> = ({
  searchText,
  itemsPerPage,
  currentPage,
}) => {
  const [allUsersInfo, setAllUsersInfo] = useState<IFormData[]>(
    getLocalStorage("covid-form")
  );

  useEffect(() => {
    const searchResult = getLocalStorage("covid-form").filter(
      ({ id, fullName, object, dateOfBirth, gender }: IFormData) => {
        return (
          [id, fullName, object, dateOfBirth, gender]
            .join(" ")
            .toLowerCase()
            .indexOf(searchText.toLowerCase()) !== -1
        );
      }
    );
    setAllUsersInfo(searchResult);
    if (!searchText) setAllUsersInfo(getLocalStorage("covid-form"));
  }, [searchText]);

  const handleDeleteUser = (id: string | undefined, index: number) => {
    if (confirm(`Do you want to delete form with ID: ${id}`)) {
      const updatedUsersInfo: IFormData[] = getLocalStorage(
        "covid-form"
      ).filter((_: IFormData, i: number) => i !== index);
      removeLocalStorage("covid-form");
      setLocalStorage("covid-form", JSON.stringify(updatedUsersInfo));
      setAllUsersInfo(updatedUsersInfo);
    }
  };

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
        {allUsersInfo.length > 0 ? (
          allUsersInfo
            .slice(
              currentPage * itemsPerPage - itemsPerPage,
              currentPage * itemsPerPage
            )
            .map(
              (
                { id, fullName, object, dateOfBirth, gender, province },
                index
              ) => (
                <tr key={index} className="w-100">
                  <td className="text-center py-3">{index + 1}</td>
                  <td className="d-flex gap-3 py-3">
                    <Link to={`/edit/${id}`}>
                      <i className="fa fa-edit"></i>
                    </Link>
                    <button
                      className="btn text-danger m-0 p-0"
                      onClick={() => handleDeleteUser(id, index)}
                    >
                      <i className="fa fa-trash-alt"></i>
                    </button>
                    {id}
                  </td>
                  <td
                    className="py-3 text-truncate"
                    style={{ maxWidth: "100px", minWidth: "100px" }}
                  >
                    {fullName}
                  </td>
                  <td
                    className="py-3 text-truncate"
                    style={{ maxWidth: "100px", minWidth: "100px" }}
                  >
                    {object}
                  </td>
                  <td
                    className="py-3 text-truncate"
                    style={{ maxWidth: "100px", minWidth: "100px" }}
                  >
                    {dateOfBirth}
                  </td>
                  <td
                    className="py-3 text-truncate"
                    style={{ maxWidth: "100px", minWidth: "100px" }}
                  >
                    {gender}
                  </td>
                  <td
                    className="py-3 text-truncate"
                    style={{ maxWidth: "100px", minWidth: "100px" }}
                  >
                    {province}
                  </td>
                </tr>
              )
            )
        ) : (
          <tr>
            <td colSpan={7} className="border">
              <p className="fs-5  mb-0 text-center w-100">No Declarations</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
