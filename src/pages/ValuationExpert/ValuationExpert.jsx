import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Common/Navbar";
import VeSidebar from "../../Components/ValuationExpert/VeSidebar";

function ValuationExpert() {

  
        return (
            <div className='flex w-full bg-[#EDF2FB]'>
            <div className='z-50'>
                <VeSidebar />
            </div>
            <div className='w-full'>
                <div className='z-40 w-full'>
                    <Navbar name="kavisha " userRole="Valuation Expert" />
                </div>
                 <Outlet/>
                    
            </div>
        </div>
    );

}

export default ValuationExpert;
