import userAvatar from '../../Assets/user-avatar.png';
import {FaMessage} from "react-icons/fa6";
import {IoIosNotifications} from "react-icons/io";

const NavbarWithSidebar = (user) => {
    return(
        <div className='w-full justify-end'>
            <section className='navbar w-full h-28 md:h-28 lg:h-20 bg-white flex shadow-md'>
                <div className='w-full flex justify-end'>
                    <div className='w-1/12 md:w-2/12 flex pt-2 items-center text-right px-12 space-x-4 lg:space-x-16'>
                        <FaMessage className='text-primary-blue-800 text-xs md:text-2xl' />
                        <IoIosNotifications className='text-primary-blue-800  text-xs md:text-4xl'/>
                    </div>
                    <div className='w-2/12 py-3 text-primary-blue-800 text-right'>
                        <div className='font-normal md:font-medium text-xl'>{user.name}</div>
                        <div className='text-md'>{user.userRole}</div>
                    </div>
                    <div className='pt-4 px-12 float-right'>
                        <img className='w-12 h-12' src={userAvatar} alt='logo'/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NavbarWithSidebar;
