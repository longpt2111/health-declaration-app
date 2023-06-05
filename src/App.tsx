import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TablePage from "./pages/table-page";
import FormPage from "./pages/form-page";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/table" element={<TablePage />} />
      <Route path="/declaration" element={<FormPage />} />
      <Route path="/edit/:id" element={<FormPage isEditMode />} />
      <Route path="*" element={<Navigate to="/table" />} />
    </Routes>
  );
};

export default App;
