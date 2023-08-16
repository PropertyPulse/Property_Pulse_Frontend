import {BiSolidChevronLeftCircle} from "react-icons/bi";
import {Link} from "react-router-dom";
import React from "react";

const MonthlyReports = () => {

    // const headings = ['Month', '', 'Remarks'];
    //
    // const rows = [
    //     {month: 'June',
    //         remark: 'Lorem ipsum',},
    //     {month: 'July',
    //         remark: 'Lorem ipsum',},
    // ];


    return (
        <div className='w-full px-24 py-10'>

            <div className='flex bg-secondary-gray rounded-2xl text-white text-xs w-fit px-3 py-1'>
                <span className='pr-2 py-0.5'><BiSolidChevronLeftCircle /></span>
                <Link to="/task-supervisor/assigned-properties/view-property">Back to Property</Link>
            </div>

            <div className='flex w-full pt-6'>
                <div className='w-full row sub-title'>Monthly Reports</div>
            </div>
        </div>
    );
}

export default MonthlyReports;