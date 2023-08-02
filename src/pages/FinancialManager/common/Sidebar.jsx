import React from 'react'
import logo from "../../../Assets/logo.png";
import grid from "../icons/grid.svg";
import income from "../icons/income.svg";
import payment from "../icons/payment.svg";
import history from "../icons/history.svg";
import setting from "../icons/setting.svg";
import logout from "../icons/logout.svg";
import {NavLink} from "react-router-dom";

const Sidebar = () => {

    return (
        <div className="justify-items-center justify-between h-screen hidden md:flex flex-col md:w-1/5 border bg-menu-area-blue ">
            {/* logo areaa*/}
            <div>
                <img src={logo} className="w-24 h-24 mx-auto" alt=""/>
            </div>


            {/*menu area*/}

            <div className="sidebar -mt-40">
                <NavLink to="/fm/dashboard" className="flex py-2 gap-x-4 px-6 my-2 mx-5 rounded-lg items-center hover:bg-selected-area-blue">
                    <img src={grid} className="w-5 h-5" alt=""/>
                    <a href="#" className="font-medium text-lg text-primary-blue-700">Dashboard</a>
                </NavLink>
                <NavLink to="/fm/received" className="flex py-2 mt-5 gap-x-4 px-6 my-2 mx-5 rounded-lg items-center hover:bg-selected-area-blue">
                    <img src={income} className="w-5 h-5 hover:text-sky-300" alt=""/>
                    <a href="#" className="font-medium text-lg text-primary-blue-700">Received</a>
                </NavLink>
                <NavLink to="/fm/payments"  className="flex py-2 mt-5 gap-x-4 px-6 my-2 mx-5 rounded-lg items-center hover:bg-selected-area-blue">
                    <img src={payment} className="w-5 h-5" alt=""/>
                    <a href="#" className="font-medium text-lg text-primary-blue-700">Payments</a>
                </NavLink>
                <NavLink to="/fm/history" className="flex py-2 mt-5 gap-x-4 px-6 my-2 mx-5 rounded-lg items-center hover:bg-selected-area-blue">
                    <img src={history} className="w-5 h-5" alt=""/>
                    <a href="#" className="font-medium text-lg text-primary-blue-700">History</a>
                </NavLink>
            </div>
            <div>
                <div className="flex py-2 gap-x-4 px-6 my-2 mx-5 rounded-lg items-யயcenter hover:bg-selected-area-blue">
                    <img src={setting} className="w-5 h-5" alt=""/>
                    <a href="#" className="font-medium text-lg text-primary-blue-700">Settings</a>
                </div>
                <div className="flex py-2 gap-x-4 px-6 my-2 mx-5 rounded-lg items-center hover:bg-selected-area-blue">
                    <img src={logout} className="w-5 h-5" alt=""/>
                    <a href="#" className="font-medium text-lg text-primary-blue-700">Logout</a>
                </div>
            </div>


        </div>
    )
}
export default Sidebar
