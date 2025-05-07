import React, { useState } from "react";
import './index.css'
import AddIcon from "../../../svg/AddIcon";
import Mycource from "../../../svg/Mycource";
import PersonTick from "../../../svg/PersonTick";
import HomeIcon from "../../../svg/HomeIcon";
import Addcorce from "../AddCource"
const index = () => {

      return (
        <div className="container1">
          <aside className="sidebar d-none d-md-block">
            <ul className="d-flex flex-column" style={{paddingLeft:'43px'}}>
              <li className="listyles d-flex align-items-center">
                <div className="pe-2">
                    <HomeIcon></HomeIcon>
                </div>
                Dashboard
              </li>
              <li className="listyles d-flex align-items-center">
                <div className="pe-2">
                    <AddIcon></AddIcon>
                </div>
                Add Course 
              </li>
              <li className="listyles d-flex align-items-center">
                <div className="pe-2">
                    <Mycource></Mycource>
                </div>
                My Courses
              </li>
              <li className="listyles d-flex align-items-center">
                <div className="pe-2">
                    <PersonTick></PersonTick>
                </div>
                Student Enrolled
                
              </li>
            </ul>
          </aside>
    
          <main className="content">
            <Addcorce></Addcorce>
          </main>
        </div>
      );
}

export default index