import React from 'react'
import { useState } from 'react'
export default function ComplaintHeader() {


    const Search = () => {
        const handleKeyDown = (event) => {




        }
        const [value, setValue] = useState(" Enter your search here...")
       return  (

           <div className = "relative text-gray-600 focus-within:text-gray-400 w-3/5 ">

                  <input type = "text"    className="bg-green-50  py-2 pl-4 w-full rounded-full text-sm text-left focus:border-sky-500" placeholder  = {value} onKeyDown = {handleKeyDown}   onChange = {(event) => setValue(event.target.value)}/>

                  <button type = "submit" className = "absolute right-0 top-0 mt-2 mr-3">

                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                    />
                </svg>

                    </button>

            </div>

       )

    }

  return (


         <div className = " flex flex-row justify-between items-center w-full  h-20 bg-white px-5 py-5  ">

                     <Search/>

             <div className=" text-gray-600 focus-within:text-gray-400 w-2/8">
                 <button className="bg-white p-2 rounded-ftext-gray-600 border w-full flex-col  md:inline">
                     <p>Sort By</p>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>
                 </button>
             </div>

             <button className = "bg-blue-600 p-2 rounded-full text-white w-1/8" >Add  Complaint+ </button>


</div>

  )
}

