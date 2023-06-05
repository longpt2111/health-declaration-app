import React from "react";

interface IPropsItemsPerPage {
  itemsPerPage: number;
  handleChangeItemsPerPage(event: React.ChangeEvent<HTMLSelectElement>): void;
}

const ItemsPerPage: React.FC<IPropsItemsPerPage> = ({
  itemsPerPage,
  handleChangeItemsPerPage,
}) => {
  return (
    <form className="d-flex align-items-center justify-content-end">
      <select
        className="form-select"
        style={{ width: "5rem" }}
        value={itemsPerPage}
        onChange={handleChangeItemsPerPage}
      >
        <option value="2" defaultChecked>
          2
        </option>
        <option value="4">4</option>
        <option value="6">6</option>
      </select>
      <label className="mx-2">Items/Page</label>
    </form>
  );
};

export default ItemsPerPage;
