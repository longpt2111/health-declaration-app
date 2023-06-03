import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Table from "../../components/table";
import Pagination from "../../components/pagination.tsx";
import ItemsPerPage from "../../components/items-per-page/index.tsx";

const TablePage: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [itemsPerPage, setItemsPerPage] = useState<number>(2);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleChangeItemsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
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
            <Table />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <Pagination />
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
