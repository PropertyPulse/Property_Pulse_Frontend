import React from "react";
import Navbar from "../../Components/Common/Navbar";
import { Outlet } from "react-router-dom";
import PropertyOwnerSidebar from "../../Components/PropertyOwner/PropertyOwnerSidebar";
import useAuth from "../../hooks/useAuth";

const PropertyOwnerdb = () => {
    const {auth} = useAuth();
    console.log(auth);

    return (
        <div className="flex w-full bg-[#EDF2FB]">
        <div className="z-50">
            <PropertyOwnerSidebar />
        </div>
        <div className="w-full">
            <div className="z-40 w-full">
            <Navbar name={auth.username} userRole="Property Owner" />
            </div>
            <Outlet />
        </div>
        </div>
    );
};

export default PropertyOwnerdb;
