import React, { useEffect, useState } from "react";
import { Table, Pagination, Badge } from "flowbite-react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const MonthlyPaymentTable = ({ searchTerm }) => {
  const axiosPrivate = useAxiosPrivate();
  const [currentPage, setCurrentPage] = useState(1);
  const [receivedPayments, setReceivedPayments] = useState([]);

  const onPageChange = (page) => setCurrentPage(page);

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get(
          '/api/v1/payments/all-received-monthly-payments'
      );
      setReceivedPayments(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Include dependencies here if needed

  const itemsPerPage = 5; // Number of items per page

  // Filter data based on search term
  const filteredData = receivedPayments.filter((rowData) =>
      Object.values(rowData).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Calculate startIndex and endIndex based on currentPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Determine which data to display based on the search term
  const dataToDisplay = searchTerm ? filteredData : receivedPayments;

  // Slice the data to display based on startIndex and endIndex
  const paginatedData = dataToDisplay.slice(startIndex, endIndex);

  return (
      <div>
        <div className="flex-grow md:w-4/5 p-4">
          {/* Search Form */}
          <form>{/* ... Search Form Content ... */}</form>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Property ID</Table.HeadCell>
              <Table.HeadCell>Amount</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Received Date</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {paginatedData.length === 0 ? (
                  <tr className="h-32">
                    <td colSpan="4" className="text-center py-4">
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
                        <Table.Cell>{rowData.amount}</Table.Cell>
                        <Table.Cell>{rowData.description}</Table.Cell>
                        <Table.Cell>{rowData.receiveddate.join("/")}</Table.Cell>
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

export default MonthlyPaymentTable;
