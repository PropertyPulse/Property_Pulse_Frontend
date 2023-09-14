import InputText from "../../Components/Common/InputText";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AddFinanceManagers = () => {

    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();

    const [values, setValues] = useState("");
    const handleAddUser = async (e) => {
        e.preventDefault();

        const userData = {};

        inputs.forEach((input) => {
            if (input.name) {
                userData[input.name] = values[input.name];
            }
        });

        try {
            const response = await axiosPrivate.post("/api/v1/admin/addFinanceManager", userData, {});

            if (response.status === 200) {
                console.log(response.data);
                navigate('/system-admin/user-profiles');
            } else {
                console.log('Request was not successful:', response);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const inputs = [
        {
            id: 1,
            name: 'userRole',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'User Role',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-1/3 border-0',
            defaultValue: 'Finance Managers',
        },
        {
            id: 2,
            name: 'firstName',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'First Name',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-1/3 border-0'
        },
        {
            id: 3,
            name: 'lastName',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'Last Name',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-auto flex-auto border-0'
        },
        {
            id: 4,
            name: 'address',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'Address',
            required: true,
            styles: 'w-3/5 border-0'
        },
        {
            id: 5,
            name: 'district',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'District',
            pattern: "^[A-Za-z]+$",
            required: true,
            styles: 'w-auto flex-auto border-0'
        },
        {
            id: 6,
            name: 'contactNo',
            type: 'text',
            // errorMessage: "This is a required field",
            label: 'Contact Number',
            pattern: "^[0-9]{10,11}",
            required: true,
            styles: 'w-2/5 flex-auto border-0'
        },
        {
            id: 7,
            name: 'email',
            type: 'email',
            // errorMessage: "This is a required field",
            label: 'Email',
            pattern: "^[a-zA-Z0-9_\\.]+@(?:[a-zA-Z0-9_])+[\\.][[\\.]A-Za-z]+$",
            required: true,
            styles: 'w-3/5 flex-auto border-0'
        },
        {
            id: 8,
            name: 'nic',
            type: 'text',
            // errorMessage: "Invalid NIC",
            label: 'NIC',
            pattern: '^[0-9]{9}([0-9]{3}|v|V)',
            required: true,
            styles: 'w-auto flex-auto border-0'
        },
        {
            id: 9,
            name: 'dob',
            type: 'date',
            // errorMessage: "This is a required field and should contain at least 6 characters",
            label: 'Date of Birth',
            required: true,
            styles: 'w-1/2 border-0'
        },
        {
            id: 10,
            name: 'gender',
            label: 'Gender',
            styles: 'w-1/2 border-0'
        },
        {
            id: 11,
            name: 'password',
            type: 'password',
            // errorMessage: "This is a required field and should contain at least 6 characters",
            label: 'Temporary Password',
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$",
            required: true,
            styles: 'w-auto flex-auto border-0'
        },
    ]

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    return (

        <div className='w-full'>
            <div className='w-full px-24 py-9'>

                <div className='w-full space-x-0.5 pb-6 text-white flex'>
                    <Link to='/system-admin/add-users/top-manager' className='w-1/4 px-8 py-2 bg-secondary-gray-light flex justify-center text-md font-medium rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl'>
                        Top Manager
                    </Link>
                    <Link to='/system-admin/add-users/valuation-expert' className='w-1/4 px-8 py-2 bg-secondary-gray-light flex justify-center text-md font-medium rounded-none'>
                        Valuation Expert
                    </Link>
                    <Link to='/system-admin/add-users/task-supervisor' className='w-1/4 px-8 py-2 bg-secondary-gray-light flex justify-center text-md font-medium rounded-none'>
                        Task Supervisor
                    </Link>
                    <Link to='/system-admin/add-users/finance-manager' className='w-1/4 px-8 py-2 bg-primary-blue-500 flex justify-center text-md font-medium rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none'>
                        Finance Manager
                    </Link>
                </div>

                <div className='pt-3'>
                    <form className='w-full card bg-white py-8 px-16'>
                        <div className='pb-8 text-center'>
                            <span className='font-semibold text-2xl text-primary-blue-500 px-0'>Add new users</span>
                        </div>
                        <div className='flex flex-wrap gap-y-1'>
                            {inputs.map((input) => (
                                <div key={input.id} {...input}  className={input.styles}>
                                    {(input.type === 'text') || (input.type === 'password') || (input.type === 'email') || (input.type === 'date') ? (
                                        <InputText key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                                    ) : (input.name === 'gender') ? (
                                        <div className='w-full flex space-x-16 py-5 text-md'>
                                            <label className='pl-3 text-md text-secondary-gray'>Gender</label>
                                            <div className='flex justify-around items-center gap-24 text-[#8c8c8c]'>
                                                    <span className='flex items-center'>
                                                        <input type='radio' className='mx-2' name='gender' id='gender-male' value='MALE' onChange={onChange} />
                                                        <span className='text-sm'>Male</span>
                                                    </span>
                                                <span className='flex items-center'>
                                                        <input type='radio' className='mx-2' name='gender' id='gender-female' value='FEMALE' onChange={onChange} />
                                                        <span className='text-sm'>Female</span>
                                                    </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className='w-full pt-8 flex justify-center items-center space-x-6'>
                            <button className='btn-lg bg-primary-blue-800 text-white' onClick={handleAddUser}>Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddFinanceManagers;