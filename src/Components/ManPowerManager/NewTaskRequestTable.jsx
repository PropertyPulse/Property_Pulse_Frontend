import { Table } from "flowbite-react";
import { Button, Modal, Select } from "flowbite-react";
import React, { useState } from "react";
import { Label, Textarea } from "flowbite-react";
import { Pagination } from 'flowbite-react';

const NewTaskRequestTable = () => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);


  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>property Id</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Task Id</Table.HeadCell>
            <Table.HeadCell>Shedule Date</Table.HeadCell>
            <Table.HeadCell>Details</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">ACtion</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {/* Employee Row 1 */}
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                10101010
              </Table.Cell>
              <Table.Cell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View Locaton
                </a>
              </Table.Cell>
              <Table.Cell>T102020</Table.Cell>
              <Table.Cell>2023/09/10</Table.Cell>
              <Table.Cell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View Details
                </a>
              </Table.Cell>
              <Table.Cell>
                <Button
                  className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                  onClick={() => props.setOpenModal("placement")}
                >
                  Action
                </Button>
                <Modal
                  show={props.openModal === "placement"}
                  position={props.modalPlacement}
                  onClose={() => props.setOpenModal(undefined)}
                >
                  <Modal.Header>Feedback </Modal.Header>
                  <Modal.Body>
                    <div className="">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        You can accept or decline with some feedback.Our team
                        will contact you soon..
                      </p>
                      <div className="mb-2 block mt-4">
                        <Label htmlFor="comment" value="Your Feedback" />
                      </div>
                      <Textarea
                        id="comment"
                        placeholder="your feedback"
                        rows={1}
                      />
                    </div>

                    <div>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        
                      </p>

                      <div className="max-w-md" id="select">
                        <div className="mb-2 block">
                          <Label
                            htmlFor="countries"
                            value="Assign Employees"
                          />
                        </div>
                        <Select id="countries" required>
                          <option>Surani</option>
                          <option>Shashika</option>
                          <option>kavisha</option>
                          <option>Deepamal</option>
                        </Select>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => props.setOpenModal(undefined)} className="bg-secondary-gray hover:bg-secondary-gray-light">
                      Accept
                    </Button>
                    <Button
                      color="gray"
                      onClick={() => props.setOpenModal(undefined)}
                    >
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                10101010
              </Table.Cell>
              <Table.Cell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View Locaton
                </a>
              </Table.Cell>
              <Table.Cell>T102020</Table.Cell>
              <Table.Cell>2023/09/10</Table.Cell>
              <Table.Cell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View Details
                </a>
              </Table.Cell>
              <Table.Cell>
                <Button
                  className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                  onClick={() => props.setOpenModal("placement")}
                >
                  Action
                </Button>
                <Modal
                  show={props.openModal === "placement"}
                  position={props.modalPlacement}
                  onClose={() => props.setOpenModal(undefined)}
                >
                  <Modal.Header>Feedback </Modal.Header>
                  <Modal.Body>
                    <div className="">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        You can accept or decline with some feedback.Our team
                        will contact you soon..
                      </p>
                      <div className="mb-2 block mt-4">
                        <Label htmlFor="comment" value="Your Feedback" />
                      </div>
                      <Textarea
                        id="comment"
                        placeholder="your feedback"
                        rows={1}
                      />
                    </div>

                    <div>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        
                      </p>

                      <div className="max-w-md" id="select">
                        <div className="mb-2 block">
                          <Label
                            htmlFor="countries"
                            value="Assign Employees"
                          />
                        </div>
                        <Select id="countries" required>
                          <option>Surani</option>
                          <option>Shashika</option>
                          <option>kavisha</option>
                          <option>Deepamal</option>
                        </Select>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => props.setOpenModal(undefined)} className="bg-secondary-gray hover:bg-secondary-gray-light">
                      Accept
                    </Button>
                    <Button
                      color="gray"
                      onClick={() => props.setOpenModal(undefined)}
                    >
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                10101010
              </Table.Cell>
              <Table.Cell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View Locaton
                </a>
              </Table.Cell>
              <Table.Cell>T102020</Table.Cell>
              <Table.Cell>2023/09/10</Table.Cell>
              <Table.Cell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View Details
                </a>
              </Table.Cell>
              <Table.Cell>
                <Button
                  className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                  onClick={() => props.setOpenModal("placement")}
                >
                  Action
                </Button>
                <Modal
                  show={props.openModal === "placement"}
                  position={props.modalPlacement}
                  onClose={() => props.setOpenModal(undefined)}
                >
                  <Modal.Header>Feedback </Modal.Header>
                  <Modal.Body>
                    <div className="">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        You can accept or decline with some feedback.Our team
                        will contact you soon..
                      </p>
                      <div className="mb-2 block mt-4">
                        <Label htmlFor="comment" value="Your Feedback" />
                      </div>
                      <Textarea
                        id="comment"
                        placeholder="your feedback"
                        rows={1}
                      />
                    </div>

                    <div>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        
                      </p>

                      <div className="max-w-md" id="select">
                        <div className="mb-2 block">
                          <Label
                            htmlFor="countries"
                            value="Assign Employees"
                          />
                        </div>
                        <Select id="countries" required>
                          <option>Surani</option>
                          <option>Shashika</option>
                          <option>kavisha</option>
                          <option>Deepamal</option>
                        </Select>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => props.setOpenModal(undefined)} className="bg-secondary-gray hover:bg-secondary-gray-light">
                      Accept
                    </Button>
                    <Button
                      color="gray"
                      onClick={() => props.setOpenModal(undefined)}
                    >
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                10101010
              </Table.Cell>
              <Table.Cell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View Locaton
                </a>
              </Table.Cell>
              <Table.Cell>T102020</Table.Cell>
              <Table.Cell>2023/09/10</Table.Cell>
              <Table.Cell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View Details
                </a>
              </Table.Cell>
              <Table.Cell>
                <Button
                  className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                  onClick={() => props.setOpenModal("placement")}
                >
                  Action
                </Button>
                <Modal
                  show={props.openModal === "placement"}
                  position={props.modalPlacement}
                  onClose={() => props.setOpenModal(undefined)}
                >
                  <Modal.Header>Feedback </Modal.Header>
                  <Modal.Body>
                    <div className="">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        You can accept or decline with some feedback.Our team
                        will contact you soon..
                      </p>
                      <div className="mb-2 block mt-4">
                        <Label htmlFor="comment" value="Your Feedback" />
                      </div>
                      <Textarea
                        id="comment"
                        placeholder="your feedback"
                        rows={1}
                      />
                    </div>

                    <div>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        
                      </p>

                      <div className="max-w-md" id="select">
                        <div className="mb-2 block">
                          <Label
                            htmlFor="countries"
                            value="Assign Employees"
                          />
                        </div>
                        <Select id="countries" required>
                          <option>Surani</option>
                          <option>Shashika</option>
                          <option>kavisha</option>
                          <option>Deepamal</option>
                        </Select>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => props.setOpenModal(undefined)} className="bg-secondary-gray hover:bg-secondary-gray-light">
                      Accept
                    </Button>
                    <Button
                      color="gray"
                      onClick={() => props.setOpenModal(undefined)}
                    >
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                10101010
              </Table.Cell>
              <Table.Cell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View Locaton
                </a>
              </Table.Cell>
              <Table.Cell>T102020</Table.Cell>
              <Table.Cell>2023/09/10</Table.Cell>
              <Table.Cell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View Details
                </a>
              </Table.Cell>
              <Table.Cell>
                <Button
                  className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                  onClick={() => props.setOpenModal("placement")}
                >
                  Action
                </Button>
                <Modal
                  show={props.openModal === "placement"}
                  position={props.modalPlacement}
                  onClose={() => props.setOpenModal(undefined)}
                >
                  <Modal.Header>Feedback </Modal.Header>
                  <Modal.Body>
                    <div className="">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        You can accept or decline with some feedback.Our team
                        will contact you soon..
                      </p>
                      <div className="mb-2 block mt-4">
                        <Label htmlFor="comment" value="Your Feedback" />
                      </div>
                      <Textarea
                        id="comment"
                        placeholder="your feedback"
                        rows={1}
                      />
                    </div>

                    <div>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        
                      </p>

                      <div className="max-w-md" id="select">
                        <div className="mb-2 block">
                          <Label
                            htmlFor="countries"
                            value="Assign Employees"
                          />
                        </div>
                        <Select id="countries" required>
                          <option>Surani</option>
                          <option>Shashika</option>
                          <option>kavisha</option>
                          <option>Deepamal</option>
                        </Select>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => props.setOpenModal(undefined)} className="bg-secondary-gray hover:bg-secondary-gray-light">
                      Accept
                    </Button>
                    <Button
                      color="gray"
                      onClick={() => props.setOpenModal(undefined)}
                    >
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                10101010
              </Table.Cell>
              <Table.Cell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View Locaton
                </a>
              </Table.Cell>
              <Table.Cell>T102020</Table.Cell>
              <Table.Cell>2023/09/10</Table.Cell>
              <Table.Cell>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View Details
                </a>
              </Table.Cell>
              <Table.Cell>
                <Button
                  className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                  onClick={() => props.setOpenModal("placement")}
                >
                  Action
                </Button>
                <Modal
                  show={props.openModal === "placement"}
                  position={props.modalPlacement}
                  onClose={() => props.setOpenModal(undefined)}
                >
                  <Modal.Header>Feedback </Modal.Header>
                  <Modal.Body>
                    <div className="">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        You can accept or decline with some feedback.Our team
                        will contact you soon..
                      </p>
                      <div className="mb-2 block mt-4">
                        <Label htmlFor="comment" value="Your Feedback" />
                      </div>
                      <Textarea
                        id="comment"
                        placeholder="your feedback"
                        rows={1}
                      />
                    </div>

                    <div>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        
                      </p>

                      <div className="max-w-md" id="select">
                        <div className="mb-2 block">
                          <Label
                            htmlFor="countries"
                            value="Assign Employees"
                          />
                        </div>
                        <Select id="countries" required>
                          <option>Surani</option>
                          <option>Shashika</option>
                          <option>kavisha</option>
                          <option>Deepamal</option>
                        </Select>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => props.setOpenModal(undefined)} className="bg-secondary-gray hover:bg-secondary-gray-light">
                      Accept
                    </Button>
                    <Button
                      color="gray"
                      onClick={() => props.setOpenModal(undefined)}
                    >
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div className="flex items-center justify-center text-center">
      <Pagination
        currentPage={1}
        layout="table"
        onPageChange={page=>{setCurrentPage(page)}}
        showIcons
        totalPages={1000}
      />
    </div>
      </div>
    </>
  );
};

export default NewTaskRequestTable;
