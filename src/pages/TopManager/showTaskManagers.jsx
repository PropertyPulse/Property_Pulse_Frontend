    import React, {useState} from "react";

    import TopManagerSidebar from "../../Components/TopManager/TopManagerSidebar"
    import ProfileCard from "../../Components/TopManager/ProfileCard"
    import NavbarWithoutSidebar from "../../Components/Common/NavbarWithoutSidebar";
    import Pagination from "../../Components/Common/Pagination"
   const  showTaskMangers   = (props) =>  {


        return (
          

                 
                    <div className="p-4  h-5/6 flex flex-col bg-green-500">
                        {/* Your dashboard content goes here */}
                     <div className ="py-3 bg-blue-500">
                         This part is for the breadcrumbs
                     </div>
                    <div className ="grid  grid-cols-1 sm:grid-cols-2  md:grid-rows-2 ">
                        <ProfileCard />

                    </div>
                               <div className = "bg-red">
                                   <Pagination />
                               </div>
                </div>
          

        );

    }

 export default  showTaskMangers;
