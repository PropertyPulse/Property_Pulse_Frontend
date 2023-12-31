import logo from '../../Assets/logo.png';
import React, {useState} from "react";
import {FiChevronDown} from "react-icons/fi";
import {FaBars} from "react-icons/fa";
const Sidebar = () => {

    const[open , setOpen] = useState(true);
    const [openSubmenus, setOpenSubmenus] = useState([]);

    const sidebarItems = [
    // {sidebar item without sub items}
    //      {title: "Dashboard",
    //          icon: dashboardIcon},
    //
    // {sidebar item with two sub items}
    //      {title: "",
    //          icon: exampleIcon,
    //          submenu: true,
    //          submenuItems: [
    //              {title: ""},
    //              {title: ""},
    //          ]},
     ]

       return (
           <div className='flex h-screen'>
               <section className={`sidebar bg-white text-primary-blue-800 pt-2 relative duration-300 shadow-md
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
                       {sidebarItems.map((menu, index) => (
                           <React.Fragment key={index}>
                               <li className='flex items-center text-primary-blue-800 px-4 py-2 my-3 m-2 gap-x-3 cursor-pointer
                               hover:bg-selected rounded-xl my-2'>
                                   <span className='text-xl block float-left'>
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
                                               <span className='text-xl block float-left'>
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
    )
}

export default Sidebar;