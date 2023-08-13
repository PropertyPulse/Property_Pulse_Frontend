import React, { useState } from 'react';
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar';
import InputText from '../../Components/Common/InputText';
import ProfilePictureUploader from '../../Components/Common/ProfilePictureUploader';

const HouseRegistration = () => {
    const [values, setValues] = useState({
        address: "",
        district: "",
        location: "",
        stories: "",
        bedrooms: "",
        livingRooms: "",
        bathrooms: "",
        diningRooms: "",
        specialRooms: "",
        specialRoomsDescription: "",
    });

    const inputs = [
        // Properties for Address input field
        {
            id: 1,
            name: 'address',
            type: 'text',
            label: 'Address',
            require: true,
        },
        // Properties for District input field
        {
            id: 2,
            name: 'district',
            type: 'text',
            label: 'District',
            require: true,
        },
        // Properties for Location input field
        {
            id: 3,
            name: 'location',
            type: 'text',
            errorMessage: '',
            label: 'Location',
            require: false,
        },
        // Properties for No. of Stories input field
        {
            id: 4,
            name: 'stories',
            type: 'text',
            errorMessage: 'No. of stories should be a number',
            label: 'Stories',
            require: false,
        },
        // Properties for No.of Bedrooms input field
        {
            id: 5,
            name: 'bedrooms',
            type: 'text',
            errorMessage: 'No. of bedrooms should be a number',
            label: 'No. of Bedrooms',
            require: false,
        },
        // properties for cNo. of Living Rooms input field
        {
            id: 6,
            name: 'livingRooms',
            type: 'text',
            errorMessage: 'No. of living rooms should be a number',
            label: 'No. of Living Rooms',
            require: false,
        },
        // Properties for No. of Bathrooms input field
        {
            id: 7,
            name: 'bathrooms',
            type: 'text',
            errorMessage: 'No. of bathrooms should be a number',
            label: "No. of Bathrooms",
            require: false,
        },
        // Properties for No. of Dining Rooms input field
        {
            id: 4,
            name: 'diningRooms',
            type: 'text',
            errorMessage: '',
            label: 'No. of Dining Rooms',
            require: false,
        },
        // Properties for special rooms radio button input field
        {
            id: 10,
            name: 'haveSpecialRooms',
            label: "Are there any special rooms?",
        },
        // Properties for special rooms description input field
        {
            id: 11,
            name: 'specialRooms',
            type: 'textarea',
            errorMessage: '',
            label: "If 'Yes', what are they?",
            require: false,
        },
    ];

    // Function for handling submit of the form
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // Function for handling value changes of input fields
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    console.log(values);



    return (
        <div className='w-full h-full bg-background-blue'>
            <div className='w-full z-40'>
                <NavbarWithoutSidebar name="Anjalee Neelika" userRole="Property Owner" />
            </div> 
            <div className='w-full h-[calc(100vh-5rem)] px-20 py-5 overflow-auto'>
                <h1 className='w-fit text-2xl font-semibold mx-auto'>House Registration</h1>

                <div className='max-w-[800px] w-full h-full mt-4 mx-auto'>
                    <form action="" className='w-full h-fit mt-1 shadow-md shadow-[#D7E3FC] border border-[#D7E3FC] bg-white rounded-md pb-10'>
                        <div className='w-full h-fit flex flex-auto justify-between'>
                            <div className='min-w-[200px] w-full p-10 pb-5'>
                                {inputs.map((input) => (
                                    <div className='flex-auto min-w-[200px] w-full mb-4'>

                                        {/* If the input type is 'text', 'password' or 'email' */}
                                        {(input.type === 'text') || (input.type === 'password') || (input.type === 'email') ? (
                                            // Component for input types 'text', 'password' and 'email'
                                            <InputText key={input.id} {...input} value={values[input.name]} onChange={onChange} />                                             
                                            
                                        ) : (input.name === 'haveSpecialRooms') ? (
                                            <div className='w-full min-w-[200px]'>
                                                <label className='text-sm'>{input.label}</label>
                                                <div className='flex justify-around items-center gap-3 text-[#6f6f6f]'>
                                                    {/* For yes */}
                                                    <span className='flex items-center text-sm'>
                                                        <input type='radio' className='mr-1' name='haveSpecialRooms' id='yes' value='Yes' defaultChecked onChange={onChange} />
                                                        Yes
                                                    </span>
                                                    {/* For no */}
                                                    <span className='flex items-center text-sm'>
                                                        <input type='radio' className='mr-1' name='haveSpecialRooms' id='no' value='No' onChange={onChange} />
                                                        No
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (input.type === 'textarea') ? (
                                            <div>
                                                <label className='text-sm'>{input.label}</label>
                                                <textarea 
                                                    className='w-full bg-white text-sm border-2 border-gray-200 rounded-lg p-3 mt-1 placeholder:text-[#adadad] hover:border-[#2e8a99]/70 focus:border-[#2e8a99]/70 focus:ring-0 outline-none' 
                                                    placeholder={input.placeholderText}
                                                />
                                                <span className='error-msg text-xs text-red-500 leading-tight line-clamp-3 hidden'>
                                                    {/* {errorMessage}                                     */}
                                                </span>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}  
                                    </div>                            
                                ))} 
                            </div>

                            <div className='h-full w-full min-w-[200px]'>
                                <div className='h-full p-10'>
                                    <div className='w-full mb-10'>
                                        <label>Images of the Property</label>
                                        <ProfilePictureUploader />
                                    </div>   
                                    <div className='w-full'>
                                        <label>Insurance Documents</label>
                                        <p className='text-xs italic'>(If you have already got an insurance for the property, 
                                            please upload relevant documents)</p>
                                        <ProfilePictureUploader />
                                    </div>
                                </div> 
                                
                                <div className='w-fit flex justify-between items-center gap-10 mx-auto mt-10'>
                                    <button className='w-64 bg-primary-blue-800 px-10 py-4 text-white rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'>Request to Register</button>
                                    <button className='w-64 bg-[#01497C] px-10 py-4 text-white rounded-md hover:bg-[#01497C]/80 hover:-translate-y-1 transition duration-300'>Request Insurance</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center gap-10'>
                            <button className='w-64 bg-primary-blue-800 px-10 py-4 text-white rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'>Request to Register</button>
                            <button className='w-64 bg-[#01497C] px-10 py-4 text-white rounded-md hover:bg-[#01497C]/80 hover:-translate-y-1 transition duration-300'>Request Insurance</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HouseRegistration
