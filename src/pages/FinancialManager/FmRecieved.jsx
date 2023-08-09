import React, {useState} from 'react'
// import moneyin from "./icons/money_2382625.png";
// import moneyout from "./icons/finance_10353597.png";
// import netprofit from "./icons/recovery_7358557.png";
import {Badge, Pagination, Table} from "flowbite-react";

const FmRecieved = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);

    // Define your table data object
    const tableData = [
        {
            propertyId: "10101010",
            tasksupervisorname: "john wick",
            taskid: "T124253",
            payment: "2000.00",
            finishedDate: "2023/09/10",
            assignedPerson: "Shashika",
            paymentStatus: "Completed",
        },
        {
            propertyId: "10101010",
            tasksupervisorname: "john wick",
            taskid: "T102020",
            payment: "2000.00",
            finishedDate: "2023/09/10",
            assignedPerson: "Shashika",
            paymentStatus: "Pending",
        },
        {
            propertyId: "10101010",
            tasksupervisorname: "john wick",
            taskid: "T102020",
            payment: "2000.00",
            finishedDate: "2023/09/10",
            assignedPerson: "Shashika",
            paymentStatus: "Pending",
        },
        {
            propertyId: "10101010",
            tasksupervisorname: "john wick",
            taskid: "T102020",
            payment: "2000.00",
            finishedDate: "2023/09/10",
            assignedPerson: "Shashika",
            paymentStatus: "Pending",
        },
        {
            propertyId: "10101010",
            tasksupervisorname: "john wick",
            taskid: "T102020",
            payment: "2000.00",
            finishedDate: "2023/09/10",
            assignedPerson: "Shashika",
            paymentStatus: "Pending",
        },
        {
            propertyId: "10101010",
            tasksupervisorname: "john wick",
            taskid: "T102020",
            payment: "2000.00",
            finishedDate: "2023/09/10",
            assignedPerson: "Shashika",
            paymentStatus: "Pending",
        },
    ];

    const itemsPerPage = 5; // Number of items per page

    // Filter data based on search term
    const filteredData = tableData.filter((rowData) =>
        Object.values(rowData).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Calculate startIndex and endIndex based on currentPage
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Determine which data to display based on the search term
    const dataToDisplay = searchTerm ? filteredData : tableData;

    // Slice the data to display based on startIndex and endIndex
    const paginatedData = dataToDisplay.slice(startIndex, endIndex);


    return (
        <div>
            <section className=''>
                <div className="md:shadow px-10 py-5">
                    <h2 className='sub-title text-md rounded-lg pb-4'>Receivable payments</h2>
                    <div className="flex-grow md:w-4/5 p-4">
                        {/* search form ... */}
                        <form>
                            <label
                                htmlFor="default-search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search EmployeeId, Name, Nic..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <Table striped>
                            <Table.Head>
                                <Table.HeadCell>Property ID</Table.HeadCell>
                                <Table.HeadCell>Task Supervisor name</Table.HeadCell>
                                <Table.HeadCell>Task ID</Table.HeadCell>
                                <Table.HeadCell>Payment</Table.HeadCell>
                                <Table.HeadCell>Due date</Table.HeadCell>
                                <Table.HeadCell>Payment Status</Table.HeadCell>
                                <Table.HeadCell>
                                    <span className="sr-only">Action</span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {paginatedData.length === 0 ? (
                                    <tr className="h-32">
                                        <td colSpan="8" className="text-center py-4">
                                            No data found.
                                        </td>
                                    </tr>
                                ) : (
                                    paginatedData.map((rowData, index) => (
                                        <Table.Row
                                            key={index}
                                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                        >
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {rowData.propertyId}
                                            </Table.Cell>
                                            <Table.Cell>
                                                    {rowData.tasksupervisorname}
                                            </Table.Cell>
                                            <Table.Cell>{rowData.taskid}</Table.Cell>
                                            <Table.Cell>{rowData.payment}</Table.Cell>
                                            <Table.Cell>{rowData.finishedDate}</Table.Cell>
                                            <Table.Cell>
                                                <Badge
                                                    color={
                                                        rowData.paymentStatus === "Completed"
                                                            ? "success"
                                                            : rowData.paymentStatus === "Pending"
                                                                ? "warning"
                                                                : "failure"
                                                    }
                                                    size="sm"
                                                >
                                                    <p>{rowData.paymentStatus}</p>
                                                </Badge>
                                            </Table.Cell>
                                        </Table.Row>
                                    )))}
                            </Table.Body>
                        </Table>
                        <div className="flex items-center justify-center text-center">
                            <Pagination
                                currentPage={currentPage}
                                layout="table"
                                onPageChange={onPageChange}
                                showIcons
                                totalPages={Math.ceil(dataToDisplay.length / itemsPerPage)}
                            />
                        </div>
                    </div>
                </div>


            </section>

        </div>
    )
    }
export default FmRecieved
