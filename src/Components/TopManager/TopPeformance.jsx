import React from "react";
import { Table, Badge } from "flowbite-react";
import { Card } from 'flowbite-react';

const TopPeformance = () => {
  const tableData = [
    {
        description: "shashika",
        paymentStatus: "Credit",
        amount: "10",
      },
      {
        description: "Kavisha",
        paymentStatus: "Debit",
        amount: "8",
      },{
        description: "Deepamal",
        paymentStatus: "Debit",
        amount: "5",
      },
    // Add more transaction data entries here...
  ];

  const recentTransactions = tableData.slice(0, 5); // Get the most recent 5 transactions

  return (
    <div className='m-4'>
      <Card className="max-w-sm">

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Top Peformance
        </p>
      </h5>
        <Table striped>
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>supervisor</Table.HeadCell>
            <Table.HeadCell>Score</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {recentTransactions.map((transaction, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="px-auto">
                    #
                  </Table.Cell>
                <Table.Cell>{transaction.description}</Table.Cell>
                <Table.Cell>{transaction.amount}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
    </div>
  );
}

export default TopPeformance;
