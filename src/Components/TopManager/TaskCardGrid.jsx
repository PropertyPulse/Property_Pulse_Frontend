import React, { useState } from 'react';

const TaskCardGrid = ({ tasks }) => {
    const itemsPerPage = 6; // Number of tasks to display per page
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    //
    // const filteredTasks = tasks.filter(task => dayjs(task.dueDate).week() === dayjs().week());

    // const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                { tasks.map(task =>
                         {<div key={task.id} className="bg-white rounded-lg shadow p-4">
                        <img src={`/images/`} alt={`Task 1`} className="w-32 h-32 object-cover rounded-full mx-auto mb-2" />
                        <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
                        <p className="text-gray-600 mb-2">Owner {task.owner}</p>
                        <p className="text-gray-600 mb-2">Days Remaining:2</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">View Task</button>
                    </div>
           })}
            </div>
            <div className="mt-4 flex justify-center items-center">
                {Array.from({ length: 5 }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-2 py-1 rounded-full focus:outline-none ${
                            currentPage === index + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TaskCardGrid;
