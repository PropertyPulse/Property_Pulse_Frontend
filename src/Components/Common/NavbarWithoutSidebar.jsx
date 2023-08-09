import userAvatar from '../../Assets/user-avatar.png';
import {FaMessage} from "react-icons/fa6";
import {IoIosNotifications} from "react-icons/io";
import logo from "../../Assets/logo.png";

const NavbarWithoutSidebar = (user) => {
    return(
        <div className='w-full justify-end sticky'>
            <section className='row navbar w-full h-24 md:h-24 lg:h-[4.5rem] bg-white flex shadow-md'>
                <div className='pl-6 py-1 flex space-x-3'>
                    <img className='rounded-full w-16 h-16' src={logo} alt='logo'/>
                    <div className='text-center'>
                        <h1 className='title text-primary-blue-800'>Property<br/> Pulse</h1>
                    </div>
                </div>
                <div className='w-full flex justify-end'>
                    <div className='w-1/12 md:w-2/12 flex items-center text-right px-12 space-x-4 lg:space-x-16'>
                        <FaMessage className='text-primary-blue-800 text-xs md:text-xl' />
                        <IoIosNotifications className='text-primary-blue-800 text-xs md:text-3xl'/>
                    </div>
                    <div className='w-2/12 py-3 text-primary-blue-800 text-right justify-end'>
                        <div className='font-normal md:font-medium text-md'>{user.name}</div>
                        <div className='text-sm'>{user.userRole}</div>
                    </div>
                    <div className='pt-3 px-6 float-right'>
                        <img className='w-12 h-12' src={userAvatar} alt='logo'/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NavbarWithoutSidebar;