import React, { useEffect } from "react";
import { IFormData } from "../../interfaces/formData.interface";
import { Link } from "react-router-dom";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../helpers/getLocalStorage.helper";
import { formatDate } from "../../helpers/formatDate.helper";

interface IPropsTable {
  searchText: string;
  itemsPerPage: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  allUsersInfo: IFormData[];
  setAllUsersInfo: React.Dispatch<React.SetStateAction<IFormData[]>>;
}

const Table: React.FC<IPropsTable> = ({
  searchText,
  itemsPerPage,
  setTotalPages,
  currentPage,
  setCurrentPage,
  allUsersInfo,
  setAllUsersInfo,
}) => {
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
    setTotalPages(Math.ceil(searchResult.length / itemsPerPage));
    setCurrentPage(1);
    if (!searchText) setAllUsersInfo(getLocalStorage("covid-form"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const handleDeleteUser = (id: string | undefined) => {
    if (confirm(`Do you want to delete form with ID: ${id}`)) {
      const updatedUsersInfo: IFormData[] = allUsersInfo.filter(
        (userInfo) => userInfo.id !== id
      );
      const updatedLocalValues: IFormData[] = getLocalStorage(
        "covid-form"
      ).filter((userInfo) => userInfo.id !== id);
      const lastUserInfoIndex = allUsersInfo.findIndex(
        (userInfo) => userInfo.id === id
      );
      if (
        lastUserInfoIndex === allUsersInfo.length - 1 &&
        allUsersInfo.length % itemsPerPage === 1
      ) {
        setCurrentPage((prev) => {
          if (prev === 1) return prev;
          return prev - 1;
        });
      }
      removeLocalStorage("covid-form");
      setLocalStorage("covid-form", JSON.stringify(updatedLocalValues));
      setAllUsersInfo(updatedUsersInfo);
      setTotalPages(Math.ceil(updatedUsersInfo.length / itemsPerPage));
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
                      onClick={() => handleDeleteUser(id)}
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
                    {formatDate(dateOfBirth)}
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
