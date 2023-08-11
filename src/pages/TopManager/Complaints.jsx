import React from "react";
import ComplaintHeader from "../../Components/TopManager/ComplaintHeader";

const complaints = () =>  {

return( 

      <div className=" flex-col  w-full bg-white md:w-full ">

        

        <ComplaintHeader />


       <div className="rounded-none space-y-2  shadow-lg shadow-indigo-500/40  bg-calm-blue  w-3/5  h-21 font-poppins flex flex-col  justify-between  items-center ml-5 mt-5 px-3 md:flex-row">
         <img
             src="https:www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
             alt="Profile picturetesting"
             className="w-20 h-20 rounded-full  m-3"
         />
         <div className="flex flex-col space-y-2 ">
           <h1 className="text-black text-2xl">Complaint Title</h1>
           <h1 className="text-black  text-xl">Complainant Name</h1>
           <div className="flex flex-row  font-bold space-x-2 md:flex-row">
             <button>

               <svg
                   xmlns="http:www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth={1.5}
                   stroke="currentColor"
                   className="w-6 h-6"
               >
                 <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                 />
               </svg>
             </button>
             <button>

               <svg
                   xmlns="http:www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth={1.5}
                   stroke="currentColor"
                   className="w-6 h-6"
               >
                 <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                 />
               </svg>
             </button>
           </div>
         </div>

         <div className="bg-sweet-red text-red-800 text-lg font-medium mr-2 px-6 py-2 rounded-full dark:bg-red-900 dark:text-red-300">
           Urgent
         </div>
         <button
             type="button"
             className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         >
           View Complaint
         </button>
       </div>
      </div>
 
    );
  }


  export default   complaints;
