import logo from '../../Assets/logo.png';
import React, { useState, useEffect } from "react";
import {FiChevronDown} from "react-icons/fi";
import dashboardIcon from "../../Assets/Icons/dashboard-icon.png";
import propertiesIcon from "../../Assets/Icons/properties-icon.png";
import tasksIcon from "../../Assets/Icons/tasks-icon.png";
import taskApprovalsIcon from "../../Assets/Icons/task-approvals-icon.png";
import {FaBars} from "react-icons/fa";
// import Sidebar from "../Common/Sidebar";

const ManPowerSidebar = () => {

    const[open , setOpen] = useState(true);
    const [openSubmenus, setOpenSubmenus] = useState([]);

    const SidebarItems = [
        {title: "Dashboard",
            icon: dashboardIcon},
        {title: "Requests",
            icon: propertiesIcon,},
        {title: "Tasks History",
            icon: tasksIcon,
            },
        {title: "Manage Employee",
            icon: taskApprovalsIcon},
    ];

useEffect(() => {
        // Function to handle resizing and toggle the sidebar based on screen size
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setOpen(false);
            } else {
                setOpen(true);
            }
        };

        // Initial check on component mount
        handleResize();

        // Attach the event listener
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    
    return (
        <div className='flex h-full'>
            <section className={`sidebar md:h-full sm:h-full bg-white text-primary-blue-800 pt-2 relative duration-300 shadow-md
                   ${open ? 'w-[15rem]' : 'w-24'}`}>
                <FaBars className={`absolute text-2xl text-primary-blue-800 cursor-pointer -right-10 top-6 md
                       ${!open && 'rotate-180'}`}
                        onClick={() => setOpen(!open)}/>
                <div className={`row-auto flex space-x-6 ${!open ? 'pl-4' : 'pl-6'}`}>
                    <img className={`${!open ? 'w-16 h-16' : 'w-16 h-16'} duration-300`} src={logo} alt='logo'/>
                    <div className='pt-1 text-center'>
                        <h1 className={`title p-0 ${!open && 'scale-0'} duration-300`}>Property<br/> Pulse</h1>
                    </div>
                </div>

                <ul className='pt-6'>
                    {SidebarItems.map((menu, index) => (
                        <React.Fragment key={index}>
                            <li className='flex items-center px-4 py-2 m-2 my-2 my-3 cursor-pointer text-primary-blue-800 gap-x-3 hover:bg-selected rounded-xl'>
                                   <span className='block float-left text-xl'>
                                       <img className='w-6 h-6' src={menu.icon} alt='logo'/>
                                   </span>
                                <span className={`pt-1 font-semibold text-md flex-1 ${!open && "hidden"}`}>
                                       {menu.title}
                                   </span>

                                {menu.submenu && open && (
                                    <FiChevronDown className={`pt-2 text-2xl ${openSubmenus.includes(index) && "rotate-180"}`}
                                                   onClick={() => {
                                                       setOpenSubmenus(prevState => {
                                                           if (prevState.includes(index)) {
                                                               return prevState.filter(item => item !== index);
                                                           } else {
                                                               return [...prevState, index];
                                                           }
                                                       });
                                                   }}/>
                                )}
                            </li>
                            {menu.submenu && openSubmenus.includes(index)  && open && (
                                <ul>
                                    {menu.submenuItems.map((submenuItem, index) => (
                                        <li key={index} className={`text-primary-blue-500 flex items-center font-medium text-sm
                                           cursor-pointer py-2 m-2 my-0.5 space-x-3 hover:bg-selected rounded-lg pl-12 ${!open && "hidden"}`}>
                                               <span className='block float-left text-xl'>
                                                   <img className='w-6 h-6' src={submenuItem.icon} alt='logo'/>
                                               </span>
                                            <span className={`pt-1 font-semibold text-md flex-1 ${!open && "hidden"}`}>
                                                   {submenuItem.title}
                                               </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </React.Fragment>
                    ))}
                </ul>

            </section>
        </div>
        // <Sidebar Menus={SidebarItems} />
    )
}

export default ManPowerSidebar;