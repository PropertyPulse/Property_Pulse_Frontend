// import React, { useState } from 'react';
// import Tab1 from './Tab1'; // Import your Tab1 component
//
//
//     const TaskAssignmentsTabs = () => {
//     const [activeTab, setActiveTab] = useState('tab1'); // Initialize with the default tab
//
//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };
//
//     let content;
//
//     switch (activeTab) {
//         case 'tab1':
//             content = <Tab1 />;
//             break;
//         case 'tab2':
//             content = <Tab1 />;
//             break;
//         case 'tab3':
//             content = <Tab1 />;
//             break;
//         default:
//             content = <Tab1 />; // Default to Tab1
//     }
//
//     return (
//         <div className="flex-1 p-6">
//             <ul className="flex mb-30">
//                 <li
//                     onClick={() => handleTabClick('tab1')}
//                     className={`cursor-pointer bg-calm-blue py-3 px-10 border-t-4 rounded-t-lg  ${activeTab === 'tab1' ? 'border-blue-600' : ''}`}
//                 >
//                     Tab 1
//                 </li>
//                 <li
//                     onClick={() => handleTabClick('tab2')}
//                     className={`cursor-pointer bg-calm-blue py-3 px-10 border-t-4 rounded-t-lg ${activeTab === 'tab2' ? 'border-blue-600' : ''}`}
//                 >
//                     Tab 2
//                 </li>
//                 <li
//                     onClick={() => handleTabClick('tab3')}
//                     className={`cursor-pointer bg-calm-blue py-3 px-10 border-t-4 rounded-t-lg ${activeTab === 'tab3' ? 'border-blue-600' : ''}`}
//                 >
//                     Tab 3
//                 </li>
//             </ul>
//             {content}
//         </div>
//     );
// };
//
// export default TaskAssignmentsTabs;
import React, { useState } from "react";
import {
    TETabs,
    TETabsContent,
    TETabsItem,
    TETabsPane,
} from "tw-elements-react";
import Tab1 from  './Tab1'
import OverdueTasks from './OverdueTasks'
import UnassignedTasks from './UnassignedTasks'
import Tab4 from  './Tab4'

export default function TabsJustify(): JSX.Element {
    const [justifyActive, setJustifyActive] = useState("tab1");

    const handleJustifyClick = (value: string) => {

        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };

    return (
        <div className="mb-4 ml-4 ">
            <div className = "py-2 bg-blue-500" >This part is for  the  BreadCrumbs</div>
            <TETabs  justify>
                <TETabsItem
                    onClick={() => handleJustifyClick("tab1")}
                    active={justifyActive === "tab1"}
                    className={`p-6 text-center b ${
                        justifyActive === "tab1" ? "bg-blue-500 border-b-30 text-white-500 border-b-indigo-500" : "text-white bg-blue-500 hover:bg-sky-700 "
                    }`}
                >

                    Unassigned Tasks
                </TETabsItem>
                <TETabsItem
                    onClick={() => handleJustifyClick("tab2")}
                    active={justifyActive === "tab2"}
                    className={`p-6 text-center ${
                        justifyActive === "tab2" ? " bg-blue-500 border-b-9 text-white-500 border-b-indigo-500" : "text-white bg-blue-500 hover:bg-sky-700 "
                    }`}
                >
                    On-progress
                </TETabsItem>
                <TETabsItem
                    onClick={() => handleJustifyClick("tab3")}
                    active={justifyActive === "tab3"}
                    className={`p-6 text-center ${
                        justifyActive === "tab3" ? "bg-blue-500 border-b-30 text-white-500 border-b-indigo-500" : "text-white bg-blue-500 hover:bg-sky-700 "
                    }`}
                >
                    Completed
                </TETabsItem>
                <TETabsItem
                    onClick={() => handleJustifyClick("tab4")}
                    active={justifyActive === "tab4"}

                    className={`p-6 text-center ${
                        justifyActive === "tab4" ? "bg-blue-500 border-b-30 text-white-500 border-b-indigo-500" : " text-white bg-blue-500 hover:bg-sky-700 "
                    }`}
                >
                    Overdue Tasks
                </TETabsItem>
            </TETabs>



            <TETabsContent>
                <TETabsPane show={justifyActive === "tab1"}><UnassignedTasks/></TETabsPane>
                <TETabsPane show={justifyActive === "tab2"}><Tab1/></TETabsPane>
                <TETabsPane show={justifyActive === "tab3"}><Tab4/></TETabsPane>
                <TETabsPane show={justifyActive === "tab4"}><OverdueTasks/></TETabsPane>
            </TETabsContent>
        </div>
    );
}
