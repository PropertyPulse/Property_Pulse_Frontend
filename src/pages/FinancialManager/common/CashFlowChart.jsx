import React from 'react';
import { Line } from 'react-chartjs-2';


const CashFlowChart = ({ labels, inflows, outflows }) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Cash Inflows',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 128, 0, 0.2)',
                data: inflows,
            },
            {
                label: 'Cash Outflows',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                data: outflows,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month',
                },
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Amount',
                },
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default CashFlowChart;
