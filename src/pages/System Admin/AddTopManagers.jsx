import NavbarWithoutSidebar from "../../Components/Common/NavbarWithoutSidebar";
import { Button, ButtonGroup } from "@material-tailwind/react";
import {Link} from "react-router-dom";
import {BiSolidChevronLeftCircle} from "react-icons/bi";
import InputText from "../../Components/Common/InputText";
import React, {useState} from "react";
const AddTopManagers = () => {

    const [values, setValues] = useState({
        userName: "",
    });

    const inputs = [
        {
            id: 1,
            name: 'userRole',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'User Role',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-2/5'
        },
        {
            id: 2,
            name: 'userName',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'User Name',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-auto flex-auto'
        },
        {
            id: 3,
            name: 'address',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'Address',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-3/5'
        },
        {
            id: 4,
            name: 'contactNumber',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'Contact Number',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-auto flex-auto'
        },
        {
            id: 5,
            name: 'email',
            type: 'email',
            // errorMessage: "This is a required field",
            label: 'Email',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-1/2'
        },
        {
            id: 6,
            name: 'password',
            type: 'text',
            // errorMessage: "This is a required field and should contain at least 6 characters",
            label: 'Temporary Password',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-auto flex-auto'
        },
    ]

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    return (
        <div>
            <div className='row w-full'>
                <NavbarWithoutSidebar name="Surani Sooriyaarachchi" userRole="System Admin" />
            </div>

            <div className='row px-64 pt-10'>

                <div className='flex bg-secondary-gray rounded-2xl text-white w-fit px-5 py-1'>
                    <span className='pr-2 pt-1'><BiSolidChevronLeftCircle /></span>
                    <Link to="./dashboard">Back to Dashboard</Link>
                </div>

                <ButtonGroup fullWidth ripple={false} className='space-x-1 pb-8 pt-10'>
                    <Button className='bg-primary-blue-500 text-xl font-semibold rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl'>Top Manager</Button>
                    <Button className='bg-secondary-gray-light text-xl font-semibold rounded-none'>Finance Manager</Button>
                    <Button className='bg-secondary-gray-light text-xl font-semibold rounded-none'>Valuation Expert</Button>
                    <Button className='bg-secondary-gray-light text-xl font-semibold rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none'>Task Supervisor</Button>
                </ButtonGroup>

                <div className='pt-4'>
                    <form className='w-full form-wrapper'>
                        <div className='pb-12 text-center'>
                            <span className='title px-0'>Add new users</span>
                        </div>
                        <div className='flex flex-wrap gap-x-4 gap-y-6'>
                            {inputs.map((input) => (
                                <div key={input.id} {...input}  className={input.styles}>
                                    {(input.type === 'text' || input.type === 'password' || input.type === 'email') ? (
                                        <InputText {...input} value={values[input.name]} onChange={onChange} />
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className='w-full pt-10 flex justify-center items-center'>
                            <button className='btn-lg bg-primary-blue-800 text-white'>Add User</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AddTopManagers;