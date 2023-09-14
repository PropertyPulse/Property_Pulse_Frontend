import { Table, Button, Modal, Select } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Label, Textarea } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { TextInput } from "flowbite-react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const TpPaybleTable = ({ searchTerm }) => {
  const axiosPrivate = useAxiosPrivate();
  const [paymentData, setPaymentData] = useState([]);
  const [remarks, setRemarks] = useState('');
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const [selectedPaymentId, setSelectedPaymentId] = useState(null); // State to store selected payment ID
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const [selectedMethod, setSelectedMethod] = useState("Cash");

  // Step 4: Create a handler function to update the selected method
  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

  const handlePay = async () => {
    try {
      const response = await axiosPrivate.post('/api/v1/payments/updatePaymentStatus_task', JSON.stringify({
        id:selectedPaymentId,
        paymentMethod:selectedMethod,
        description:remarks
      }));
      console.log(response.data)

      setRemarks("")
      setSelectedMethod("Check")
      setSelectedPaymentId(null)
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    // console.log(selectedMethod)

  };

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get('/api/v1/payments/unpaid-task-equipment-payments');
      setPaymentData(response.data); // Store response data in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //pagination and filtering
  const itemsPerPage = 5; // Number of items per page

  // Calculate startIndex and endIndex based on currentPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Determine which data to display based on the search term
  const dataToDisplay = searchTerm ? paymentData.filter((rowData) =>
      Object.values(rowData).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
  ) : paymentData;

  // Slice the data to display based on startIndex and endIndex
  const paginatedData = dataToDisplay.slice(startIndex, endIndex);

  return (
      <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Property Id</Table.HeadCell>
              <Table.HeadCell>Task Supervisor Id</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Required Amount</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
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
                        <Table.Cell>{rowData.taskSupervisorId}</Table.Cell>
                        <Table.Cell>{rowData.description}</Table.Cell>
                        <Table.Cell>{rowData.amount + ".00"}</Table.Cell>
                        <Table.Cell>{rowData.date.join("/")}</Table.Cell>
                        <Table.Cell>
                          <Button
                              className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                              onClick={() => {
                                props.setOpenModal("placement");
                                setSelectedPaymentId(rowData.paymentId); // Set the selected payment ID
                              }}
                          >
                            Pay
                          </Button>
                          <Modal
                              show={props.openModal === "placement"}
                              position={props.modalPlacement}
                              size="md"
                              onClose={() => {
                                props.setOpenModal(undefined);
                                setSelectedPaymentId(null); // Clear the selected payment ID
                              }}
                          >
                            <Modal.Header>Payment </Modal.Header>
                            <Modal.Body>
                              <div className="">
                                <div className="max-w-md" id="select">
                                  <div className="mb-2 block">
                                    <Label htmlFor="methods" value="Pay by" />
                                  </div>
                                  <Select id="methods"  required value={selectedMethod} onChange={handleMethodChange}>
                                    <option value="Cash">Cash</option>
                                    <option value="Check">Check</option>
                                    <option value="Bank Transfer">Bank Transfer</option>
                                  </Select>
                                </div>

                                <div>
                                  <div className="mb-2 block">
                                    <Label htmlFor="required_date" value="Remarks" />
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
                                  onClick={() => {
                                    props.setOpenModal(undefined);
                                    setSelectedPaymentId(null);
                                    handlePay();// Clear the selected payment ID
                                  }}
                                  className="bg-secondary-gray hover:bg-secondary-gray-light mx-auto"
                              >
                                Pay
                              </Button>
                              {/* Display selected payment ID in the modal */}
                              <div>
                                Payment ID: {selectedPaymentId}
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

export default TpPaybleTable;
