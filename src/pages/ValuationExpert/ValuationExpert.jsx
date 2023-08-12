import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Common/Navbar";

function ValuationExpert() {

  
        return (
        <div className="flex flex-row  ">
      
            <div className="bg-white-500 w-full  h-screen md:w-full">
             
                    <Navbar name = "Kavisha Abeynayaka" userRole = "Top Manager"/>

                     <Outlet />
            </div>
        </div>
    );

}

export default ValuationExpert;
