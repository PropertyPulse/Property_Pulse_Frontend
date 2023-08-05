import React from "react";

import NavbarWithSidebar from "../../Components/Common/NavbarWithSidebar";
import TaskSupervisorSidebar from "../../Components/TaskSupervisor/TaskSupervisorSidebar";
import {Outlet} from "react-router-dom";

const TaskSupervisorLayout = () => {
    return (
        <div className='w-full flex bg-background-blue'>
            <div className='z-50'>
                <TaskSupervisorSidebar />
            </div>
            <div>
                <div className='w-full z-40'>
                    <NavbarWithSidebar name="Deepamal Shaminda" userRole="Task Supervisor" />
                </div>
                <section>
                   <Outlet/>
                </section>
            </div>
        </div>
    );
}

export default TaskSupervisorLayout;
