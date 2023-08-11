import React from "react";

const PropertiesTable = () => {
    return(
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 px-5 py-5">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400 pb-2">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Owner
                </th>
                <th scope="col" className="px-6 py-3">
                    Property ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                {/*<th scope="col" className="px-6 py-3">*/}
                {/*    <span className="sr-only">Edit</span>*/}
                {/*</th>*/}
                <th scope="col" className="px-6 py-3">
                    View Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Price List Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Legal Contract
                </th>
            </tr>
            </thead>
            <tbody>
            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th scope="row"
                    className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Deepamal Shaminda
                </th>
                <td className="px-6 py-2">
                    P012
                </td>
                <td className="px-6 py-2">
                    House
                </td>
                <td className="px-6 py-2">
                    <button type="button"
                            className="text-white bg-gradient-to-br from-blue-button-start to-blue-button-end font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">View on Map
                    </button>
                </td>
                <td className="px-6 py-2">
                    <label
                        className="text-white bg-gradient-to-br from-green-400 to-green-600 font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">Visited
                    </label>
                </td>
                <td className="px-6 py-2">
                    <button type="button"
                            className="text-white bg-gradient-to-br from-red-400 to-red-600 font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">Send
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
                            className="text-white bg-gradient-to-br from-red-400 to-red-600 font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">upload
                    </button>
                </td>

            </tr>
            </tbody>
        </table>
    )
}

export default PropertiesTable