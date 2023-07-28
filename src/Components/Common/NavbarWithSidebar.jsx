import userAvatar from '../../Assets/user-avatar.png'
import messageIcon from '../../Assets/Icons/message-icon.png'
import notificationIcon from '../../Assets/Icons/notification-icon.png'

const NavbarWithSidebar = (user) => {
    return(
        <div className='flex justify-end'>
            <section className='navbar w-10/12 h-20 bg-primary-blue-800 z-40 flex'>
                <div className='pt-6 pl-8 w-1/12'>
                    <i className="fa fa-bars fa-2x text-white" aria-hidden="true"></i>
                </div>
                <div className='w-11/12 flex justify-end'>
                    <div className='w-1/12 pt-6 justify-center'>
                        <img className='w-8 h-8' src={messageIcon} alt='logo'/>
                    </div>
                    <div className='w-1/12 pt-6 justify-center'>
                        <img className='w-8 h-8' src={notificationIcon} alt='logo'/>
                    </div>
                    <div className='w-2/12 py-3 text-white text-right'>
                        <div className='font-medium text-xl'>{user.name}</div>
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
