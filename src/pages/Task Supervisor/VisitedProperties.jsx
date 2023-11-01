import React, {useEffect, useState} from "react";
import filterIcon from "../../Assets/Icons/filter-icon.png"
import sortIcon from "../../Assets/Icons/sort-icon.png"
import {Button} from "flowbite-react";
import UploadAgreement from "./UploadAgreement";
import PriceList from "./PriceList";
import {Link} from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";


const PropertiesToBeManaged = () => {
    const axiosPrivate = useAxiosPrivate();
    const [propertiesToBeManagedVisited, setPropertiesToBeManagedVisited] = useState([]);
    const {auth} = useAuth();

    const fetchData = async () => {
        try {
            const response = await axiosPrivate.get('/api/v1/TS/propertiesToBeMangedVisited',{
                params: { email: auth.user }
            });
            setPropertiesToBeManagedVisited(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const VisitedHeadings = ['Owner', 'Property ID', 'Type', 'Address', 'Price List', 'Legal Contract'];

    // const rows = [
    //     {owner: 'Anjalee Neelika',
    //         id: 'Colombo 06',
    //         type: 'House',
    //         priceList: 'Not sent',
    //         legalDocuments: 'Not Uploaded'},
    //     {owner: 'Thilanka Jayathilake',
    //         id: 'Gampaha',
    //         type: 'Land',
    //         priceList: 'Sent',
    //         legalDocuments: 'Uploaded'},
    // ];

    const [showModalPriceList, setShowModalPriceList] = React.useState(false);
    const [showModalUploadAgreement, setShowModalUploadAgreement] = React.useState(false);
    const [propertyTasks, setPropertyTasks] = useState([]);

    const setPriceList = (propertyId) => {

        // Fetch tasks from the backend for the selected property
        // You can use axios or your preferred HTTP client to make this API call
        // Replace 'PROPERTY_ID' with the actual property ID
        axiosPrivate.get('/api/v1/TS/getTaskList', {params : {propertyId : propertyId}})
            .then((response) => {
                setPropertyTasks(response.data);
            })
            .catch((error) => {
                console.error('Error fetching tasks: ', error);
            });

        // Set showModalPriceList to true
        setShowModalPriceList(true);
    };


    const setAsVisited = (status) => {
        status = 'Visited';
        console.log(status);
        return status;

    }

    return (
        <div className='w-full px-24 py-10'>
            <div className='w-full pb-6'>
                <span className='sub-title'>Properties to be Managed</span>
            </div>
            <div className='top flex h-16 space-x-4'>
                <div className='top-part-1 w-3/4'>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-2.5 text-sm text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
                </div>
                <div className='w-1/4 flex justify-self-end space-x-4'>
                    <div className='top-part-2 w-1/2 flex justify-self-end'>
                        <Button id="dropdownDefault" data-dropdown-toggle="dropdown"
                                className="text-white bg-blue-400 font-medium rounded-lg text-sm px-3 text-center inline-flex items-center shadow-md shadow-gray-300"
                                type="button">
                            <img src={filterIcon} alt="metamask" className="h-4 w-4 mr-2" />
                            Filter <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                            <div id="dropdown"
                                 className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                </ul>
                            </div>
                        </Button>
                    </div>

                    <div className='top-part-2 w-1/2 flex justify-self-end'>
                        <Button id="dropdownDefault" data-dropdown-toggle="dropdown"
                                className="text-white bg-blue-400 font-medium rounded-lg text-sm px-3 text-center inline-flex items-center shadow-md shadow-gray-300"
                                type="button">
                            <img src={sortIcon} alt="metamask" className="h-4 w-4 mr-2" />
                            Sort<svg className="ml-2 w-4 h-4" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linejoin="round"  d="M19 9l-7 7-7-7"></path>
                        </svg>
                            <div id="dropdown"
                                 className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                </ul>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>

            <div className='w-full space-x-0.5 pb-6 text-white flex'>
                <Link to='/task-supervisor/properties-to-be-managed/not-visited-properties' className='w-1/2 px-8 py-2 bg-secondary-gray-light  flex justify-center text-md font-medium rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl'>
                    Not Visited
                </Link>
                <Link to='/task-supervisor/properties-to-be-managed/visited-properties' className='w-1/2 px-8 py-2 bg-primary-blue-500 flex justify-center text-md font-medium rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none'>
                    Visited
                </Link>
            </div>

            <div className='pt-3 pb-6'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400 pb-2">
                        <tr>
                            {VisitedHeadings.map((heading, index) => (
                                <th scope="col" className="px-6 py-3">
                                    {heading}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {propertiesToBeManagedVisited.map((row, index) => (
                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                <td scope="col" className="px-6 py-3">
                                    {row.propertyOwnerName}
                                </td>
                                <td className="px-6 py-3">
                                    {row.propertyId}
                                </td>
                                <td className="px-6 py-3">
                                    {row.propertyType}
                                </td>
                                <td className="px-6 py-3">
                                    {row.address}
                                </td>
                                <td className="px-6 py-3">
                                    {(row.priceListStatus === 'Sent') ? (
                                        <label className="text-white bg-green-600 font-medium rounded-2xl text-xs px-3 py-1 text-center inline-flex items-center hover:scale-[1.02]">
                                            Sent
                                        </label>
                                    ) : (row.priceListStatus === 'NotSent') ? (
                                        <button className="text-white bg-yellow-700 font-medium rounded-lg text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                                                onClick={() => setPriceList(row.propertyId) }
                                        >
                                            Send
                                        </button>
                                    ) : (<button></button>)}
                                </td>
                                {showModalPriceList ? (
                                    <>
                                        <div className="z-40 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-h-6xl">
                                            <div className="relative w-auto my-6 mx-auto w-1/3">
                                                {/*content*/}
                                                <div
                                                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div
                                                        className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                                                        {/*<h3 className="text-lg font-semibold text-gray-900 lg:text-2xl dark:text-white">*/}
                                                        {/*    Suggest Task*/}
                                                        {/*</h3>*/}
                                                        <span className='font-semibold text-xl text-primary-blue-500 px-0'>Price List</span>
                                                        <button type="button"
                                                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                                data-modal-toggle="defaultModal"
                                                                onClick={() => setShowModalPriceList(false)}
                                                        >
                                                            <svg className="w-5 h-5" fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    {/*body*/}
                                                    <PriceList tasks={propertyTasks} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                ) : null}

                                <td className="px-6 py-3">
                                    {(row.legalContractStatus === 'Uploaded') ? (
                                        <label className="text-white bg-green-600 font-medium rounded-2xl text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                                            Uploaded
                                        </label>
                                    ) : (row.legalContractStatus  === 'NotUploaded') ? (
                                        <button className="text-white bg-yellow-700 font-medium rounded-lg text-xs px-3
                                                py-1 text-center inline-flex items-center shadow-md shadow-gray-300
                                                hover:scale-[1.02] transition-transform" onClick={() => {setShowModalUploadAgreement(true);} }>
                                            Upload
                                        </button>
                                    ) : (<button></button>)}
                                </td>
                                {showModalUploadAgreement ? (
                                    <>
                                        <div className="z-40 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                            <div className="relative w-auto my-6 mx-auto w-1/3">
                                                <div
                                                    className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                    <div className="flex space-x-32 items-start p-5 rounded-t border-b dark:border-gray-600">
                                                        <span className='font-semibold text-xl text-primary-blue-500 px-0'>Upload Agreement</span>
                                                        <button type="button"
                                                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                                data-modal-toggle="defaultModal"
                                                                onClick={() => setShowModalUploadAgreement(false)}
                                                        >
                                                            <svg className="w-5 h-5" fill="currentColor"
                                                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    {/*body*/}
                                                    <UploadAgreement id={row.propertyId} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                ) : null}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PropertiesToBeManaged;