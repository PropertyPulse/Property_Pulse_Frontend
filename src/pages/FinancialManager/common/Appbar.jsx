import React from 'react'
import notification from "../icons/notification.svg";
import me from "../icons/IMG_2536.JPG";

const Appbar = () => {
    return (
        <div className="appbar flex bg-white justify-between py-4 px-8 text-primary-blue-800 ">
            <h1 className="self-center font-bold text-3xl">Dashboard</h1>


            {/*    user information and notifications */}

            <div className="flex justify-between items-center gap-x-3">
                {/*    notification icon */}
                <div className="notification-icon">
                    <img src={notification} className="w-6 h-6 mx-10" alt=""/>
                </div>
                <div className="flex usernameandimage gap-x-3">
                    <div>
                        <h1 className="font-bold text-lg">Shashika Janith</h1>
                        <h4 className="font-medium text-sm">Financial Manager</h4>
                    </div>
                    <div>
                        <img src={me} className="w-10 h-10 rounded-full" alt=""/>
                    </div>

                </div>

            </div>


        </div>
    )
}
export default Appbar
