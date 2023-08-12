import React from 'react';
import PropTypes from 'prop-types';
import TopManagerSidebar from "../../Components/TopManager/TopManagerSidebar";
import SummaryBox from "../../Components/TopManager/SummaryBox";
import TopManagerLineChart from "../../Components/TopManager/TopManagerLineChart";
import TopPerformers from "../../Components/TopManager/PropertyManagementRequest";
import PropertyBox from "../../Components/TopManager/PropertyBox"
import NavbarWithoutSidebar from "../../Components/Common/NavbarWithoutSidebar"

function TaskAssignmentsProperties() {

    return (
       
               
                <div className="p-4  h-5/6 flex flex-col ">
                    {/* Your dashboard content goes here */}


                    <div className="grid grid-cols-1 gap-x-2 gap-y-2 md:grid-cols-4">
                        <PropertyBox />
                        <PropertyBox />
                        <PropertyBox />
                        <PropertyBox />


                    </div>




                </div>
         
    );

}



export default TaskAssignmentsProperties;
