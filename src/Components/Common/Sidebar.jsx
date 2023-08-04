import logo from '../../Assets/logo.png';
import React, {useState} from "react";
import {BsArrowLeftShort} from "react-icons/bs";
import {FiChevronDown} from "react-icons/fi";
const Sidebar = (sidebarItems) => {

    const[open , setOpen] = useState(true);
    const [openSubmenus, setOpenSubmenus] = useState([]);

    /* const Menus = [

    //{sidebar item without sub items}
         {title: "Dashboard",
             icon: dashboardIcon},

    //{sidebar item with two sub items}
         {title: "",
             icon: exampleIcon,
             submenu: true,
             submenuItems: [
                 {title: ""},
                 {title: ""},
             ]},
     ]*/

    const Menus = sidebarItems;

       return (
           <div className='flex'>
               <section className={`sidebar h-screen bg-gray-100 text-primary-blue-800 pt-2 relative duration-300 
                   ${open ? 'w-80' : 'w-28'}`}>
                   <BsArrowLeftShort className={`absolute bg-white text-3xl text-primary-blue-800
                       rounded-full border-2 border-primary-blue-800 cursor-pointer -right-3 top-6
                       ${!open && 'rotate-180'}`}
                       onClick={() => setOpen(!open)}/>
                   <div className={`row-auto flex space-x-6 ${!open ? 'pl-4' : 'pl-6'}`}>
                       <img className={`${!open ? 'w-20 h-20' : 'w-20 h-20'} duration-300`} src={logo} alt='logo'/>
                       <div className='text-center pt-1'>
                           <h1 className={`title text-3xl p-0 ${!open && 'scale-0'} duration-300`}>Property<br/> Pulse</h1>
                       </div>
                   </div>

                   <ul className='pt-6'>
                       {Menus.map((menu, index) => (
                           <React.Fragment key={index}>
                               <li className='flex items-center text-primary-blue-800 px-7 py-3 m-2 my-3 gap-x-5 cursor-pointer
                               hover:bg-selected rounded-xl my-2'>
                                   <span className='text-4xl block float-left'>
                                       <img className='w-8 h-8' src={menu.icon} alt='logo'/>
                                   </span>

                                   <span className={`pt-1 font-semibold text-lg flex-1 ${!open && "hidden"}`}>
                                       {menu.title}
                                   </span>

                                   {menu.submenu && open && (
                                        <FiChevronDown className={`pt-2 text-3xl ${openSubmenus.includes(index) && "rotate-180"}`}
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
                                           <li key={index} className={`text-primary-blue-600 flex items-center font-medium
                                           cursor-pointer py-3 m-2 hover:bg-selected rounded-lg my-1 pl-20 ${!open && "hidden"}`}>
                                               {submenuItem.title}
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