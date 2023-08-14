import React from 'react';
import ProgressBar from "./ProgressBar";

function Tabs(props) {
    return (
        <div className="block max-w-[18rem] rounded-lg border border-success bg-calm-purple shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
            <div
                className="border-b-2  flex justify-between items-flex-start px-2 py-1 text-neutral-600  dark:text-neutral-50">
                <div  className= "flex flex-col space-y-2 ">
                    <h1 className ="text-black">Land Repairing</h1>

                    <span className = "  rounded-full text-center bg-indigo-500">Routine</span>
                </div>
                <button

                    className=" text-white p-2 rounded-full mt-4 focus:outline-none"
                >
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                </button>

            </div>
            <div className="p-2">

                {/*<span className = "p-1 rounded-full bg-indigo-500">3 days Left</span>*/}

                <ProgressBar />
                <div className="flex justify-between items-center font-bold">

                    <p>Progress</p>
                    <div>25%</div>
                </div>


            </div>
        </div>
    );



}

export default Tabs;
