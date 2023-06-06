import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Table from "../../components/table";
import Pagination from "../../components/pagination.tsx";
import ItemsPerPage from "../../components/items-per-page/index.tsx";
import { getLocalStorage } from "../../helpers/getLocalStorage.helper.ts";
import { IFormData } from "../../interfaces/formData.interface.ts";

const TablePage: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(2);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allUsersInfo, setAllUsersInfo] = useState<IFormData[]>(
    getLocalStorage("covid-form")
  );
  const [totalPages, setTotalPages] = useState<number>(
    Math.ceil(getLocalStorage("covid-form").length / itemsPerPage)
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleChangeItemsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
    setTotalPages(Math.ceil(allUsersInfo.length / Number(event.target.value)));
  };

  return (
    <header className="container-fluid">
      <div className="container">
        <div className="pt-5 mb-4 row">
          <div className="col-lg-12">
            <h1 className="fs-1 text-center">
              Vietnam Health Declaration for foreign entry
            </h1>
          </div>
        </div>
        <div className="mb-4 row">
          <div className="col-lg-4">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Search... "
                value={searchText}
                onChange={handleSearchChange}
              />
            </form>
          </div>
          <div className="text-end col">
            <div className="d-flex justify-content-end">
              <NavLink className="btn btn-success btn-md" to="/declaration">
                New form
              </NavLink>
            </div>
          </div>
        </div>
        <div className="mb-4 row">
          <div className="col-lg-12">
            <Table
              searchText={searchText.trim()}
              itemsPerPage={itemsPerPage}
              setTotalPages={setTotalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              allUsersInfo={allUsersInfo}
              setAllUsersInfo={setAllUsersInfo}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
              <ItemsPerPage
                itemsPerPage={itemsPerPage}
                handleChangeItemsPerPage={handleChangeItemsPerPage}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TablePage;
