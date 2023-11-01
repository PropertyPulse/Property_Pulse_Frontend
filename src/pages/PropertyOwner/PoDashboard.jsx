import React, { useEffect, useState } from 'react'
import PropertyOwnerDashboard from './PropertyOwnerDashboard'
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

function PoDashboard() {
    const axiosPrivate = useAxiosPrivate();
    const { auth } = useAuth();
    const [properties, setProperties] = useState([]);
    const [ongoingTasks, setOngoingTasks] = useState([]);
 
    const fetchAllProperties = async () => {
        try {
            const response = await axiosPrivate.get(`/api/v1/property/get-all-properties-by-owner?email=${auth.user}`);
            setProperties(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const fetchOngoingTasks = async () => {
        try {
            const response = await axiosPrivate.get(`/api/v1/tasks/ongoing-tasks-po?email=${auth.user}`);
            setOngoingTasks(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        fetchAllProperties();
        fetchOngoingTasks();
    }, [auth.user]);

    useEffect(() => {
        console.log(properties);
    }, [properties]);

    useEffect(() => {
        console.log(ongoingTasks);
    }, [ongoingTasks]);

    return (
        <PropertyOwnerDashboard properties={properties} ongoingTasks={ongoingTasks} />
    );

}

export default PoDashboard