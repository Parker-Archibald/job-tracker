import React from "react";
import { Route } from "react-router-dom";
import StudentsPage from '../Pages/StudentsPage';
import AdminHome from '../Pages/AdminHome';
import OneStudent from '../Pages/OneStudent';

const Routes = ({studentId}) => {
  return (
    <>
      <Route exact path='/' component={() => <AdminHome/>}/>
      <Route exact path='/students' component={() => <StudentsPage/>}/>
      <Route path='/oneStudent/:handle' render={(props) => <OneStudent {...props}/>}/>
    </>
  );
};
export default Routes;
