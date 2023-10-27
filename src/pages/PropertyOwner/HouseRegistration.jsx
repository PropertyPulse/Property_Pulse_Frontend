import React, { useState } from "react";
import InputText from "../../Components/Common/InputText";
import ProfilePictureUploader from "../../Components/Common/ProfilePictureUploader";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../Components/PropertyOwner/Dropdown";
import { useRef } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import MultipleImageUploader from "../../Components/Common/MultipleImageUploader";


// const REGISTER_URL = '/api/v1/property/addProperty';

const HouseRegistration = () => {
    const navigate = useNavigate();
    const {auth} = useAuth();
    const axiosPrivate = useAxiosPrivate();


    const [selectedAppliances, setSelectedAppliances] = useState([]);

    // Function to handle checkbox changes
    const handleApplianceCheckboxChange = (event) => {
        const applianceName = event.target.value;
        if (event.target.checked) {
            // If the checkbox is checked, add the appliance to the selectedAppliances array
            setSelectedAppliances([...selectedAppliances, applianceName]);
        } else {
            // If the checkbox is unchecked, remove the appliance from the selectedAppliances array
            setSelectedAppliances(selectedAppliances.filter((name) => name !== applianceName));
        }


    };




    console.log(auth.user)
    const errRef = useRef();

    const [propertyOwner, setPropertyOwner] = useState();

    const [success, setSuccess] = useState(false);

    const [errMessage, setErrMessage] = useState("");

    const [isValid, setIsValid] = useState();

    const [wantInsurance, setWantInsurance] = useState(false);

    const [duration, setDuration] = useState();

    const handleDropdownSelect = (selectedValue) => {
        setDuration(selectedValue);
    }


    const [values, setValues] = useState({
        type: "HOME",
        address: "",
        district: "",
        location: "",
        duration: "",
        stories: "",
        bedrooms: "",
        livingRooms: "",
        bathrooms: "",
        diningRooms: "",
        specialRooms: "",
        haveSpecialRooms: "Yes",
    });

    const inputs = [
        // Properties for type input field
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
            name: "address",
            type: "text",
            errMessage: "",
            label: "Address",
            require: true,
        },
        // Properties for District input field
        {
            id: 3,
            name: "district",
            type: "text",
            errMessage: "",
            label: "District",
            require: true,
        },
        // Properties for Location input field
        {
            id: 4,
            name: "location",
            type: "text",
            errorMessage: "",
            label: "Location",
            require: true,
        },
        // Properties for duration input field
        {
            id: 5,
            name: "duration",
            type: "dropdown",
            errorMessage: "",
            label: "Duration to be Managed",
        },
        // Properties for No. of Stories input field
        {
            id: 6,
            name: "stories",
            type: "text",
            pattern: "[0-9]*",
            errorMessage: "No. of floors should be a number",
            label: "No. of Floors",
        },
        // Properties for No.of Bedrooms input field
        {
            id: 7,
            name: "bedrooms",
            type: "text",
            pattern: "[0-9]*",
            errorMessage: "No. of bedrooms should be a number",
            label: "No. of Bedrooms",
        },
        // properties for cNo. of Living Rooms input field
        {
            id: 8,
            name: "livingRooms",
            type: "text",
            pattern: "[0-9]*",
            errorMessage: "No. of living rooms should be a number",
            label: "No. of Living Rooms",
        },
        // Properties for No. of Bathrooms input field
        {
            id: 9,
            name: "bathrooms",
            type: "text",
            pattern: "[0-9]*",
            errorMessage: "No. of bathrooms should be a number",
            label: "No. of Bathrooms",
        },
        // Properties for No. of Dining Rooms input field
        {
            id: 10,
            name: "diningRooms",
            type: "text",
            pattern: "[0-9]*",
            errorMessage: "No. of dining rooms should be a number",
            label: "No. of Dining Rooms",
        },
        // Properties for special rooms radio button input field
        {
            id: 11,
            name: "haveSpecialRooms",
            label: "Are there any special rooms?",
        },
        // Properties for special rooms description input field
        {
            id: 12,
            name: "specialRooms",
            type: "textarea",
            errorMessage: "",
            label: "If 'Yes', what are they?",
        },
    ];

    const appliances = [
        {
        id: 1,
        name: "fridge",
        label: "Fridge",
        amount: "",
        },
        {
        id: 2,
        name: "microwave",
        label: "Microwave",
        amount: "",
        },
        {
        id: 3,
        name: "washing-machine",
        label: "Washing Machine",
        amount: "",
        },
        {
        id: 4,
        name: "dishwasher",
        label: "Dishwasher",
        amount: "",
        },
        {
        id: 5,
        name: "blender",
        label: "Blender",
        amount: "",
        },
        {
        id: 6,
        name: "sofa",
        label: "Sofa",
        amount: "",
        },
        {
        id: 7,
        name: "tv",
        label: "TV",
        amount: "",
        },
        {
        id: 8,
        name: "tv-stand",
        label: "TV Stand",
        amount: "",
        },
        {
        id: 9,
        name: "armchair",
        label: "Armchair",
        amount: "",
        },
        {
        id: 10,
        name: "lamp",
        label: "Lamp",
        amount: "",
        },
        {
        id: 11,
        name: "coffee-table",
        label: "Coffee Table",
        amount: "",
        },
        {
        id: 12,
        name: "dining-table",
        label: "Dining Table",
        amount: "",
        },
        {
        id: 13,
        name: "cabinet",
        label: "Cabinet",
        amount: "",
        },
        {
        id: 14,
        name: "bed",
        label: "Bed",
        amount: "",
        },
        {
        id: 15,
        name: "bedside-table",
        label: "Bedside Table",
        amount: "",
        },
        {
        id: 16,
        name: "dressing-table",
        label: "Dressing Table",
        amount: "",
        },
        {
        id: 17,
        name: "desk",
        label: "Desk",
        amount: "",
        },
        {
        id: 18,
        name: "desk-chair",
        label: "Desk Chair",
        amount: "",
        },
        {
        id: 19,
        name: "coffee-table",
        label: "Coffee Table",
        amount: "",
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


    const handleAddProperty = async (e) => {
        e.preventDefault();

        try{

            const formFields = {
                address: values.address,
                type: values.type,
                location: values.location,
                district: values.district,
                duration: duration,
                stories: parseInt(values.stories),
                bathrooms: parseInt(values.bathrooms),
                bedrooms: parseInt(values.bedrooms),
                dining_rooms: parseInt(values.diningRooms),
                living_rooms: parseInt(values.livingRooms),
                have_special_rooms: values.haveSpecialRooms,
                special_rooms: values.specialRooms,
                want_insurance: wantInsurance,
                property_owner_email: auth.user,
                checklist:selectedAppliances

            }

            console.log(formFields);

            // const response = await axiosPrivate.post(
            //     "/api/v1/property/addNewProperty",
            //     JSON.stringify(formFields), // Convert the object to JSON string
            //     {
            //
            //     }
            // );
            // console.log(response.data);
            // if(response) {
            //     navigate("schedule-tasks");
            // }
            
        } catch(err){
            // console.log(err);
        }
    }

    
    // Function for handling value changes of input fields
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    console.log(values);

    const [requestSuccess, setRequestSuccess] = useState();

    return (
        <div className="w-full">

        <div className="w-full h-[calc(100vh-4.5rem)] px-20 py-5 overflow-auto">
            <h1 className="w-fit text-2xl font-semibold mx-auto">
            House Registration
            </h1>

            <div className="max-w-[800px] w-full mt-4 mx-auto">
            <form
                className="w-full h-fit mt-1 shadow-md shadow-[#D7E3FC] border border-[#D7E3FC] bg-white rounded-md pb-10"
                onSubmit={handleAddProperty}
            >
                {/*Error message*/}
                <div ref={errRef} className={errMessage === "" ? "hidden": "my-4 bg-red-100 text-center border border-red-400 text-red-700 px-4 py-3 rounded relative"}
                    role="alert">
                    <strong className="font-bold">Registration Failed!</strong>
                    <span className="block sm:inline"> {errMessage} </span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                </div>

                <div className="w-full h-fit flex flex-auto justify-between">
                <div className="min-w-[200px] w-full p-10 pb-5">
                    {inputs.map((input) => (
                    <div className="flex-auto min-w-[200px] w-full mb-4">
                        {/* If the input type is 'text', 'password' or 'email' */}
                        {input.type === "text" ||
                        input.type === "password" ||
                        input.type === "email" ? (
                        // Component for input types 'text', 'password' and 'email'
                        <InputText
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                        ) : input.name === "haveSpecialRooms" ? (
                        <div className="w-full min-w-[200px]">
                            <label className="text-sm">{input.label}</label>
                            <div className="flex justify-around items-center gap-3 text-[#6f6f6f]">
                            {/* For yes */}
                            <span className="flex items-center text-sm">
                                <input
                                type="radio"
                                className="mr-1"
                                name="haveSpecialRooms"
                                id="yes"
                                value="Yes"
                                defaultChecked
                                onChange={onChange}
                                />
                                Yes
                            </span>
                            {/* For no */}
                            <span className="flex items-center text-sm">
                                <input
                                type="radio"
                                className="mr-1"
                                name="haveSpecialRooms"
                                id="no"
                                value="No"
                                onChange={onChange}
                                />
                                No
                            </span>
                            </div>
                        </div>
                        ) : input.type === "textarea" && values.haveSpecialRooms === "Yes" ? (
                        <div>
                            <label className="text-sm">{input.label}</label>
                            <textarea
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                            required
                            className="w-full bg-white text-sm text-ellipsis border-2 border-gray-200 rounded-lg p-3 mt-1 placeholder:text-[#adadad] hover:border-[#2e8a99]/70 focus:border-[#2e8a99]/70 focus:ring-0 outline-none"
                            placeholder={input.placeholderText}
                            />
                            <span className="error-msg text-xs text-red-500 leading-tight line-clamp-3 hidden">
                            {/* {errorMessage}                                     */}
                            </span>
                        </div>
                        ) : input.type === "dropdown" ? (
                            <Dropdown options={durations} label="Select Duration" onSelect={handleDropdownSelect} />
                        ) : (
                        <div></div>
                        )}
                    </div>
                    ))}
                </div>

                <div className="h-full w-full min-w-[200px]">
                    <div className="h-full p-10">
                    <div className="w-full mb-10">
                        <label>Images of the Property</label>
                        {/*<MultipleImageUploader />*/}
                    </div>
                    <div className="w-full">
                        <label>Insurance Documents</label>
                        <p className="text-xs italic">
                        (If you have already got an insurance for the property,
                        please upload relevant documents)
                        </p>
                        {/*<ProfilePictureUploader />*/}
                    </div>
                    </div>
                </div>
                </div>
                <div className="h-full w-full min-w-[300px] p-10 pt-0">
                <div className="w-full h-fit px-10 py-6 bg-[#A9D6E5] mt-3 rounded-md">
                    <h2 className="text-lg text-center underline">
                    Appliances and Furniture Checklist
                    </h2>
                    <div className="w-full h-fit flex flex-wrap gap-x-5 gap-y-2 mt-5">
                        {appliances.map((appliance) => (
                            <span
                                key={appliance.id}
                                className="w-fit flex gap-2 items-center px-4 py-1 rounded-full text-white text-sm bg-[#2C7DA0]"
                            >
                        <input
                            type="checkbox"
                            value={appliance.label}
                            checked={selectedAppliances.includes(appliance.label)}
                            onChange={handleApplianceCheckboxChange}
                            className="w-3 h-3 bg-[#A9D6E5] border-none cursor-pointer fill-slate-100"
                        />
                        <label>{appliance.label}</label>
                    </span>
                        ))}
                    </div>
                </div>
                </div>
                <div className="flex m-10">
                <div className="flex items-center h-5">
                    <input
                    id="helper-checkbox"
                    aria-describedby="helper-checkbox-text"
                    type="checkbox"
                    value=""
                    checked={wantInsurance}
                    onChange={() => setWantInsurance(!wantInsurance)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    ></input>
                </div>
                <div className="ml-2 text-sm">
                    <label
                    htmlFor="helper-checkbox"
                    className="font-medium text-gray-900 dark:text-gray-300 text-lg mb-2"
                    >
                    Request Insurance
                    </label>
                    <p
                    id="helper-checkbox-text"
                    className="text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                    We highly recommend to take a insurance coverage for your property.
                    </p>
                </div>
                </div>
                <div className='w-fit flex justify-between items-center gap-10 mx-auto mt-10'>
                    {/* <Link
                        to={{
                            pathname: "schedule-tasks"
                        }}
                    > */}
                        <button className='w-64 bg-primary-blue-800 px-10 py-4 border-none text-white rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'>Request to Register</button>   
                    {/* </Link> */}
                </div>
                {/* <div className="w-full flex justify-center items-center gap-10">
                <NavLink
                    className="w-64 bg-primary-blue-800 px-10 py-4 text-white rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 
                                transition duration-300"
                    to="/property-owner/schedule-tasks"
                >
                    Request to Register
                </NavLink>
                </div> */}
            </form>
            </div>
        </div>
        </div>
    );
};

export default HouseRegistration;
