import React from "react";

interface IPropsPagination {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  displayRange?: number;
}

const Pagination: React.FC<IPropsPagination> = ({
  currentPage,
  setCurrentPage,
  totalPages,
  displayRange = 3,
}) => {
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const totalPageRange = displayRange + 2;

    if (totalPages <= totalPageRange) {
      pageNumbers.push(
        ...Array.from({ length: totalPages }, (_, index) => index + 1)
      );
    } else if (currentPage <= displayRange + 1) {
      if (currentPage === 1) {
        pageNumbers.push(
          ...Array.from({ length: displayRange }, (_, index) => index + 1)
        );
      } else {
        pageNumbers.push(
          ...Array.from({ length: currentPage + 1 }, (_, index) => index + 1)
        );
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    } else if (currentPage > totalPages - displayRange - 1) {
      pageNumbers.push(1);
      pageNumbers.push("...");
      if (currentPage === totalPages) {
        pageNumbers.push(
          ...Array.from(
            { length: displayRange },
            (_, index) => index + currentPage - displayRange + 1
          )
        );
      } else {
        pageNumbers.push(
          ...Array.from(
            { length: totalPages - currentPage + 2 },
            (_, index) => index + currentPage - 1
          )
        );
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push("...");
      pageNumbers.push(
        ...Array.from(
          { length: displayRange },
          (_, index) => index + currentPage - 1
        )
      );
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-end m-0">
        <li
          className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}
          onClick={() => {
            if (currentPage > 1) setCurrentPage(currentPage - 1);
          }}
        >
          <button className="page-link">Previous</button>
        </li>
        {getPageNumbers().map((pageNumber, index) => (
          <li
            key={index}
            className={`page-item ${
              currentPage === pageNumber ? "active" : ""
            } ${pageNumber === "..." ? "disabled" : ""}`}
            onClick={() => {
              if (typeof pageNumber === "number") setCurrentPage(pageNumber);
            }}
          >
            <button className="page-link">{pageNumber}</button>
          </li>
        ))}
        <li
          className={`page-item ${currentPage >= totalPages ? "disabled" : ""}`}
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
