import React from "react";
import "../App.css";
import Activity from "./activity"
import SideNav from "./sideNav"
import UserCard from "./userCard"
import Header from "./header"
import Badge from "./badge"


export default function Dashboard() {
  return (
    <div>
      <Header/>
      <Badge/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 ">
          <SideNav />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
          <UserCard/>
            </div>
           
          <div className="col-lg-7 col-md-8 col-sm-12">
           <Activity/>
          </div>
        </div>
      </div>
    </div>
  );
}
