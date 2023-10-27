import { Table, Button, Modal, Select } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Label, Textarea } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { TextInput } from "flowbite-react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const MpPaybleTable = ({ searchTerm }) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const [paymentIds, setPaymentIds] = useState([]); // State to store payment IDs
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal, setPaymentIds };
  const [currentPage, setCurrentPage] = useState(1);
  const [paymentData, setPaymentData] = useState([]); // State to store response data

  const [selectedMethod, setSelectedMethod] = useState("Cash");


  const [remarks, setRemarks] = useState('');

  // Step 4: Create a handler function to update the remarks
  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };


  // Step 4: Create a handler function to update the selected method
  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const onPageChange = (page) => setCurrentPage(page);

  const axiosPrivate = useAxiosPrivate();

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get('/api/v1/payments/unpaid-per-month');
      setPaymentData(response.data); // Store response data in state
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePay = async () => {
    try {
      const response = await axiosPrivate.post('/api/v1/payments/updatePaymentStatus', JSON.stringify({
        paymentIds:paymentIds,
        paymentMethod:selectedMethod,
        description:remarks

      }));
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    console.log(paymentIds)
  };



  useEffect(() => {
    fetchData();
  }, []);

  // Filter data based on search term
  const filteredData = paymentData.filter((rowData) =>
      Object.values(rowData).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  function getMonthName(monthNumber) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (monthNumber >= 1 && monthNumber <= 12) {
      return months[monthNumber - 1];
    } else {
      return "Invalid Month";
    }
  }


  // Calculate startIndex and endIndex based on currentPage
  const itemsPerPage = 5; // Number of items per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Determine which data to display based on the search term
  const dataToDisplay = searchTerm ? filteredData : paymentData;

  // Slice the data to display based on startIndex and endIndex
  const paginatedData = dataToDisplay.slice(startIndex, endIndex);

  return (
      <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Company Id</Table.HeadCell>
              <Table.HeadCell>Month</Table.HeadCell>
              <Table.HeadCell>Payable Amount</Table.HeadCell>
              <Table.HeadCell>Due Date</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
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
                          1000
                        </Table.Cell>
                        <Table.Cell>{getMonthName(rowData.paymentMonth[1])}</Table.Cell>
                        <Table.Cell>{rowData.totalAmount}</Table.Cell>
                        <Table.Cell>{rowData.dueDate[0]}/{rowData.dueDate[1]}/{rowData.dueDate[2]}</Table.Cell>
                        <Table.Cell>
                          <Button
                              className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                              onClick={() => {
                                props.setOpenModal("placement");
                                // Pass payment IDs to the modal
                                props.setPaymentIds(rowData.paymentIds);
                              }}
                          >
                            Pay
                          </Button>
                          <Modal
                              show={props.openModal === "placement"}
                              position={props.modalPlacement}
                              size="md"
                              onClose={() => props.setOpenModal(undefined)}
                          >
                            <Modal.Header>Payment </Modal.Header>
                            <Modal.Body>
                              <div className="">
                                <div className="max-w-md" id="select">
                                  <div className="mb-2 block">
                                    <Label htmlFor="countries" value="Pay by" />
                                  </div>
                                  <select id="methods" required value={selectedMethod} onChange={handleMethodChange}>
                                    <option value="Cash">Cash</option>
                                    <option value="Check">Check</option>
                                    <option value="Bank Transfer">Bank Transfer</option>
                                  </select>
                                </div>

                                <div>
                                  <div className="mb-2 block">
                                    <Label
                                        htmlFor="required_date"
                                        value="Remarks"
                                    />
                                  </div>
                                  <TextInput
                                      id="date"
                                      placeholder="Remarks"
                                      required
                                      type="text"
                                      value={remarks}
                                      onChange={handleRemarksChange}
                                  />
                                </div>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                  onClick={() => {props.setOpenModal(undefined);
                                  handlePay()}}
                                  className="bg-secondary-gray hover:bg-secondary-gray-light mx-auto"
                              >
                                Pay
                              </Button>
                              {/* Display payment IDs in the modal */}
                              <div>
                                Payment IDs: {paymentIds.join(", ")}
                              </div>
                            </Modal.Footer>
                          </Modal>
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
      </>
  );
};

export default MpPaybleTable;
