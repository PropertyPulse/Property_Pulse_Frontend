import InputText from "../../Components/Common/InputText";
import React, {useState} from "react";
import propertyImage from "../../Assets/property-image.jpg";
import {ImCamera} from "react-icons/im";
import {Link} from "react-router-dom";

const ViewProfile = () => {

    const [values, setValues] = useState("");

    const inputs = [
        {
            id: 1,
            name: 'userRole',
            type: 'text',
            label: 'User Role',
            styles: 'w-full border-0',
            defaultValue: 'Top Manager',
        },
        {
            id: 2,
            name: 'userName',
            type: 'text',
            label: 'User Name',
            styles: 'w-full border-0',
            defaultValue: "Kavisha Abeynayake",
        },
        {
            id: 3,
            name: 'address',
            type: 'text',
            label: 'Address',
            styles: 'w-full border-0',
            defaultValue: 'No.34/A, Second Lane, Kaduwela',
        },
        {
            id: 4,
            name: 'district',
            type: 'text',
            label: 'District',
            styles: 'w-1/2 border-0',
            defaultValue: 'Colombo',
        },
        {
            id: 5,
            name: 'contactNumber',
            type: 'text',
            label: 'Contact Number',
            styles: 'w-1/2 border-0',
            defaultValue: '071-3829173',
        },
        {
            id: 6,
            name: 'email',
            type: 'text',
            label: 'Email',
            styles: 'w-1/2 border-0',
            defaultValue: 'kavisha@gmail.com',
        },
        {
            id: 7,
            name: 'nic',
            type: 'text',
            label: 'NIC',
            styles: 'w-1/2 border-0',
            defaultValue: '992678292V',
        },
        {
            id: 8,
            name: 'dob',
            type: 'text',
            label: 'Date of Birth',
            styles: 'w-1/2 border-0',
            defaultValue: '04-07-1999',
        },
        {
            id: 9,
            name: 'gender',
            type: 'text',
            label: 'Gender',
            styles: 'w-1/2 border-0',
            defaultValue: 'Male',
        },
    ]

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    return (

        <div className='w-full'>
            <div className='w-full px-24 py-10'>
                <div className='card flex bg-white space-x-8 py-6'>

                    {/*Profile Actions*/}
                    <div className='w-1/4 flex justify-center pt-4'>
                        <div>
                            <div className='rounded-full py-4 relative '>
                                <img src={propertyImage} className='w-48 h-48 rounded-full min-h-[150px]' alt='Property'/>
                                <Link to='' className='absolute bottom-7 right-7'><ImCamera className='text-xl cursor-pointer'/></Link>
                            </div>
                            <div className='flex justify-center py-1 pt-4'>
                        <span className='text-red-600 border-2 border-red-600 rounded-2xl text-center py-1 px-5 font-md text-sm w-fit
                        cursor-pointer hover:bg-red-100'>
                            Suspend Profile
                        </span>
                            </div>
                            <div className='flex justify-center py-1'>
                        <span className='border-2 border-black rounded-2xl text-center py-1 px-5 font-md text-sm w-fit
                        cursor-pointer hover:bg-secondary-gray-light hover:text-white'>
                            Deactivate Account
                        </span>
                            </div>
                        </div>
                    </div>

                    {/*Details*/}
                    <div className='w-3/4'>
                        <form className='w-full py-8 px-16'>
                            <div className='pb-8'>
                                <span className='font-semibold text-2xl text-primary-blue-500 px-3'>User ID: U81</span>
                            </div>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProfile;