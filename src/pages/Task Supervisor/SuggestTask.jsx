import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import InputText from "../../Components/Common/InputText";
import {useState} from "react";

const SuggestTaskForm = () => {

    const [values, setValues] = useState("");

    const inputs = [
        {
            id: 1,
            name: 'task',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'Add New Task',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-full border-0',
            defaultValue: '',
        },
        {
            id: 2,
            name: 'frequency',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'Frequency',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-full border-0'
        },
        {
            id: 3,
            name: 'totalCost',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'Total Cost',
            required: true,
            styles: 'w-1/2 flex-auto border-0'
        },
        {
            id: 4,
            name: 'startDate',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'Proposed Start Date',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-1/2 flex-auto border-0'
        }
    ]

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };


    return (
        <div className=''>
            <div className='w-full px-5 py-9'>
                <div className=''>
                    <form className=''>
                        {/*<div className='pb-8 text-center'>*/}
                        {/*    */}
                        {/*</div>*/}
                        <div className='flex flex-wrap gap-y-1'>
                            {inputs.map((input) => (
                                <div key={input.id} {...input}  className={input.styles}>
                                    {(input.type === 'text') || (input.type === 'password') || (input.type === 'email') || (input.type === 'date') ? (
                                        <InputText key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className='w-full pt-8 flex justify-center items-center space-x-6'>
                            <button className='btn-lg bg-primary-blue-800 text-white'>Save</button>
                            <button className='btn-lg bg-red-600 text-white'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SuggestTaskForm;