import React, {useState} from "react";
import TopPerformers     from "../../Components/TopManager/PropertyManagementRequest";

import SummaryBox   from "../../Components/TopManager/SummaryBox";

import TopManagerLineChart from "../../Components/TopManager/TopManagerLineChart";

// import TaskSupervisorSidebar from "../../Components/TaskSupervisor/TaskSupervisorSidebar";
function TopManagerDashboard(props) {

    const [Chart1Data,setChart1Data] = useState([]);
    const [Chart2Data,setChart2Data] = useState([]);
    const tasks = [
        { id: 1, title: 'Task 1', dueDate: '2023-08-15', image: 'task1.jpg', owner: 'John Doe' },
        { id: 2, title: 'Task 2', dueDate: '2023-08-17', image: 'task2.jpg', owner: 'Jane Smith' },
        // Add more tasks as needed
    ];
        return (
           

      
                <div className="p-4  h-5/6 flex flex-col bg-green-500">
                    {/* Your dashboard content goes here */}



                      <div className="h-full flex items-start bg-purple-600 flex-auto">
                          {/*this is for the summary boxes and the graphs*/}

                          <div className = "flex flex-col bg-amber-400 w-4/6" >
                             <div className = "flex items-center justify-evenly w-full  py-2">
                                 <SummaryBox  title = "overdued assignments"   value = '32' />
                                 <SummaryBox  title = "overdued valuations"   value = '32' />
                                 <SummaryBox  title = "unassigned tasks"   value = '32' />
                             </div>
                              <div className="bg-red-500">

                                  <TopManagerLineChart />

                              </div>
                          </div>

                          <div className = "my-0 py-0">

                              <TopPerformers />
                          </div>
                          {/*this is for calendar*/}

                      </div>






                    <div className="flex  bg-lime-50 flex-auto">
                        <div className= "bg-blue-950">

                        </div>

                        <div className= "bg-pink-300">
                             {/*<TopPerformers />*/}
                        </div>

                    </div>




                </div>
           
        
    );

}

export default TopManagerDashboard;
// App.js
// import React from 'react';
// import Sidebar from './Sidebar';
// import NavigationBar from './NavigationBar';
//
// const App = () => {
//     return (
//         <div className="flex flex-col md:flex-row">
//             {/* Sidebar */}
//             <Sidebar />
//
//             <div className="w-full md:w-4/5">
//                 {/* Navigation Bar */}
//                 <NavigationBar />
//
//                 {/* Dashboard Content */}
//                 <div className="p-4">
//                     {/* Your dashboard content goes here */}
//                     <h1 className="text-2xl font-bold mb-4">Dashboard Page 1</h1>
//                     <p>This is the content of Dashboard Page 1.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default App;
