import {BiSolidChevronLeftCircle} from "react-icons/bi";
import {Link} from "react-router-dom";
import userAvatar from "../../Assets/user-avatar.png"

const Chat = () => {
    return (
        <div className='w-full px-24 py-10'>

            <div className='flex bg-secondary-gray rounded-2xl text-white text-xs w-fit px-3 py-1'>
                <span className='pr-2 py-0.5'><BiSolidChevronLeftCircle /></span>
                <Link to="/task-supervisor/assigned-properties/view-property">Back to Property</Link>
            </div>

            <div className='flex w-full pt-6'>
                <div className='w-1/4 bg-gray-200 rounded-tl-md rounded-bl-md border-r-2 border-gray-300'>
                    <div className='w-full p-4 pt-5'>
                        <span className='sub-title'>Chats</span>
                    </div>
                    <div className='w-full py-1 px-4'>
                        <input className='w-full py-1 px-3 text-xs border-2 rounded-md border-gray-300' placeholder='Search chats'/>
                    </div>
                    <div className='w-full px-4 py-2 overflow-y-auto space-y-1'>
                        <div className='flex rounded-md bg-white py-2 px-1'>
                            <span className='px-2'><img className='w-9 h-9' src={userAvatar} alt='user'/></span>
                            <span className='px-2 py-2 text-sm font-medium'>Anjalee Neelika</span>
                        </div>
                        <div className='flex rounded-md bg-white py-2 px-1'>
                            <span className='px-2'><img className='w-9 h-9' src={userAvatar} alt='user'/></span>
                            <span className='px-2 py-2 text-sm font-medium'>Sithila Eeshadhara</span>
                        </div>
                    </div>
                </div>
                <div className='w-3/4'>
                    <div className='w-full flex bg-gray-200 border-b-2 border-gray-300 px-2 py-2 rounded-tr-md'>
                        <span className='px-2'><img className='w-10 h-10' src={userAvatar} alt='user'/></span>
                        <span className='px-2 py-2 font-medium'>Anjalee Neelika</span>
                    </div>
                    <div className='w-full bg-white p-4 pt-6 overflow-y-scroll min-h-[55vh] max-h-[55vh] space-y-3'>
                        <div className='flex justify-start'>
                            <div className='received-msg py-1 px-4 bg-gray-200 rounded-tr-2xl rounded-br-2xl rounded-bl-xl w-fit'>
                                <span className='text-xs'>Received message from Property Owner</span>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='sent-msg py-1 px-4 bg-gray-200 rounded-tl-2xl rounded-bl-2xl rounded-br-xl w-fit'>
                                <span className='text-xs'>Sent message by Task Supervisor</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-200 bottom-0 py-3 px-3 rounded-br-md'>
                        <input className='w-full py-2 px-4 text-xs border-2 rounded-md border-gray-300 focus:border-0'
                               placeholder='Type your message'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;