import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminLeftNav from "./Config/AdminLeftNav";
import TopNav from "./Config/TopNav";
import AdminRoutes from "./Config/AdminRoutes";

function AdminAccess({parentId}) {
  return (
    <div>
      <Router>
        <TopNav studentId={parentId}/>
        <AdminLeftNav />
        <AdminRoutes studentId={parentId}/>
      </Router>
    </div>
  );
}

export default AdminAccess;
