import React from 'react';




function ProfileCard(props) {
    return (

        <div className="w-48  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className = "flex flex-col p-3 space-y-2">

            <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
            <button>View Profile</button>
            <button>Assign Task</button>



        </div>

        </div>

    );
}

export default ProfileCard;
