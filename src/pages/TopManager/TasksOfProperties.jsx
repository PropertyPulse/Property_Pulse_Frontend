
import React from 'react';
import TaskAssignmentsTabs from "../../Components/TopManager/TaskAssignmentsTabs"
import TopManagerSidebar from "../../Components/TopManager/TopManagerSidebar";
import NavbarWithoutSidebar from "../../Components/Common/NavbarWithoutSidebar"
function TasksOfProperties() {
    return (
        <div className="flex h-screen">
            <TopManagerSidebar/>
            <div className="flex-1 flex flex-col">
                <NavbarWithoutSidebar />
                <TaskAssignmentsTabs />
            </div>
        </div>
    );
}

export default TasksOfProperties;
