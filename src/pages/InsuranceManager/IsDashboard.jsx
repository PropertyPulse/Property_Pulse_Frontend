import React from "react";
import Navbar from "../../Components/Common/Navbar";
import { Outlet } from "react-router-dom";
import InsuranceSidebar from "../../Components/InsuranceManager/InsuranceSidebar";

const IsDashboard = () => {
    return (
        <div className='flex w-full bg-[#EDF2FB]'>
            <div className='z-50'>
                <InsuranceSidebar />
            </div>
            <div className='w-full'>
                <div className='z-40 w-full'>
                    <Navbar name="Thilanka Jayathilaka" userRole="Insurance Agent" />
                </div>
                 <Outlet/>
                    
            </div>
        </div>
     
    );
}

export default IsDashboard;