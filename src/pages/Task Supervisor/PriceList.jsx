import React, { useState } from "react";
import axiosPrivate from "axios"; // Import axios or use it from your project

const PriceList = ({ tasks }) => {
    const [formData, setFormData] = useState([]);

    const handleSubmit = async () => {
        const data = formData.map((formDataItem, index) => {
            const task = tasks[index];
            return {
                taskId: task.taskId, 
                estimatedDays: formDataItem.estimatedDays || 0,
                numWorkers: formDataItem.numWorkers || 0,
                price: formDataItem.price || 0,
            };
        });

        try {
            const response = await axiosPrivate.post("http://localhost:8080/api/v1/TS/setTaskList", data);

            if (response.status === 200) {
                console.log(response.data);
            } else {
                console.log('Request was not successful:', response);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Task
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Estimated Days to Complete
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Number of Workers
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                </tr>
                </thead>
                <tbody>
                {tasks.map((task, index) => (
                    <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {task.taskName}
                        </td>
                        <td className="px-6 py-4">
                            <input
                                placeholder="Enter estimated number of days"
                                className="px-1 py-1 rounded-lg border-2 border-gray-400"
                                onChange={(e) => {
                                    const updatedData = [...formData];
                                    if (!updatedData[index]) {
                                        updatedData[index] = {};
                                    }
                                    updatedData[index]["estimatedDays"] = e.target.value;
                                    setFormData(updatedData);
                                }}
                            />
                        </td>
                        <td className="px-6 py-4">
                            <input
                                placeholder="Enter number of workers"
                                className="px-1 py-1 rounded-lg border-2 border-gray-400"
                                onChange={(e) => {
                                    const updatedData = [...formData];
                                    if (!updatedData[index]) {
                                        updatedData[index] = {};
                                    }
                                    updatedData[index]["numWorkers"] = e.target.value;
                                    setFormData(updatedData);
                                }}
                            />
                        </td>
                        <td className="px-6 py-4">
                            <input
                                placeholder="Enter the price"
                                className="px-1 py-1 rounded-lg border-2 border-gray-400 text-sm"
                                onChange={(e) => {
                                    const updatedData = [...formData];
                                    if (!updatedData[index]) {
                                        updatedData[index] = {};
                                    }
                                    updatedData[index]["price"] = e.target.value;
                                    setFormData(updatedData);
                                }}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button
                type="button" 
                className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                onClick={handleSubmit} 
            >
                Submit
            </button>
        </div>
    );
};

export default PriceList;





// import React from "react";
//
// const PriceList = () => {
//     return(
//
//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                     <th scope="col" className="px-6 py-3">
//                         Task
//                     </th>
//                     <th scope="col" className="px-6 py-3">Estimated Days to Complete</th>
//                     <th scope="col" className="px-6 py-3">Number of Workers</th>
//                     <th scope="col" className="px-6 py-3">Price</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                     <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
//                         Clean the garden
//                     </th>
//                     <td className="px-6 py-4">
//                         <input placeholder="Enter estimated number of days" className="px-1 py-1 rounded-lg border-2 border-gray-400"/>
//                     </td>
//                     <td className="px-6 py-4">
//                         <input placeholder="Enter number of workers" className="px-1 py-1 rounded-lg border-2 border-gray-400"/>
//                     </td>
//                     <td className="px-6 py-4">
//                         <input placeholder="Enter the price" className="px-1 py-1 rounded-lg border-2 border-gray-400 text-sm"/>
//                     </td>
//                 </tr>
//                 </tbody>
//             </table>
//         </div>
//
//     )
// }

// import React from "react";
//
// const PriceList = ({ tasks }) => {
//     return (
//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                     <th scope="col" className="px-6 py-3">
//                         Task
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                         Estimated Days to Complete
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                         Number of Workers
//                     </th>
//                     <th scope="col" className="px-6 py-3">
//                         Price
//                     </th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {console.log(tasks)}
//                 {tasks.map((task, index) => (
//                     <tr
//                         key={index}
//                         className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
//                     >
//                         <th
//                             scope="row"
//                             className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
//                         >
//                             {task.taskName}
//                         </th>
//                         <td className="px-6 py-4">
//                             <input
//                                 placeholder="Enter estimated number of days"
//                                 className="px-1 py-1 rounded-lg border-2 border-gray-400"
//                             />
//                         </td>
//                         <td className="px-6 py-4">
//                             <input
//                                 placeholder="Enter number of workers"
//                                 className="px-1 py-1 rounded-lg border-2 border-gray-400"
//                             />
//                         </td>
//                         <td className="px-6 py-4">
//                             <input
//                                 placeholder="Enter the price"
//                                 className="px-1 py-1 rounded-lg border-2 border-gray-400 text-sm"
//                             />
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default PriceList;