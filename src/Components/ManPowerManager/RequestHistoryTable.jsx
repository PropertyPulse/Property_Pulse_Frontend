import React, { useState } from "react";
import { Table, Pagination, Badge } from "flowbite-react";

const RequestHistoryTable = ({ searchTerm }) => {
    const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const tableData = [
    {
      propertyId: "10101010",
      location: "Maharagama",
      task: "Clean the House",
      amount: 10000.0,
      scheduleDate: "2023/09/10",
      assignedPerson: "Shashika",
      requestedTime: "2 days",
      status: "Accepted"
    },
    {
      propertyId: "10101011",
      location: "Gampaha",
      task: "Painting",
      amount: 25000.0,
      scheduleDate: "2023/09/10",
      assignedPerson: "Shashika",
      requestedTime: "2 days",
      status: "Pending"
    },
    // ... add more data objects here ...
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
      <div className="flex-grow md:w-4/5 p-4">
        {/* search form ... */}
        <form>
          {/* ... search form contents ... */}
        </form>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Property Id</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Task</Table.HeadCell>
            <Table.HeadCell>Amount (Rs)</Table.HeadCell>
            <Table.HeadCell>Schedule Date</Table.HeadCell>
            <Table.HeadCell>Assigned Person</Table.HeadCell>
            <Table.HeadCell>Requested Time</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {paginatedData.length === 0 ? (
              <tr className="h-32">
              <td colSpan="8" className="text-center py-4">
                No data found.
              </td>
            </tr>
            
            
            ) : (
              paginatedData.map((item, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.propertyId}
                </Table.Cell>
                <Table.Cell>
                  <a
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    href="/tables"
                  >
                    {item.location}
                  </a>
                </Table.Cell>
                <Table.Cell>{item.task}</Table.Cell>
                <Table.Cell>{item.amount.toFixed(2)}</Table.Cell>
                <Table.Cell>{item.scheduleDate}</Table.Cell>
                <Table.Cell>{item.assignedPerson}</Table.Cell>
                <Table.Cell>{item.requestedTime}</Table.Cell>
                <Table.Cell>
                  <span className="w-2">
                    <Badge color={item.status === "Accepted" ? "success" : "warning"} size="sm">
                      <p>{item.status}</p>
                    </Badge>
                  </span>
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
  );
};

export default RequestHistoryTable;
