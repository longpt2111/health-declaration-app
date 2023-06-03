import React from "react";

const Pagination: React.FC = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-end m-0">
        <li className="page-item disabled">
          <div className="page-link" aria-disabled="true">
            Previous
          </div>
        </li>
        <li className="page-item active">
          <div className="page-link">1</div>
        </li>
        <li className="page-item disabled">
          <div className="page-link">Next</div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
