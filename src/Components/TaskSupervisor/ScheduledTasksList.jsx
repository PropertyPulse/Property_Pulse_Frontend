import React from "react";
import EditIcon from "./../../Assets/Icons/edit-icon.png"
import DeleteIcon from "./../../Assets/Icons/delete-icon.png"


const ScheduledTasksList = () => {
    return(
        <div className="table-div py-2 px-2">
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 px-5 py-5">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400 pb-2">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Task
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Frequency
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Proposed Start Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Proposed End Date
                    </th>
                    {/*<th scope="col" className="px-6 py-3">*/}
                    {/*    <span className="sr-only">Edit</span>*/}
                    {/*</th>*/}
                    <th scope="col" className="px-6 py-3">
                        Estimated Cost
                    </th>
                    <th scope="col" className="px-6 py-3">

                    </th>
                    <th scope="col" className="px-6 py-3">

                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                    <th scope="row"
                        className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        Clean the garden
                    </th>
                    <td className="px-6 py-2">
                        Twice a Month
                    </td>
                    <td className="px-6 py-2">
                        2nd, 17th of Every Month
                    </td>
                    <td className="px-6 py-2">
                        3rd , 18th of Every Month
                    </td>
                    <td className="px-6 py-2">
                        3000
                    </td>
                    <td className="px-6 py-2">
                        <button type="button"
                                className="text-white font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                            <img src={EditIcon} className="h-6 h-6" alt="Edit Icon" />
                        </button>
                    </td>
                    <td className="px-6 py-2 justify-center">
                        {/*<button type="button"*/}
                        {/*        className="text-white bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">Danger*/}
                        {/*</button>*/}

                        {/*<button type="button"*/}
                        {/*        className="text-white bg-gradient-to-br from-green-500 to-green-800 font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">View Details*/}
                        {/*</button>*/}
                        <button type="button"
                                className="text-white font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                            <img src={DeleteIcon} className="h-6 h-6" alt="Delete Icon" />
                        </button>
                    </td>

                </tr>
                </tbody>
            </table>

            <div className="flex justify-end mt-4">
                <button className="text-white bg-gradient-to-br bg-blue-button-end font-medium rounded-lg text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                    Add new task
                </button>
            </div>
        </div>
    )
}

export default ScheduledTasksList