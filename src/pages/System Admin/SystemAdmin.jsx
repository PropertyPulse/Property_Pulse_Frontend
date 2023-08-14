import Navbar from "../../Components/Common/Navbar";
import SystemAdminSidebar from "../../Components/SystemAdmin/SystemAdminSidebar";
import React from "react";
import {Outlet} from "react-router-dom";

const SystemAdminDashboard = () => {
    return (
        <div className='w-full flex bg-background-blue'>
            <div className='sticky top-0 left-0 h-full z-50'>
                <SystemAdminSidebar />
            </div>
            <div className='w-full'>
                <div className='w-full z-40 sticky top-0 left-0 w-full'>
                    <Navbar name="Surani Sooriyaarachchi" userRole="System Admin" />
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default SystemAdminDashboard;