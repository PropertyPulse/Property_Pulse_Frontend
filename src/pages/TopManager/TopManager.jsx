import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import TopManagerSidebar from "../../Components/TopManager/TopManagerSidebar"

import Navbar  from "../../Components/Common/Navbar";

function TopManagerDashboard(props) {

    const [Chart1Data,setChart1Data] = useState([]);
    const [Chart2Data,setChart2Data] = useState([]);
    const tasks = [
        { id: 1, title: 'Task 1', dueDate: '2023-08-15', image: 'task1.jpg', owner: 'John Doe' },
        { id: 2, title: 'Task 2', dueDate: '2023-08-17', image: 'task2.jpg', owner: 'Jane Smith' },
        // Add more tasks as needed
    ];
        return (
        <div className="flex flex-row  ">
           
            <div className= "bg-black h-screen ">

            <TopManagerSidebar />
            </div>

            <div className="bg-white-500 w-full  h-screen md:w-full">
             
                    <Navbar name = "Kavisha Abeynayaka" userRole = "Top Manager"/>

                     <Outlet />
            </div>
        </div>
    );

}

export default TopManagerDashboard;
