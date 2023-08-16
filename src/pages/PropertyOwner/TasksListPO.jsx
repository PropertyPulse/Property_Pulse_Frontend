import React from 'react';
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar';
import Dropdown from '../../Components/PropertyOwner/Dropdown';

const TasksListPO = () => {
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

    const tasks = [
        {
            id: 1,
            taskID: 'ST001',
            task: 'Sweep the house',
            frequency: '',
        },
        {
            id: 2,
            taskID: 'ST002',
            task: 'Mop the house',
            frequency: '',
        },
        {
            id: 3,
            taskID: 'ST003',
            task: 'Weed the flowerbeds',
            frequency: '',
        },
        {
            id: 4,
            taskID: 'ST004',
            task: 'Sweep the compound',
            frequency: '',
        },
        {
            id: 5,
            taskID: 'ST005',
            task: 'Weed the compound',
            frequency: '',
        },
        {
            id: 6,
            taskID: 'ST006',
            task: 'Water the plants',
            frequency: '',
        },
    ];

    return (
        <div className='w-full h-[calc(100vh-4.5rem)] flex'>
            <div className='w-full overflow-auto'>  
                
                <section className='h-[calc(100vh-4.5rem)] w-full flex overflow-auto z-10'>
                    <div className='w-full min-h-full h-fit p-10'>
                        <h1 className='text-2xl font-semibold text-center'>Schedule Tasks</h1>
                        <div className='w-full h-full p-10'>
                            <form className='w-full max-w-[800px] mx-auto'>                                
                                {tasks.map((task) => (
                                    <div className='w-full mb-2 bg-[#A9D6E5] px-5 py-2 flex justify-between items-center rounded-ee-md rounded-se-md border-l-[5px] border-[#012A4A]'>
                                        <div>
                                            <input type='checkbox' className='mr-5' key={task.id} />
                                            <span>{task.taskID}: {task.task}</span>
                                        </div>
                                        
                                        <Dropdown options={frequencies} label="Select Task Frequency" />
                                    </div>
                                ))}

                                <div className='w-full mt-10 flex justify-center items-center'>
                                    <button className='w-fit bg-primary-blue-800 text-white py-3 px-8 rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'>Schedule Tasks</button>
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
