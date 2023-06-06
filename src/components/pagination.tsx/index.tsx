import React from "react";

interface IPropsPagination {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const Pagination: React.FC<IPropsPagination> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-end m-0">
        <li
          className={`page-item ${currentPage <= 1 && "disabled"}`}
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
        >
          <button className="page-link">Previous</button>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 && "active"}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            <button className="page-link">{index + 1}</button>
          </li>
        ))}
        <li
          className={`page-item ${currentPage >= totalPages && "disabled"}`}
          onClick={() => {
            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
          }}
        >
          <button className="page-link">Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
