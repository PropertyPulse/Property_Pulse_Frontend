import React from "react";
import filterIcon from "../../Assets/Icons/filter-icon.png"
import sortIcon from "../../Assets/Icons/sort-icon.png"
import {Button} from "flowbite-react";

const AssignedProperties= () => {
    return (
        <div className='w-full px-24'>
            <div className='top flex h-16 space-x-12'>
                <div className='top-part-1 w-1/2'>

                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-2.5 text-sm text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
                </div>
                <div className='w-1/2 flex justify-self-end space-x-6'>
                    <div className='top-part-2 w-1/2 flex justify-self-end'>
                        <Button id="dropdownDefault" data-dropdown-toggle="dropdown"
                                className="text-white bg-gradient-to-br from-blue-500 to-blue-800 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                                type="button">
                            <img src={filterIcon} alt="metamask" className="h-4 w-4 mr-2" />
                            Dropdown button <svg className="ml-2 w-4 h-4" fill="none"
                                                 stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                            <div id="dropdown"
                                 className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="Common#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="Common#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="Common#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="Common#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                                            out</a>
                                    </li>
                                </ul>
                            </div>
                        </Button>
                    </div>

                    <div className='top-part-2 w-1/2 flex justify-self-end'>
                        <Button id="dropdownDefault" data-dropdown-toggle="dropdown"
                                className="text-white bg-gradient-to-br from-blue-500 to-blue-800 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                                type="button">
                            <img src={sortIcon} alt="metamask" className="h-4 w-4 mr-2" />
                            Dropdown button <svg className="ml-2 w-4 h-4" fill="none"
                                                 stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linejoin="round"  d="M19 9l-7 7-7-7"></path>
                        </svg>
                            <div id="dropdown"
                                 className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="Common#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="Common#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="Common#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="Common#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                                            out</a>
                                    </li>
                                </ul>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
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
                    {/*<tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">*/}
                    {/*    <th scope="row"*/}
                    {/*        className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">*/}
                    {/*        Surani Sooriaarachchi*/}
                    {/*    </th>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        P015*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        House*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        <button type="button"*/}
                    {/*                className="text-white bg-gradient-to-br from-blue-button-start to-blue-button-end font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">View on Map*/}
                    {/*        </button>*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2 justify-center">*/}
                    {/*        <button type="button"*/}
                    {/*                className="text-white bg-gradient-to-br from-green-500 to-green-800 font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">View Details*/}
                    {/*        </button>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    {/*<tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">*/}
                    {/*    <th scope="row"*/}
                    {/*        className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">*/}
                    {/*        Thilanka Jayathilake*/}
                    {/*    </th>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        P011*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        Land*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        <button type="button"*/}
                    {/*                className="text-white bg-gradient-to-br from-blue-button-start to-blue-button-end font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">View on Map*/}
                    {/*        </button>*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2 justify-center">*/}
                    {/*        <button type="button"*/}
                    {/*                className="text-white bg-gradient-to-br from-green-500 to-green-800 font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">View Details*/}
                    {/*        </button>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    {/*<tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">*/}
                    {/*    <th scope="row"*/}
                    {/*        className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">*/}
                    {/*        Rashmina Senadeera*/}
                    {/*    </th>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        P020*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        House*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        <button type="button"*/}
                    {/*                className="text-white bg-gradient-to-br from-blue-button-start to-blue-button-end font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">View on Map*/}
                    {/*        </button>*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2 justify-center">*/}
                    {/*        <button type="button"*/}
                    {/*                className="text-white bg-gradient-to-br from-green-500 to-green-800 font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">View Details*/}
                    {/*        </button>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    {/*<tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">*/}
                    {/*    <th scope="row"*/}
                    {/*        className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">*/}
                    {/*        Kshantha Sajith*/}
                    {/*    </th>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        P023*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        Land*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        <button type="button"*/}
                    {/*                className="text-white bg-gradient-to-br from-blue-button-start to-blue-button-end font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">View on Map*/}
                    {/*        </button>*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2 justify-center">*/}
                    {/*        <button type="button"*/}
                    {/*                className="text-white bg-gradient-to-br from-green-500 to-green-800 font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">View Details*/}
                    {/*        </button>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    {/*<tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">*/}
                    {/*    <th scope="row"*/}
                    {/*        className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">*/}
                    {/*        Shashika Deshan*/}
                    {/*    </th>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        P018*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        House*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2">*/}
                    {/*        <button type="button"*/}
                    {/*                className="text-white bg-gradient-to-br from-blue-button-start to-blue-button-end font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">View on Map*/}
                    {/*        </button>*/}
                    {/*    </td>*/}
                    {/*    <td className="px-6 py-2 justify-center">*/}
                    {/*        <button type="button"*/}
                    {/*                className="text-white bg-gradient-to-br from-green-500 to-green-800 font-medium rounded-xl text-sm px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">View Details*/}
                    {/*        </button>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AssignedProperties;