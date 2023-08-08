import React from 'react'
import expenses from "../../Assets/expenses.png";
import revenues from "../../Assets/revenues.png";
import users from "../../Assets/users.png";
import salary from "../../Assets/salary.png";
import profit from "../../Assets/profit.png";

const FmDashboard = () => {
    return (
        <div>
            <section className=''>
                <h2 className='sub-title text-md pt-3 pb-4'>Overview</h2>
                <div className='w-full  p-0 justify-between flex'>
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

                    {/*<div className='admin-overview-card border-blue-400 flex'>*/}
                    {/*    <div className='w-1/2 flex'>*/}
                    {/*        <img src={salary} className='w-12 h-12' alt='icon'/>*/}
                    {/*    </div>*/}
                    {/*    <div className='w-1/2 items-center justify-end flex'>*/}
                    {/*        <div className='justify-end text-right'>*/}
                    {/*            <div className='font-medium text-xs text-secondary-gray-light'>Salary</div>*/}
                    {/*            <span className='font-medium text-md'>189000</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
    )
}
export default FmDashboard
