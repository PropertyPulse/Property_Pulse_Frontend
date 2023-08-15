import React from "react";
import Navbar from "../../Components/Common/Navbar";
import { Outlet } from "react-router-dom";
import PropertyOwnerSidebar from "../../Components/PropertyOwner/PropertyOwnerSidebar";

const PropertyOwenerdb = () => {
  return (
    <div className="flex w-full bg-[#EDF2FB]">
      <div className="z-50">
        <PropertyOwnerSidebar />
      </div>
      <div className="w-full">
        <div className="z-40 w-full">
          <Navbar name="Anjalee Neelika" userRole="Property Owner" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default PropertyOwenerdb;
