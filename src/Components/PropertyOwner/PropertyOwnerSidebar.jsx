import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';

// Import your icon images
import dashboardIcon from '../../Assets/Icons/dashboard-icon.png';
import propertiesIcon from '../../Assets/Icons/properties-icon.png';
import tasksIcon from '../../Assets/Icons/tasks-icon.png';
import paymentsIcon from '../../Assets/Icons/payments-icon.png';
import taskApprovalsIcon from '../../Assets/Icons/task-approvals-icon.png';
import logo from '../../Assets/logo.png';
import documentsIcon from '../../Assets/Icons/document.png';
import {HiOutlineLogout} from "react-icons/hi";

const PropertyOwnerSidebar = () => {
  const [open, setOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState([]);

  const SidebarItems = [
    {
      title: 'Dashboard',
      icon: dashboardIcon,
      url: '/po/dashboard', // Example URL, replace with actual URLs
    },
    {
      title: 'Properties',
      icon: propertiesIcon,
      url: '/po/properties', // Example URL, replace with actual URLs
    },
    {
      title: 'Tasks',
      icon: tasksIcon,
      url: '/po/task', // Example URL, replace with actual URLs
    },
    {
      title: 'Payments',
      icon: paymentsIcon,
      url: '/po/payment', // Example URL, replace with actual URLs
    },
    {
        title: 'Reports',
        icon: taskApprovalsIcon,
        url: '/po/reports', // Example URL, replace with actual URLs
    },
    {
        title: 'Documents',
        icon: documentsIcon,
        url: '/po/documents', // Example URL, replace with actual URLs
    },
  ];

  useEffect(() => {
    // ... your existing resize logic ...
  }, []);

  return (
    <div className="flex h-full">
      <section
        className={`sidebar md:h-full sm:h-full bg-white text-primary-blue-800 pt-2 relative duration-300 shadow-md ${
          open ? 'w-[15rem]' : 'w-24'
        } min-h-screen`} 
      >
        <FaBars
          className={`absolute text-2xl text-primary-blue-800 cursor-pointer -right-10 top-6 md ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div
          className={`row-auto flex space-x-6 ${!open ? 'pl-4' : 'pl-6'}`}
        >
          <img
            className={`${!open ? 'w-16 h-16' : 'w-16 h-16'} duration-300`}
            src={logo}
            alt="logo"
          />
          <div className="pt-1 text-center">
            <h1 className={`title p-0 ${!open && 'scale-0'} duration-300`}>
              Property
              <br /> Pulse
            </h1>
          </div>
        </div>

        <ul className="pt-6">
          {SidebarItems.map((menu, index) => (
            <React.Fragment key={index}>
              <li className="flex items-center px-4 py-2 m-2 my-3 cursor-pointer text-primary-blue-800 gap-x-3 hover:bg-selected rounded-xl">
                <Link to={menu.url} className="block float-left text-xl">
                  <img
                    className="w-6 h-6"
                    src={menu.icon}
                    alt="logo"
                  />
                </Link>
                <Link
                  to={menu.url}
                  className={`pt-1 font-semibold text-md flex-1 ${
                    !open && 'hidden'
                  }`}
                >
                  {menu.title}
                </Link>
                {menu.submenu && open && (
                  <FiChevronDown
                    className={`pt-2 text-2xl ${
                      openSubmenus.includes(index) && 'rotate-180'
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
              {menu.submenu && openSubmenus.includes(index) && open && (
                <ul>
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`text-primary-blue-500 flex items-center font-medium text-sm cursor-pointer py-2 m-2 my-0.5 space-x-3 hover:bg-selected rounded-lg pl-12 ${
                        !open && 'hidden'
                      }`}
                    >
                      <Link
                        to={submenuItem.url}
                        className="block float-left text-xl"
                      >
                        <img
                          className="w-6 h-6"
                          src={submenuItem.icon}
                          alt="logo"
                        />
                      </Link>
                      <Link
                        to={submenuItem.url}
                        className={`pt-1 font-semibold text-md flex-1 ${
                          !open && 'hidden'
                        }`}
                      >
                        {submenuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
        <div className='flex w-full items-center text-primary-blue-800 px-4 py-2 space-x-2 cursor-pointer
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

export default PropertyOwnerSidebar;