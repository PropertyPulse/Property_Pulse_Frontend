import {Link} from "react-router-dom";
import { AiOutlineRight } from 'react-icons/ai';
import React,{useEffect , useState } from  'react';
const  SummaryBox = (props) => {

    const  [FinancialData,setFinancialData] = useState(
        []
    )
    const [HasIncrease,setHasIncrease]  =  useState(false)


    useEffect(() => {

    }, []);

    return(



        <div className="bg-calm-blue px-2 py-3 w-56 text-sm font-medium rounded-lg box-border">
            <div className="flex flex-row space-x-4 items-center">

                <div className = "flex flex-col  space-y-3">
                    <p className=" my-1   uppercase leading-4 flex justify-between "><span>{props.title}</span>
                    {/*    /!*<span>*!/*/}
                    {/*    /!*        {HasIncrease ? (*!/*/}


                    {/*    /!*            <svg*!/*/}
                    {/*    /!*                xmlns="http://www.w3.org/2000/svg"*!/*/}
                    {/*    /!*                width="24"*!/*/}
                    {/*    /!*                height="24"*!/*/}
                    {/*    /!*                viewBox="0 0 24 24"*!/*/}
                    {/*    /!*                fill="none"*!/*/}
                    {/*    /!*                stroke="green"*!/*/}
                    {/*    /!*                stroke-width="2"*!/*/}
                    {/*    /!*                stroke-linecap="round"*!/*/}
                    {/*    /!*                stroke-linejoin="round"*!/*/}
                    {/*    /!*            >*!/*/}
                    {/*    /!*                <path d="M5 15l7-7 7 7"></path>*!/*/}
                    {/*    /!*            </svg>*!/*/}


                    {/*    /!*        ) : (*!/*/}


                    {/*    /!*            <svg*!/*/}
                    {/*    /!*                xmlns="http://www.w3.org/2000/svg"*!/*/}
                    {/*    /!*                width="24"*!/*/}
                    {/*    /!*                height="24"*!/*/}
                    {/*    /!*                viewBox="0 0 24 24"*!/*/}
                    {/*    /!*                fill="none"*!/*/}
                    {/*    /!*                stroke="green"*!/*/}
                    {/*    /!*                stroke-width="2"*!/*/}
                    {/*    /!*                stroke-linecap="round"*!/*/}
                    {/*    /!*                stroke-linejoin="round"*!/*/}
                    {/*    /!*            >*!/*/}
                    {/*    /!*                <path d="M12 19V5"></path>*!/*/}
                    {/*    /!*                <path d="M5 12l7-7 7 7"></path>*!/*/}
                    {/*    /!*            </svg>*!/*/}




                    {/*    /!*        )}*!/*/}





                    {/*</span>*/}

                </p>

                    <p className="text-red-500  text-2xl  ">
                        <span>{props.value}</span>
                        {/*/!*<span>*!/*/}
                        {/*/!*        {HasIncrease ? (*!/*/}


                        {/*/!*            <svg*!/*/}
                        {/*/!*                xmlns="http://www.w3.org/2000/svg"*!/*/}
                        {/*/!*                width="24"*!/*/}
                        {/*/!*                height="24"*!/*/}
                        {/*/!*                viewBox="0 0 24 24"*!/*/}
                        {/*/!*                fill="none"*!/*/}
                        {/*/!*                stroke="green"*!/*/}
                        {/*/!*                stroke-width="2"*!/*/}
                        {/*/!*                stroke-linecap="round"*!/*/}
                        {/*/!*                stroke-linejoin="round"*!/*/}
                        {/*/!*            >*!/*/}
                        {/*/!*                <path d="M5 15l7-7 7 7"></path>*!/*/}
                        {/*/!*            </svg>*!/*/}


                        {/*/!*        ) : (*!/*/}


                        {/*/!*            <svg*!/*/}
                        {/*/!*                xmlns="http://www.w3.org/2000/svg"*!/*/}
                        {/*/!*                width="24"*!/*/}
                        {/*/!*                height="24"*!/*/}
                        {/*/!*                viewBox="0 0 24 24"*!/*/}
                        {/*/!*                fill="none"*!/*/}
                        {/*/!*                stroke="green"*!/*/}
                        {/*/!*                stroke-width="2"*!/*/}
                        {/*/!*                stroke-linecap="round"*!/*/}
                        {/*/!*                stroke-linejoin="round"*!/*/}
                        {/*/!*            >*!/*/}
                        {/*/!*                <path d="M12 19V5"></path>*!/*/}
                        {/*/!*                <path d="M5 12l7-7 7 7"></path>*!/*/}
                        {/*/!*            </svg>*!/*/}




                        {/*/!*        )}*!/*/}





                        {/*            </span>*/}

                    </p>
                   <Link to="/contact" className= "flex space-x-0">See here </Link>
                </div>

                <div>



                </div>
            </div>
        </div>
    )




}



export default  SummaryBox;
