import React from "react";
import Calender from "./Calender";
import Chart from "./Chart";
import Navbar from "../../Components/Common/Navbar";
import TaskSupervisorSidebar from "../../Components/TaskSupervisor/TaskSupervisorSidebar";
import { Outlet } from "react-router-dom";

const TaskSupervisorDashboard = () => {
    return (
        <div className='w-full flex bg-background-blue'>
            <div className='sticky top-0 left-0 h-full z-50'>
                <TaskSupervisorSidebar />
            </div>
            <div className='w-full'>
                <div className='w-full z-40 sticky top-0 left-0 w-full'>
                    <Navbar name="Deepamal Shaminda" userRole="Task Supervisor" />
                </div>
                 <Outlet/>
                    
            </div>
        </div>
     
    );
}

export default TaskSupervisorDashboard;
