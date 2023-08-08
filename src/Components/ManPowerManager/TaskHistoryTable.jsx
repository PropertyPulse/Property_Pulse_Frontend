import { Table } from "flowbite-react";
import React, { useState } from "react";
import { Button, Pagination } from "flowbite-react";
import { Badge } from "flowbite-react";

const TaskHistoryTable = () => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div>
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
                  <span className="w-2">
                    <Badge color="success" size="sm">
                      <p>Success</p>
                    </Badge>
                  </span>
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
                  <Badge color="warning" size="sm">
                    <p>Ongoing</p>
                  </Badge>
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
                  <Badge color="success" size="sm">
                    <p>Success</p>
                  </Badge>
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
                  <Badge color="warning" size="sm">
                    <p>Ongoing</p>
                  </Badge>
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
                  <Badge color="success" size="sm">
                    <p>Success</p>
                  </Badge>
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
                  <Badge color="failure" size="sm">
                    <p>Failure</p>
                  </Badge>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <div className="flex items-center justify-center text-center">
            <Pagination
              currentPage={1}
              layout="table"
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
              showIcons
              totalPages={1000}
            />
          </div>
        </div>
      </>
    </div>
  );
};

export default TaskHistoryTable;
