import NavbarWithSidebar from "../../Components/Common/NavbarWithSidebar";
import TaskSupervisorSidebar from "../../Components/TaskSupervisor/TaskSupervisorSidebar";

const TaskSupervisorDashboard = () => {
    return(
        <div className='w-full flex bg-white'>
            <div className='z-50'>
                <TaskSupervisorSidebar />
            </div>
            <div className='w-full z-40'>
                <NavbarWithSidebar name="Deepamal Shaminda" userRole="Task Supervisor" />
            </div>
        </div>
    )
}

export default TaskSupervisorDashboard;