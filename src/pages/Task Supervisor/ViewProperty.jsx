import propertyImage from '../../Assets/property-image.jpg'
import React from "react";
import {Link} from "react-router-dom";

const ViewProperty = () => {

    const propertyDetails = [
        {title: 'Property Type', data: 'House'},
        {title: 'Owner Name', data: 'Anjalee Neelika'},
        {title: 'District', data: 'Colombo'},
        {title: 'Address', data: 'No. 67, Robert Gunawardena Mawatha, Colombo 06'},
        {title: 'Contact Number', data: '077-7891902'},
        {title: 'Insurance Agent Contact', data: '078-2678138'},
        {title: 'Agreement Date', data: '27-07-2023'},
        {title: 'Maintenance Duration', data: '2 Years'},
    ]

    const actions = [
        {text: 'Chat with Owner',
            link: './chat'},
        {text: 'Suggest a New Task'},
        {text: 'View Scheduled Tasks'},
        {text: 'View Requested Tasks'},
        {text: 'View Legal Documents',
            link: './legal-documents'},
        {text: 'View Monthly Reports',
            link: './monthly-reports'},
    ]

    return (
        <div className='w-full bg-background-blue px-24 py-9'>
            <div className='w-full row sub-title'>Property ID: 82389</div>
            <div className='w-full flex row-auto justify-start items-start space-x-8 py-8'>
                <div className='w-4/12'>
                    <div className='card bg-white h-auto py-4'>
                        <img src={propertyImage} className='min-h-[150px]' alt='Property'/>
                    </div>
                    <div className='flex justify-center py-4'>
                        <span className='border-2 border-black rounded-2xl text-center py-1 px-5 font-md text-sm w-fit
                        cursor-pointer hover:bg-secondary-gray-light hover:text-white'>
                            Remove Photo
                        </span>
                    </div>
                </div>
                <div className='w-4/12 card bg-white p-0 flex justify-items-start justify-center'>
                    <div className='p-0'>
                        <div className='sub-title text-lg text-black text-center border-b-2 border-b-black py-2'>Property Details</div>
                        <div className='p-6 w-full'>
                            {propertyDetails.map((info, index) =>(
                                <React.Fragment key={index}>
                                    <div className='w-full flex'>
                                        <div className='w-1/2'>
                                            <div className='py-1 text-sm'>{info.title}</div>
                                        </div>
                                        <div className='w-1/2'>
                                            <div className='py-1 text-sm'>{info.data}</div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-4/12'>
                    <div className='sub-title text-lg text-black border-b-2 border-b-black pb-2'>More Actions</div>
                    <div className='py-4 gap-y-4'>
                        {actions.map((action, index) => (
                            <React.Fragment key={index}>
                                <div className='py-2'>
                                    <Link to={action.link} className='border-2 border-black rounded-2xl text-center py-1 px-5 font-md text-sm w-fit
                                    hover:bg-secondary-gray-light hover:text-white'>
                                        {action.text}
                                    </Link>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className='sub-title text-lg text-black border-b-2 border-b-black pb-2'>Monthly Report</div>
                    <Link to='./submit-monthly-report' className='py-3 flex justify-center'>
                        <div className='btn-md bg-primary-blue-500 text-white w-fit'>Generate Report</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ViewProperty;