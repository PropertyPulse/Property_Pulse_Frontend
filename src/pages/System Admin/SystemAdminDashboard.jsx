import AdminPieChart from "./AdminPieChart";
import AdminLineChart from "./AdminLineChart";
import React from "react";
import users from '../../Assets/users.png';
import revenues from '../../Assets/revenues.png';
import expenses from "../../Assets/expenses.png";
import salary from "../../Assets/salary.png";
import profit from "../../Assets/profit.png";

const SystemAdminDashboard = () => {
    return (
        <section className='row w-full'>
            <div className='row w-full flex py-8 px-12 space-x-16 bg-background-blue'>
                <section className='w-full px-2'>
                    <h2 className='sub-title text-md pt-3 pb-4'>Overview</h2>
                    <div className='w-full flex p-0 space-x-12'>
                        <div className='admin-overview-card border-red-600 flex'>
                            <div className='w-1/2 flex'>
                                <img src={expenses} className='w-12 h-12' alt='icon'/>
                            </div>
                            <div className='w-1/2 items-center justify-end flex'>
                                <div className='justify-end text-right'>
                                    <div className='font-medium text-xs text-secondary-gray-light'>Expenses</div>
                                    <span className='font-medium text-md'>289180</span>
                                </div>
                            </div>
                        </div>
                        <div className='admin-overview-card border-orange-500 flex'>
                            <div className='w-1/2 flex'>
                                <img src={revenues} className='w-12 h-12' alt='icon'/>
                            </div>
                            <div className='w-1/2 items-center justify-end flex'>
                                <div className='justify-end text-right'>
                                    <div className='font-medium text-xs text-secondary-gray-light'>Revenue</div>
                                    <span className='font-medium text-md'>436180</span>
                                </div>
                            </div>
                        </div>
                        <div className='admin-overview-card border-yellow-400 flex'>
                            <div className='w-1/2 flex'>
                                <img src={users} className='w-12 h-12' alt='icon'/>
                            </div>
                            <div className='w-1/2 items-center justify-end flex'>
                                <div className='justify-end text-right'>
                                    <div className='font-medium text-xs text-secondary-gray-light'>Users</div>
                                    <span className='font-medium text-md'>197</span>
                                </div>
                            </div>
                        </div>
                        <div className='admin-overview-card border-blue-400 flex'>
                            <div className='w-1/2 flex'>
                                <img src={salary} className='w-12 h-12' alt='icon'/>
                            </div>
                            <div className='w-1/2 items-center justify-end flex'>
                                <div className='justify-end text-right'>
                                    <div className='font-medium text-xs text-secondary-gray-light'>Salary</div>
                                    <span className='font-medium text-md'>189000</span>
                                </div>
                            </div>
                        </div>
                        <div className='admin-overview-card border-green-600 flex'>
                            <div className='w-1/2 flex'>
                                <img src={profit} className='w-12 h-12' alt='icon'/>
                            </div>
                            <div className='w-1/2 items-center justify-end flex'>
                                <div className='justify-end text-right'>
                                    <div className='font-medium text-xs text-secondary-gray-light'>Profit</div>
                                    <span className='font-medium text-md'>157180</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='row w-full flex py-8 px-12 space-x-16'>
                <section className='w-2/5 px-2'>
                    <h2 className='sub-title text-md pt-3 pb-5'>User Distribution</h2>
                    <div className='h-auto card bg-white rounded-lg'>
                        <AdminPieChart />
                    </div>
                </section>
                <section className='w-3/5 px-2'>
                    <h2 className='sub-title text-md pt-3 pb-5'>Profit Analysis</h2>
                    <div className='h-auto card bg-white rounded-lg'>
                        {/*<AdminLineChart />*/}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default SystemAdminDashboard;