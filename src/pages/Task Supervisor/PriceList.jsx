import React from "react";

const PriceList = () => {
    return(

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Task
                    </th>
                    <th scope="col" className="px-6 py-3">Estimated Days to Complete</th>
                    <th scope="col" className="px-6 py-3">Number of Workers</th>
                    <th scope="col" className="px-6 py-3">Price</th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        Clean the garden
                    </th>
                    <td className="px-6 py-4">
                        <input placeholder="Enter estimated number of days" className="px-1 py-1 rounded-lg border-2 border-gray-400"/>
                    </td>
                    <td className="px-6 py-4">
                        <input placeholder="Enter number of workers" className="px-1 py-1 rounded-lg border-2 border-gray-400"/>
                    </td>
                    <td className="px-6 py-4">
                        <input placeholder="Enter the price" className="px-1 py-1 rounded-lg border-2 border-gray-400 text-sm"/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    )
}

export default PriceList;