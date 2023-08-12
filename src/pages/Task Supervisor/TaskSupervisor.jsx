import React from "react";
import Navbar from "../../Components/Common/Navbar";
import TaskSupervisorSidebar from "../../Components/TaskSupervisor/TaskSupervisorSidebar";
import { Outlet } from "react-router-dom";

const TaskSupervisor = () => {
    return (
        <div className='w-full flex bg-background-blue'>
            <div className='z-30 sticky top-0 left-0 h-full'>
                <TaskSupervisorSidebar />
            </div>
            <div className='w-full'>
                <div className='w-full z-20 sticky top-0 left-0'>
                    <Navbar name="Deepamal Shaminda" userRole="Task Supervisor" />
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default TaskSupervisor;