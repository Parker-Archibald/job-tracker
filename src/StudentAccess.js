import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LeftNav from "./Config/LeftNav";
import TopNav from "./Config/TopNav";
import Routes from "./Config/Routes";

function StudentAccess({parentId}) {
  return (
    <div>
      <Router>
        <TopNav studentId={parentId}/>
        <LeftNav />
        <Routes studentId={parentId}/>
      </Router>
    </div>
  );
}

export default StudentAccess;
