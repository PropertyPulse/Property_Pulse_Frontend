import React from "react";
import Navbar from "../../Components/Common/Navbar";
import ManPowerSidebar from "../../Components/ManPowerManager/ManPowerSidebar";
import { Outlet } from "react-router-dom";

const TaskSupervisorDashboard = () => {
    return (
        <div className='flex w-full bg-[#EDF2FB]'>
            <div className='z-50'>
                <ManPowerSidebar />
            </div>
            <div className='w-full'>
                <div className='z-40 w-full'>
                    <Navbar name="Thilanka Jayathilaka" userRole="Manpower Company Manager" />
                </div>
                 <Outlet/>
                    
            </div>
        </div>
     
    );
}

export default TaskSupervisorDashboard;