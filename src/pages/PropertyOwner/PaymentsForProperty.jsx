import React from 'react'
import { useParams } from 'react-router-dom';

const PaymentsForProperty = () => {
    const { id } = useParams();

    const duePayments = [
        {
            id: 1,
            amount: 20000.00,
            date: '2023/07/25',
        },
    ];

    const upcomingPayments = [
        {
            id: 1,
            amount: 20000.00,
            date: '2023/08/25',
        },
    ];

    return (
        <div>
            <div className='w-full h-[calc(100vh-4.5rem)] px-10 py-8 overflow-auto'>
                <h1 className='text-2xl font-semibold'>Payments: {id}</h1>
                <div className='w-full min-h-[92%] h-fit'>
                    <div className='w-full h-fit flex flex-auto items-center justify-around mb-5'>
                        <div className='w-1/3 h-full px-3 py-2'>
                            <div className='w-full h-fit text-center rounded-md shadow-lg shadow-[#E2EAFC] bg-white mt-2 p-5'>
                                <h2 className='text-xl font-medium'>Due Payments</h2>
                                {duePayments.map((due) => (
                                    <div key={due.id} className='w-fit h-fit border text-sm text-center text-[#6C757D] px-10 py-5 m-2 bg-[#ffefef] rounded-xl shadow-md mx-auto'>
                                        <div className='text-3xl py-2 text-[#BA0001] font-semibold'>Rs. {due.amount}</div> is <span className='italic text-[#BA0001]'>due </span> 
                                        since <span className='font-semibold text-black'>{due.date}</span>
                                        <div><button className='px-5 py-2 mt-3 bg-[#014F86] text-white rounded-lg hover:bg-[#014F86]'>Pay</button></div>
                                    </div>
                                ))}                                
                            </div>
                        </div>
                        <div className='w-1/3 h-full px-3 py-2'>                            
                            <div className='w-full h-fit text-center rounded-md shadow-lg shadow-[#E2EAFC] bg-white mt-2 p-5'>
                                <h2 className='text-xl font-medium'>Upcoming Payments</h2>
                                {upcomingPayments.map((upcoming) => (
                                    <div key={upcoming.id} className='w-fit h-fit border text-sm text-center text-[#6C757D] px-6 py-5 m-2 bg-[#fff5e2] rounded-xl shadow-md mx-auto'>
                                        <div className='text-3xl py-2 text-[#F9A602] font-semibold'>Rs. {upcoming.amount}</div> <span className='italic text-[#F9A602]'>needs to be paid before </span> 
                                        <span className='font-semibold text-black'>{upcoming.date}</span>
                                        <div>
                                            <button className='px-5 py-2 mt-3 bg-[#014F86] text-white rounded-lg hover:bg-[#014F86]'>Pay</button>
                                        </div>
                                    </div>
                                ))}                                
                            </div>
                        </div>
                        {/* <div className='w-1/3 h-full px-3 py-2'>
                            <div className='w-full h-fit text-center rounded-md shadow-lg shadow-[#E2EAFC] bg-white mt-2 p-5'>
                                <h2 className='text-xl font-medium'>Payments Requested by Finance Manager</h2>
                                {upcomingPayments.map((upcoming) => (
                                    <div key={upcoming.id} className='w-fit h-fit border text-sm text-center text-[#6C757D] px-6 py-5 m-2 bg-[#fff5e2] rounded-xl shadow-md mx-auto'>
                                        For <span className='font-semibold text-black'>{upcoming.propertyID}</span> <div className='text-3xl py-2 text-[#F9A602] font-semibold'>
                                        Rs. {upcoming.amount}</div> <span className='italic text-[#F9A602]'>needs to be paid before</span> <span className='font-semibold text-black'>{upcoming.date}</span>
                                        <div>
                                            <button className='px-5 py-2 mt-3 bg-[#014F86] text-white rounded-lg hover:bg-[#014F86]'>Pay</button>
                                        </div>
                                    </div>
                                ))}                                
                            </div>
                        </div> */}
                    </div>

                    {/* <div className='w-full h-[280px] px-7'>
                        <h2 className='text-xl font-medium'>Payment History</h2>
                        <div className='w-full h-[230px] p-5 rounded-md shadow-lg shadow-[#E2EAFC] bg-white mt-2 overflow-auto'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className="bg-[#EDF2FB] sticky">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Payment ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Payment for
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Payment Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Amount
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="w-full bg-white h-full divide-y divide-gray-200 overflow-auto">                              
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            PA001
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Cleaning House
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            2023/06/28
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Rs. 20000.00
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div> */}

                    <div className='w-full h-[280px] px-7'>
                        <h2 className='text-xl font-medium'>Payment History</h2>
                        <div className='w-full h-[230px] p-5 rounded-md shadow-lg shadow-[#E2EAFC] bg-white mt-2 overflow-auto'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className="bg-[#EDF2FB] sticky">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Payment ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Payment for
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Payment Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Amount
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="w-full bg-white h-full divide-y divide-gray-200 overflow-auto">                              
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            PA001
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Cleaning House
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            2023/06/28
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Rs. 20000.00
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PaymentsForProperty
