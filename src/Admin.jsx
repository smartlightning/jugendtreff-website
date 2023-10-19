import React from "react";
import UploadImages from "./components/helpers/UploadImages";

const Admin = ({ onUpload }) => {
  return (
    <div>
      <h2>Admin Area</h2>
      <UploadImages onUpload={onUpload} />
    </div>
  );
};

export default Admin;
