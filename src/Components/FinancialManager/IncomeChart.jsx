import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card } from "flowbite-react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import { useState, useEffect } from 'react';


  




const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const monthTickFormatter = (tick) => {
  const date = new Date(tick);
  return monthNamesShort[date.getMonth()];
};

const IncomeChart = () => {
    const axiosPrivate = useAxiosPrivate();
    const[data, setData] = useState([]); // Initial empty array of posts


    const fetchData = async () => {
        try {
            const response = await axiosPrivate.get('/api/v1/payments/getFMDashboardData');
            setData(response.data); // Store response data in state
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


  return (

    <>
     <Card className="m-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            <p>This year Income Overview</p>
          </h5>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={monthTickFormatter} label={{ value: "Months", position: "insideBottom", offset: -5 }} />
        <YAxis label={{ value: "Rs", angle: -90, position: "insideLeft", offset: -10 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" name="Income" fill="#8884d8" />
        <Bar dataKey="uv" name="Expenses" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    </Card>
    </>
  );
};

export default IncomeChart;
