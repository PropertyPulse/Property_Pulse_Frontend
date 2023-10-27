import logo from '../../Assets/logo.png';
import dashboardIcon from "../../Assets/Icons/dashboard-icon.png";
import propertiesIcon from "../../Assets/Icons/properties-icon.png";
import manageProperties from "../../Assets/Icons/manage-properties.png";
import assignProperties from "../../Assets/Icons/assign-properties-icon.png";
import upcomingTasksIcon from "../../Assets/Icons/upcoming-tasks-icon.png";
import ongoingTasksIcon from "../../Assets/Icons/ongoing-tasks-icon.png";
import completedTasksIcon from "../../Assets/Icons/completed-tasks-icon.png";
import tasksIcon from "../../Assets/Icons/tasks-icon.png";
import taskApprovalsIcon from "../../Assets/Icons/task-approvals-icon.png";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import {HiOutlineLogout} from "react-icons/hi";
import useLogout from "../../hooks/useLogout";

const TaskSupervisorSidebar = () => {
    const [open, setOpen] = useState(true);
    const [openSubmenus, setOpenSubmenus] = useState([]);
    const location = useLocation();

    const logout = useLogout();

    const handleLogout = () => {
        logout();
    }



    const SidebarItems = [
        {title: "Dashboard",
            icon: dashboardIcon,
            url: '/task-supervisor/dashboard'},
        {title: "Properties",
            icon: propertiesIcon,
            submenu: true,
            submenuItems: [
                {title: "Assigned Properties",
                    url: '/task-supervisor/assigned-properties',
                    icon: assignProperties},
                {title: "Properties to be Managed",
                    url: '/task-supervisor/properties-to-be-managed/not-visited-properties',
                    icon: manageProperties},
            ]},
        {title: "Tasks",
            icon: tasksIcon,
            submenu: true,
            submenuItems: [
                {title: "Upcoming Tasks",
                    url: '/task-supervisor/upcoming-tasks',
                    icon: upcomingTasksIcon},
                {title: "Ongoing Tasks",
                    url: '/task-supervisor/ongoing-tasks',
                    icon: ongoingTasksIcon},
                {title: "Completed Tasks",
                    url: '/task-supervisor/completed-tasks',
                    icon: completedTasksIcon},
            ]},
        {title: "Task Approvals",
            url: '/task-supervisor/task-approvals',
            icon: taskApprovalsIcon},
    ]

    return (
        <div className="flex">
            <section className={`sidebar relative h-screen bg-white text-primary-blue-800 pt-2 relative duration-300 shadow-md ${
                    open ? "w-[15rem]" : "w-24"}`}>
                <FaBars className={`absolute text-2xl text-primary-blue-800 cursor-pointer -right-10 top-6 ${
                        !open && "rotate-180"}`}
                        onClick={() => setOpen(!open)} />
                <div className={`row-auto flex space-x-6 ${!open ? "pl-4" : "pl-6"}`}>
                    <img className={`${!open ? "w-16 h-16" : "w-16 h-16"} duration-300`} src={logo} alt="logo" />
                    <div className="text-center pt-1">
                        <h1 className={`title p-0 ${ !open ? "scale-0" : "" } duration-300`}> Property<br /> Pulse </h1>
                    </div>
                </div>

                <ul className="pt-6">
                    {SidebarItems.map((menu, index) => (
                        <React.Fragment key={index}>
                            <Link to={menu.url}>
                                <li className={`flex items-center text-primary-blue-800 px-4 py-2 my-3 m-2 gap-x-3 cursor-pointer
                                   hover:bg-selected rounded-xl my-2 
                                   ${ location.pathname.includes(menu.url) ? "bg-selected" : "" }
                                `} >

                                    <span className="text-xl block float-left">
                                        <img className="w-6 h-6" src={menu.icon} alt={menu.title} />
                                    </span>

                                    <span className={`pt-1 font-semibold text-md flex-1 ${ !open ? "hidden" : ""}`} >
                                        {menu.title}
                                    </span>
                                    {menu.submenu && open && (
                                        <FiChevronDown
                                            className={`pt-2 text-2xl ${
                                                openSubmenus.includes(index) ? "rotate-180" : ""
                                            }`}
                                            onClick={() => {
                                                setOpenSubmenus((prevState) => {
                                                    if (prevState.includes(index)) {
                                                        return prevState.filter((item) => item !== index);
                                                    } else {
                                                        return [...prevState, index];
                                                    }
                                                });
                                            }}
                                        />
                                    )}
                                </li>
                            </Link>
                            {menu.submenu && openSubmenus.includes(index) && open && (
                                <ul>
                                    {menu.submenuItems.map((submenuItem, subIndex) => (
                                        <Link to={submenuItem.url}>
                                            <li key={subIndex} className={`text-primary-blue-500 flex items-center font-medium text-sm
                                                cursor-pointer py-2 m-2 my-0.5 space-x-3 hover:bg-selected rounded-lg pl-12 ${
                                                    location.pathname.includes(submenuItem.url) ? "bg-selected" : ""} ${
                                                        !open ? "hidden" : ""
                                                    }`}
                                            >
                                                <span className="text-xl block float-left">
                                                    <img className="w-6 h-6" src={submenuItem.icon} alt={submenuItem.title}/>
                                                </span>
                                                <span className={`pt-1 font-semibold text-md flex-1`}>
                                                  {submenuItem.title}
                                                </span>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
                <div onClick={handleLogout} className='flex w-full items-center text-primary-blue-800 px-4 py-2 space-x-2 cursor-pointer
                           hover:bg-selected absolute bottom-6'>
                    <span className="text-2xl block float-left">
                        <HiOutlineLogout />
                    </span>
                    <span className={`pt-1 font-semibold text-md flex-1 ${ !open ? "hidden" : ""}`} >
                        Logout
                    </span>
                </div>
            </section>
        </div>
    );
};

export default TaskSupervisorSidebar;