import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import JobsPage from "../Pages/JobsPage";

const Routes = ({studentId}) => {
  return (
    <>
      <Route exact path="/" component={() => <HomePage />} />
      <Route path="/jobs" component={() => <JobsPage studentId={studentId}/>} />
    </>
  );
};
export default Routes;
