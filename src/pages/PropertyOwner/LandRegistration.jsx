import React, { useRef, useState } from 'react';
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar';
import InputText from '../../Components/Common/InputText';
import ProfilePictureUploader from '../../Components/Common/ProfilePictureUploader';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from '../../Components/PropertyOwner/Dropdown';
import { axiosPrivate } from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import MultipleImageUploader from '../../Components/Common/MultipleImageUploader';

const LandRegistration = () => {
    const navigate = useNavigate();
    const {auth} = useAuth();
    const axiosPrivate = useAxiosPrivate();

    console.log(auth.user)
    const errRef = useRef();

    const [errMessage, setErrMessage] = useState("");
    const [wantInsurance, setWantInsurance] = useState(false);
    const [duration, setDuration] = useState();

    const handleDropdownSelect = (selectedValue) => {
        setDuration(selectedValue);
    }

    const [values, setValues] = useState({
        type: "LAND",
        address: "",
        district: "",
        location: "",
        duration: "",
        landSize: "",
        haveCrops: "Yes",
        crops: "",
        specialFacts: "",
    });

    const inputs = [
        // Properties for Type input field
        {
            id: 1,
            name: "type",
            type: "text",
            label: "Type",
            disabled: true,
        },
        // Properties for Address input field
        {
            id: 2,
            name: 'address',
            type: 'text',
            label: 'Address',
            styles: 'w-64',
            require: true,
        },
        // Properties for District input field
        {
            id: 3,
            name: 'district',
            type: 'text',
            label: 'District',
            styles: 'w-32',
            require: true,
        },
        // Properties for Location input field
        {
            id: 4,
            name: 'location',
            type: 'text',
            errorMessage: '',
            label: 'Location',
            require: true,
        },
        // Properties for duration input field
        {
            id: 5,
            name: "duration",
            type: "dropdown",
            errorMessage: "",
            label: "Duration to be Managed",
            require: false,
        },
        // Properties for Land Size input field
        {
            id: 6,
            name: 'landSize',
            type: 'text',
            errorMessage: 'Land size should be a number and should be in Perches',
            label: 'Land Size(Perches)',
            require: true,
        },
        // Properties for crops input field
        {
            id: 7,
            name: 'haveCrops',
            label: 'Are there any crops in the land?',
        },
        // properties for crops lising input field
        {
            id: 8,
            name: 'crops',
            type: 'textarea',
            errorMessage: '',
            placeholderText: 'State the crops...',
            label: 'If "Yes", what are they?',
        },
        // Properties for special facts input field
        {
            id: 9,
            name: 'specialFacts',
            inputType: 'textarea',
            errorMessage: '',
            placeholderText: 'Add special facts about the land...',
            label: "Special Facts"
        },
        
    ];

    const durations = [
        {
            id: 1,
            name: '6-months',
            label: '6 months',
            checked: false,
        },
        {
            id: 2,
            name: 'one-year',
            label: 'One Year',
            checked: false,
        },
        {
            id: 3,
            name: 'two-years',
            label: 'Two Years',
            checked: false,
        }
    ];

    // Function for handling submit of the form
    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;

        if(values.address === "" || values.district === "") {
            isValid = false;
        }

        if(isValid) {
            console.log("Form submitted");
        }
    };

    const handleAddProperty = async (e) => {
        e.preventDefault();

        try{

            const formFields = {
                address: values.address,
                type: values.type,
                location: values.location,
                district: values.district,
                duration: duration,
                land_size: parseFloat(values.landSize),
                have_crops: values.haveCrops,
                crops: values.crops,
                special_facts: values.specialFacts,
                want_insurance: wantInsurance,
                property_owner_email: auth.user,
            }

            console.log(formFields);

            const response = await axiosPrivate.post(
                "/api/v1/property/addNewProperty",
                JSON.stringify(formFields), // Convert the object to JSON string
                {
                    // headers: {
                    //     "Content-type":"multipart/form-data",
                }
            // }

            );
            console.log(response.data);
            if(response) {
                navigate("schedule-tasks");
            }           
            
        } catch(err){
            console.log(err);
        }
    }

    // Function for handling value changes of input fields
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    console.log(values);



    return (
        <div className='w-full '> 
            <div className='w-full h-[calc(100vh-4.5rem)] px-10 py-5 overflow-auto'>
                <h1 className='text-2xl font-semibold'>Land Registration</h1>

                <div className='w-full mt-3'>
                    <form 
                        className='w-full h-fit mt-1 shadow-md shadow-[#D7E3FC] border border-[#D7E3FC] bg-white rounded-md flex flex-auto justify-between items-center gap-10'
                        onSubmit={handleAddProperty}
                    >
                        {/*Error message*/}
                        <div ref={errRef} className={errMessage === "" ? "hidden": "my-4 bg-red-100 text-center border border-red-400 text-red-700 px-4 py-3 rounded relative"}
                            role="alert">
                            <strong className="font-bold">Registration Failed!</strong>
                            <span className="block sm:inline"> {errMessage} </span>
                            <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                        </div>

                        <div className='min-w-[200px] w-1/3 p-10 pb-5'>
                            {inputs.map((input) => (
                                <div className='flex-auto min-w-[200px] w-full mb-4'>

                                    {/* If the input type is 'text', 'password' or 'email' */}
                                    {(input.type === 'text') || (input.type === 'password') || (input.type === 'email') ? (
                                        // Component for input types 'text', 'password' and 'email'
                                        <InputText key={input.id} {...input} value={values[input.name]} onChange={onChange} />                                             
                                        
                                    ) : (input.name === 'haveCrops') ? (
                                        <div className='w-full min-w-[200px]'>
                                            <label className='text-sm'>{input.label}</label>
                                            <div className='flex justify-around items-center gap-3 text-[#6f6f6f]'>
                                                {/* For yes */}
                                                <span className='flex items-center text-sm'>
                                                    <input type='radio' className='mr-1' name='haveCrops' id='yes' value='Yes' defaultChecked onChange={onChange} />
                                                    Yes
                                                </span>
                                                {/* For no */}
                                                <span className='flex items-center text-sm'>
                                                    <input type='radio' className='mr-1' name='haveCrops' id='no' value='No' onChange={onChange} />
                                                    No
                                                </span>
                                            </div>
                                        </div>
                                    ) : (input.type === 'textarea' && (values.haveCrops === "Yes" || input.name === "specialFacts")) ? (
                                        <div>
                                            <label className='text-sm'>{input.label}</label>
                                            <textarea 
                                                className='w-full bg-white text-sm border-2 border-gray-200 rounded-lg p-3 mt-1 placeholder:text-[#adadad] hover:border-[#2e8a99]/70 focus:border-[#2e8a99]/70 focus:ring-0 outline-none' 
                                                placeholder={input.placeholderText}
                                                key={input.id} {...input} value={values[input.name]} onChange={onChange} 
                                            />
                                            <span className='error-msg text-xs text-red-500 leading-tight line-clamp-3 hidden'>
                                                {/* {errorMessage}                                     */}
                                            </span>
                                        </div>
                                    ) : input.type === "dropdown" ? (
                                        <Dropdown options={durations} label="Select Duration" searchEnable={true} onSelect={handleDropdownSelect}  />
                                    ) : (
                                        <div></div>
                                    )}  
                                </div>                            
                            ))} 
                        </div>

                        <div className='h-full w-full'>
                                <div className='h-full flex w-full gap-10 items-center px-10 py-5'>
                                    <div className='w-full'>
                                        <label>Images of the Property</label>
                                        {/* <MultipleImageUploader /> */}
                                    </div>   
                                    <div className='w-full'>
                                        <label>Insurance Documents</label>
                                        <p className='text-xs italic'>(If you have already got an insurance for the property, 
                                            please upload relevant documents)</p>
                                        <ProfilePictureUploader />
                                    </div>                                                          
                                </div>

                                <div class="flex justify-center">
                                    <div class="flex items-center h-5">
                                        <input
                                            id="helper-checkbox"
                                            aria-describedby="helper-checkbox-text"
                                            type="checkbox"
                                            value=""
                                            checked={wantInsurance}
                                            onChange={() => setWantInsurance(!wantInsurance)}
                                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        ></input>
                                    </div>
                                    <div class="ml-2 text-sm">
                                        <label
                                            for="helper-checkbox"
                                            class="font-medium text-gray-900 dark:text-gray-300 text-lg mb-2"
                                        >
                                            Request Insurance
                                        </label>
                                        <p
                                            id="helper-checkbox-text"
                                            class="text-xs font-normal text-gray-500 dark:text-gray-300"
                                        >
                                            We highly recommend to take a insurance coverage for your property.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className='w-fit flex justify-between items-center gap-10 mx-auto mt-5'>
                                    {/* <Link
                                        to={{
                                            pathname: "schedule-tasks"
                                        }}
                                    > */}
                                        <button className='w-64 bg-primary-blue-800 px-10 py-4 text-white rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'>Request to Register</button>   
                                    {/* </Link> */}
                                    {/* <button className='w-64 bg-[#01497C] px-10 py-4 text-white rounded-md hover:bg-[#01497C]/80 hover:-translate-y-1 transition duration-300'>Request Insurance</button> */}
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LandRegistration
