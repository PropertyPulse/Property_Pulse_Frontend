import React from "react";
import Navbar from "../../Components/Common/Navbar";
import { Outlet } from "react-router-dom";
import FinancialManagerSidebar from "../../Components/FinancialManager/FinancialManagerSidebar";

const FinancialManager = () => {
    return (
        <div className='flex w-full bg-background-blue'>
            <div className='z-50'>
                <FinancialManagerSidebar />
            </div>
            <div className='w-full'>
                <div className='z-40 w-full'>
                    <Navbar name="Shashika" userRole="Finance Manager" />
                </div>
                 <Outlet/>
                    
            </div>
        </div>
     
    );
}

export default FinancialManager;
