import userAvatar from '../../Assets/user-avatar.png';
import {FaMessage} from "react-icons/fa6";
import {IoIosNotifications} from "react-icons/io";
import logo from "../../Assets/logo-with-bg.jpg";

const NavbarWithoutSidebar = (user) => {
    return(
        <div className='w-full justify-end'>
            <section className='row navbar w-full h-28 md:h-28 lg:h-20 bg-primary-blue-800 flex shadow-md'>
                <div className='pl-6 flex space-x-6'>
                    <img className='rounded-full w-20 h-20 p-1' src={logo} alt='logo'/>
                    <div className='text-center pt-1'>
                        <h1 className='title text-white text-3xl p-0'>Property<br/> Pulse</h1>
                    </div>
                </div>
                <div className='w-full flex justify-end'>
                    <div className='w-1/12 md:w-2/12 flex pt-2 items-center text-right px-12 space-x-4 lg:space-x-16'>
                        <FaMessage className='text-white text-xs md:text-2xl' />
                        <IoIosNotifications className='text-white  text-xs md:text-4xl'/>
                    </div>
                    <div className='w-2/12 py-3 text-white text-right'>
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

export default NavbarWithoutSidebar;