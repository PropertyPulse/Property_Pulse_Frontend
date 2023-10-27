import React from "react";
import Navbar from "../../Components/Common/Navbar";
import { Outlet } from "react-router-dom";
import FinancialManagerSidebar from "../../Components/FinancialManager/FinancialManagerSidebar";
import useAuth from "../../hooks/useAuth"

const FinancialManager = () => {
    const {auth} = useAuth()

    return (
        <div className='flex w-full bg-[#EDF2FB]'>
            <div className='z-50'>
                <FinancialManagerSidebar />
            </div>
            <div className='w-full'>
                <div className='z-40 w-full'>
                    <Navbar name ={auth.username} userRole="Finance Manager" />
                </div>
                 <Outlet/>
                    
            </div>
        </div>
     
    );
}

export default FinancialManager;
