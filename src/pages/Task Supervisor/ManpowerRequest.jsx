import React, {useState} from "react";
import InputText from "../../Components/Common/InputText";

const ManpowerRequest = () => {

    const [values, setValues] = useState("");

    const inputs = [
        {
            id: 1,
            name: 'task',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'Task',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-full border-0',
            defaultValue: '',
        },
        {
            id: 2,
            name: 'location',
            type: 'location',
            // errorMessage: "This is a required field",
            label: 'Location',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-1/12 border-0 pl-2'
        },
        {
            id: 3,
            name: 'description',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'Description',
            required: true,
            styles: 'w-11/12 border-0 justify-left'
        },
        {
            id: 4,
            name: 'requiredDate',
            type: 'date',
            // errorMessage: "This is a required field",
            label: 'Required Date',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-1/2 flex-auto border-0'
        },
        {
            id: 5,
            name: 'estimatedPrice',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'Estimated Price',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-1/2 border-0'
        }
    ]

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    return(
        <div className='pt-3'>
            <form className='w-full bg-white py-8 px-16'>
                <div className='flex flex-wrap gap-y-1'>
                    {inputs.map((input) => (
                        <div key={input.id} {...input}  className={input.styles}>
                            {(input.type === 'text') ? (
                                <InputText key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                            ) : (input.type === 'location') ? (<button type="button"
                                                                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Mark on Map</button>) : (input.name === 'description') ? (
                                <textarea id="message" rows="4"
                                          className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5 dark:text-white"
                                          placeholder="Leave a comment..."></textarea>
                            ) :  (

                                <div date-rangepicker className="flex items-center">
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                            </svg>
                                        </div>
                                        <input name="start" type="date"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Select date start"/>
                                    </div>
                                    <span className="mx-4 text-gray-500">to</span>
                                    <div className="relative">
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                            </svg>
                                        </div>
                                        <input name="end" type="date"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Select date end"/>
                                    </div>
                                </div>

                                )}
                        </div>
                    ))}
                </div>
                <div className='w-full pt-8 flex justify-center items-center space-x-6'>
                    <button className='btn-lg bg-primary-blue-800 text-white'>Send Task Request</button>
                </div>
            </form>
        </div>
    )
}

export default ManpowerRequest;

















