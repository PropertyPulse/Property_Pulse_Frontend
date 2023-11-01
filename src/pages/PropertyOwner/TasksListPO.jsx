import React, { useEffect, useState } from 'react';
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar';
import Dropdown from '../../Components/PropertyOwner/Dropdown';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useNavigate } from 'react-router-dom';

const TasksListPO = () => {
    const [inputValue, setInputValue] = useState();
    const [scheduledTasks, setScheduledTasks] = useState([]);
    const [selectedTasks, setSelectedTasks] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    const addNewScheduleTask = async(e) => {
        e.preventDefault();

        try {
            const formField = {
                task: inputValue
            }

            const response = await axiosPrivate.post(
                "/api/v1/tasks/add-new-scheduled-task",
                JSON.stringify(formField),
                {

                }
            );
            if(response) {
                navigate('.');
                setInputValue('');
            }
            
        } catch(err) {
            console.error(err);
        }
    }

    const fetchAllScheduledTasks = async () => {
        try {
            const response = await axiosPrivate.get("/api/v1/tasks/get-all-scheduled-tasks");
            setScheduledTasks(response.data);
        } catch (err) {
            console.error('Error fetching data...', err);
        }
    }

    useEffect(() => {
        fetchAllScheduledTasks();
    }, []);

    const scheduleTasksForProperty = async (e) => {
        e.preventDefault();

        const mapTaskFrequency = selectedTasks.map((taskId) => ({
            taskId,
            frequency,
        }));

        try {
            const data = {
                tasks: mapTaskFrequency,
            };

            const response = await axiosPrivate.post(
                "",
                JSON.stringify(data)
            );

            if(response) {
                console.log("Tasks scheduled successfully");
            }
        } catch (err) {
            console.error(err);
        }
    }

    const frequencies = [
        {
            id: 1,
            name: 'once-a-week',
            label: 'Once a week',
            checked: false,
        },
        {
            id: 2,
            name: 'twice-a-week',
            label: 'Twice a week',
            checked: false,
        },
        {
            id: 3,
            name: 'once-in-2-weeks',
            label: 'Once in 2 weeks',
            checked: false,
        },
        {
            id: 4,
            name: 'once-a-month',
            label: 'Once a month',
            checked: false,
        },
        {
            id: 5,
            name: 'once-in-2-months',
            label: 'Once in 2 months',
            checked: false,
        },
        {
            id: 6,
            name: 'once-in-3-months',
            label: 'Once in 3 months',
            checked: false,
        }
    ];

    const [frequency, setFrequency] = useState();

    const handleDropdownSelect = (selectedValue) => {
        setFrequency(selectedValue);
    }

    return (
        <div className='w-full h-[calc(100vh-4.5rem)] flex'>
            <div className='w-full overflow-auto'>  
                
                <section className='h-[calc(100vh-4.5rem)] w-full flex overflow-auto z-10'>
                    <div className='w-full min-h-full h-fit p-10'>
                        <h1 className='text-2xl font-semibold text-center'>Schedule Tasks</h1>
                        <div className='w-full h-full p-10 pt-3 text-sm'>
                            <form className='w-full max-w-[800px] mx-auto'>  
                                <div className='max-h-[400px] overflow-auto'>
                                    {scheduledTasks.map((task) => (
                                        <div className='w-full mb-2 bg-[#A9D6E5] px-5 py-2 flex justify-between items-center rounded-ee-md rounded-se-md border-l-[5px] border-[#012A4A]'>
                                            <div>
                                                <input type='checkbox' className='mr-5' key={task.id} />
                                                <span>{task.id}: {task.task}</span>
                                            </div>
                                            
                                            <Dropdown options={frequencies} label="Select Task Frequency" onSelect={handleDropdownSelect} />
                                        </div>
                                    ))}
                                </div> 
                                <div className='w-full mt-10 flex justify-center items-center'>
                                    <button className='w-fit bg-primary-blue-800 text-white py-3 px-8 rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'>Schedule Tasks</button>
                                </div>
                            </form>                             
                                
                            <form 
                                className='w-full max-w-[800px] mx-auto'
                                onSubmit={addNewScheduleTask}
                            >
                                <div className='mt-10'>
                                    <h2 className='text-lg font-semibold'>Add A New Task</h2>
                                    <div className='w-full mb-2 bg-[#b0ccd5] px-5 py-5 flex justify-between items-center rounded-md border-none'>
                                        <input
                                            type='text'
                                            name='new-task'
                                            placeholder='Enter a new task'
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            className='bg-white min-w-[300px] rounded-md border-[#DDD] text-sm'
                                            required
                                        />
                                        <button
                                            className='bg-primary-blue-800 text-white text-sm py-2.5 px-4 rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'
                                        >
                                            Add New Task
                                        </button>
                                    </div>
                                </div> 
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default TasksListPO
