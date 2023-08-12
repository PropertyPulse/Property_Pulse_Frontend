import React from 'react'
// import expenses from "../../Assets/expenses.png";
// import revenues from "../../Assets/revenues.png";
// import users from "../../Assets/users.png";
// import salary from "../../Assets/salary.png";
// import profit from "../../Assets/profit.png";

import moneyin from "./icons/money_2382625.png"
import moneyout from "./icons/finance_10353597.png"
import netprofit from "./icons/recovery_7358557.png"
// import CashFlowChart from "./common/CashFlowChart";

// import ApexCharts from 'apexcharts'


const FmDashboard = () => {
    // const labels = ['2023-01', '2023-02', '2023-03', /* ... */];
    // const inflows = [2000, 2500, 2200, /* ... */];
    // const outflows = [1500, 1800, 2000, /* ... */];


    return (
        <div>
            <section className=''>
                <div className="md:shadow px-10 py-5">
                    <h2 className='sub-title text-md rounded-lg pb-4'>Overview</h2>
                    <div className='w-full justify-between flex'>

                        <div className="w-[400px] h-200 bg-white shadow-lg rounded-lg p-0 m-2 flex">
                            <div className={"h-full bg-emerald-500 w-5 rounded-r-xl shadow-xl"}></div>
                            <div className={"p-2 flex"}>
                                <img src={moneyin} className="w-20 h-20"  alt=""/>
                                <div className='ml-4'>
                                    <p className='text-2xl font-bold'>N 1,000,000</p>
                                    <p className='pl-2 text text-gray-500'>Total Amount to be received</p>
                                </div>
                            </div>

                        </div>

                        <div className="w-[400px] h-200 bg-white shadow-lg rounded-lg p-0 m-2 flex">
                            <div className={"h-full bg-orange-500 w-5 rounded-r-xl shadow-xl"}></div>
                            <div className={"p-2 flex"}>
                                <img src={moneyout} className="w-20 h-20"  alt=""/>
                                <div className='ml-4'>
                                    <p className='text-2xl font-bold'>N 1,000,000</p>
                                    <p className='pl-2 text text-gray-500'>Total Amount to be paid</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[400px] h-200 bg-white shadow-lg rounded-lg p-0 m-2 flex">
                            <div className={"h-full bg-amber-300 w-5 rounded-r-xl shadow-xl"}></div>
                            <div className={"p-2 flex"}>
                                <img src={netprofit} className="w-20 h-20"  alt=""/>
                                <div className='ml-4'>
                                    <p className='text-2xl font-bold'>N 1,000,000</p>
                                    <p className='pl-2 text text-gray-500'>Net profit</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="md:shadow px-10 py-5">
                    <h2 className='sub-title text-md rounded-lg pb-4'>Cash Flow</h2>

                    </div>


            </section>
            <div id="chart">
            </div>
        </div>
    )
}
export default FmDashboard
