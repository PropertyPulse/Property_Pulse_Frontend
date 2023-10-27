import React from "react";
import Navbar from "../../Components/Common/Navbar";
import { Outlet } from "react-router-dom";
import TpSideBar from "../../Components/TopManager/TpSideBar";

const TopManager = () => {
    return (
        <div className='flex w-full bg-[#EDF2FB]'>
            <div className='z-50'>
                <TpSideBar />
            </div>
            <div className='w-full'>
                <div className='z-40 w-full'>
                    <Navbar name="Kaveesha" userRole="Top Manager" />
                </div>
                 <Outlet/>
                    
            </div>
        </div>
     
    );
}

export default TopManager;
