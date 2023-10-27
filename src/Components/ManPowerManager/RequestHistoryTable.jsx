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
      status: "Accepted",
    },
    {
      propertyId: "10101011",
      location: "Gampaha",
      task: "Painting",
      amount: 25000.0,
      scheduleDate: "2023/08/12",
      assignedPerson: "Nirmal",
      requestedTime: "1 days",
      status: "Pending",
    },
    {
      propertyId: "11001100",
      location: "Rathnapura",
      task: "Clean the Garden",
      amount: 20000.0,
      scheduleDate: "2023/07/10",
      assignedPerson: "Pavan",
      requestedTime: "2 days",
      status: "Rejected",
    },
    {
      propertyId: "01010101",
      location: "Colombo 05",
      task: "Bathroom makeover",
      amount: 50000.0,
      scheduleDate: "2023/06/10",
      assignedPerson: "Shashika",
      requestedTime: "2 days",
      status: "Pending",
    },

    {
      propertyId: "11110000",
      location: "Anuradhapura",
      task: "Clean the House",
      amount: 10000.0,
      scheduleDate: "2023/04/02",
      assignedPerson: "Shashika",
      requestedTime: "2 days",
      status: "Accepted", 
    },

    {
      propertyId: "10100010",
      location: "Colombo 15",
      task: "Paint the Gate",
      amount: 5000.0,
      scheduleDate: "2023/10/10",
      assignedPerson: "Shashika",
      requestedTime: "1 day",
      status: "Pending",
    },

    {
      propertyId: "01101001",
      location: "Gampaha",
      task: "Clean Backyard",
      amount: 15000.0,
      scheduleDate: "2023/09/10",
      assignedPerson: "Nirmal",
      requestedTime: "2 days",
      status: "Rejected",
    },

    {
      propertyId: "100100110",
      location: "Minuwangoda",
      task: "Water System Makeover",
      amount: 35000.0,
      scheduleDate: "2023/12/08",
      assignedPerson: "Shashika",
      requestedTime: "2 days",
      status: "Pending",
    },
    // ... add more data objects here ...
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
        <form>{/* ... search form contents ... */}</form>
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
                    <div className="flex items-center justify-center">
                      <Badge
                        color={
                          item.status === "Accepted" ? "success" : item.status === "Pending"
                          ? "warning"
                          : "failure"
                        }
                        size="sm"
                      >
                        <p className="text-center">{item.status}</p>
                      </Badge>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))
            )}
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
