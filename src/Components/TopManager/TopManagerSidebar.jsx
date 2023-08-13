import logo from '../../Assets/logo.png';
import React, {useState} from "react";
// import {BsArrowLeftShort} from "react-icons/bs";
import {FiChevronDown} from "react-icons/fi";
import dashboardIcon from "../../Assets/Icons/dashboard-icon.png";
import propertiesIcon from "../../Assets/Icons/properties-icon.png";

import complaintIcon from "../../Assets/Icons/complaintIcon.png"

// import assignProperties from "*.png";
// import manageProperties from "*.png";

import {FaBars} from "react-icons/fa";
import {Link} from "react-router-dom";
// import Sidebar from "../Common/Sidebar";
const TopManagerSidebar = () => {

    const[open , setOpen] = useState(true);
    const [openSubmenus, setOpenSubmenus] = useState([]);

    const SidebarItems = [
        {title: "Dashboard",
            icon: dashboardIcon,
            url: '/task-supervisor/dashboard'},
        {title: "Properties",
            icon: propertiesIcon,
            submenu: true,
            submenuItems: [
                {title: "Task Assignments",
                    },
                {title: "Valuation Assignments",
                  },
            ]},
        {title: "Complaints",
            icon: complaintIcon,
       },

    ]
    return (
        <div className='flex'>
            <section className={`sidebar h-screen bg-white text-primary-blue-800 pt-2 relative duration-300 shadow-md
                   ${open ? 'w-[15rem]' : 'w-24'}`}>
                <FaBars className={`absolute text-2xl text-primary-blue-800 cursor-pointer -right-10 top-6
                       ${!open && 'rotate-180'}`}
                        onClick={() => setOpen(!open)}/>
                <div className={`row-auto flex space-x-6 ${!open ? 'pl-4' : 'pl-6'}`}>
                    <img className={`${!open ? 'w-16 h-16' : 'w-16 h-16'} duration-300`} src={logo} alt='logo'/>
                    <div className='text-center pt-1'>
                        <h1 className={`title p-0 ${!open && 'scale-0'} duration-300`}>Property<br/> Pulse</h1>
                    </div>
                </div>

                <ul className='pt-6'>
                    {SidebarItems.map((menu, index) => (
                        <React.Fragment key={index}>
                            <Link to={menu.url}>
                                <li className='flex items-center text-primary-blue-800 px-4 py-2 my-3 m-2 gap-x-3 cursor-pointer
                               hover:bg-selected rounded-xl my-2'>
                                   <span className='text-xl block float-left'>
                                       <img className='w-6 h-6' src={menu.icon} alt='logo'/>
                                   </span>
                                    <span className={`pt-1 font-semibold text-md flex-1 ${!open && "hidden"}`}>
                                       {menu.title}
                                   </span>

                                    {menu.submenu && open && (
                                        <FiChevronDown className={`pt-2 text-2xl ${openSubmenus.includes(index) && "rotate-180"}`} onClick={() => {
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
                            </Link>
                            {menu.submenu && openSubmenus.includes(index)  && open && (
                                <ul>
                                    {menu.submenuItems.map((submenuItem, index) => (
                                        <Link to={submenuItem.url}>
                                            <li key={index} className={`text-primary-blue-500 flex items-center font-medium text-sm
                                           cursor-pointer py-2 m-2 my-0.5 space-x-3 hover:bg-selected rounded-lg pl-12 ${!open && "hidden"}`}>
                                               <span className='text-xl block float-left'>
                                                   <img className='w-6 h-6' src={submenuItem.icon} alt='logo'/>
                                               </span>
                                                <span className={`pt-1 font-semibold text-md flex-1 ${!open && "hidden"}`}>
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

            </section>
        </div>
        // <Sidebar Menus={SidebarItems} />
    )
}

export default TopManagerSidebar;
