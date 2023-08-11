import React from "react";
import Navbar from "../../Components/Common/Navbar";
import TaskSupervisorSidebar from "../../Components/TaskSupervisor/TaskSupervisorSidebar";
import { Outlet } from "react-router-dom";

const TaskSupervisor = () => {
    return (
        <div className='w-full flex bg-background-blue'>
            <div className='sticky top-0 left-0 h-full z-50'>
                <TaskSupervisorSidebar />
            </div>
            <div className='w-full'>
                <div className='w-full z-40 sticky top-0 left-0 w-full'>
            <div className='z-30'>
                <TaskSupervisorSidebar />
            </div>
            <div className='w-full'>
                <div className='w-full z-20'>
                    <Navbar name="Deepamal Shaminda" userRole="Task Supervisor" />
                </div>
                 <Outlet/>
            </div>
        </div>
     
    );
}

export default TaskSupervisor;
