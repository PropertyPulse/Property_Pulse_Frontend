import React, {useEffect, useState} from "react";
import filterIcon from "../../Assets/Icons/filter-icon.png"
import sortIcon from "../../Assets/Icons/sort-icon.png"
import {Button} from "flowbite-react";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";


const PropertiesToBeManaged = () => {
    //
    // const axiosPrivate = useAxiosPrivate();
    // const [{auth}] = useAuth()
    //
    // console.log("fjdiafo")
    // useEffect(() => {
    //     // const fetchData = async () => {
    //     //
    //     //
    //     //     try {
    //     //         const response = await axiosPrivate.post("/api/v1/mpc/getallemployees", {
    //     //             email: auth.user
    //     //         });
    //     //
    //     //         setTableData(response.data);
    //     //         console.log(response.data);
    //     //     } catch (error) {
    //     //         console.error("Error fetching data:", error);
    //     //
    //     //     }
    //     //
    //     //
    //     // };
    //     //
    //     // fetchData();
    //     console.log(auth)
    // }, []);

    const axiosPrivate = useAxiosPrivate();
    const [propertiesToBeManaged, setPropertiesToBeManaged] = useState([]);
    const {auth} = useAuth();

    const fetchData = async () => {
        try {
            const response = await axiosPrivate.get('/api/v1/TS/propertiesToBeManged',{
                params: { email: auth.user }
            });
            setPropertiesToBeManaged(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const NotVisitedHeadings = ['Owner', 'Property ID', 'Type', 'Address', 'Visit'];

    // const rows = [
    //     {owner: 'Anjalee Neelika',
    //         id: 'Colombo 06',
    //         type: 'House',},
    //     {owner: 'Thilanka Jayathilake',
    //         id: 'Gampaha',
    //         type: 'Land'},
    // ];


    const setAsVisited = (status) => {
        status = 'Visited';
        console.log(status);
        return status;

    }

    // const handleButtonClick = (propertyId) => {
    //     console.log(propertyId);
    //     Swal.fire({
    //         title: 'Did you visit the property?',
    //         text: "Property will be added to the visited list!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // Make an API call to update the property visit status
    //             axios
    //                 .post('/api/v1/TS/updatePropertyVisitStatus', {
    //                     // params: { propertyId: propertyId , visitStatus: 'true'}
    //                     propertyId: propertyId,
    //                     visitStatus: true,
    //                 })
    //                 .then((response) => {
    //                     Swal.fire(
    //                         'Done!',
    //                         'Property added to the visited list!',
    //                         'success'
    //                     );
    //                 })
    //                 .catch((error) => {
    //                     // Handle error
    //                     Swal.fire('Error', 'Failed to update property visit status', 'error');
    //                 });
    //         }
    //     });
    // };

    const handleButtonClick = (propertyId) => {
        Swal.fire({
            title: 'Did you visit the property?',
            text: "Property will be added to the visited list!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                // Create a JSON object with propertyId and visitStatus
                const data = {
                    propertyId: propertyId,
                    visitStatus: true, // Update to the desired visit status
                };
                console.log(data);

                // Make an API call to update the property visit status
                axiosPrivate
                    .post('http://localhost:8080/api/v1/TS/updatePropertyVisitStatus', data)
                    .then((response) => {
                        Swal.fire(
                            'Done!',
                            'Property added to the visited list!',
                            'success'
                        );
                    })
                    .catch((error) => {
                        // Handle error
                        Swal.fire('Error', 'Failed to update property visit status', 'error');
                    });
            }
        });
    };


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
                            <path d="M19 9l-7 7-7-7"></path>
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
                <Link to='/task-supervisor/properties-to-be-managed/not-visited-properties' className='w-1/2 px-8 py-2 bg-primary-blue-500 flex justify-center text-md font-medium rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl'>
                    Not Visited
                </Link>
                <Link to='/task-supervisor/properties-to-be-managed/visited-properties' className='w-1/2 px-8 py-2 bg-secondary-gray-light flex justify-center text-md font-medium rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none'>
                    Visited
                </Link>
            </div>

            <div className='pt-3 pb-6'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400 pb-2">
                        <tr>
                            {NotVisitedHeadings.map((heading, index) => (
                                <th scope="col" className="px-6 py-3">
                                    {heading}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                            {propertiesToBeManaged.map((row, index) => (
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
                                        <button type="button" className="text-white bg-green-600 font-medium rounded-lg text-xs px-5 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                                                onClick={() => handleButtonClick(row.propertyId)}
                                        >
                                            Mark as Visited
                                        </button>
                                    </td>
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