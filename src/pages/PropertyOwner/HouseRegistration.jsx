import React, { useState } from "react";
import NavbarWithoutSidebar from "../../Components/Common/NavbarWithoutSidebar";
import InputText from "../../Components/Common/InputText";
import ProfilePictureUploader from "../../Components/Common/ProfilePictureUploader";
import RequestSuccessful from "../../Components/PropertyOwner/RequestSuccessful";
import { NavLink } from "react-router-dom";
import Dropdown from "../../Components/PropertyOwner/Dropdown";

const HouseRegistration = () => {
  const [values, setValues] = useState({
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
    specialRoomsDescription: "",
  });

  const inputs = [
    // Properties for Address input field
    {
      id: 1,
      name: "address",
      type: "text",
      label: "Address",
      require: true,
    },
    // Properties for District input field
    {
      id: 2,
      name: "district",
      type: "text",
      label: "District",
      require: true,
    },
    // Properties for Location input field
    {
      id: 3,
      name: "location",
      type: "text",
      errorMessage: "",
      label: "Location",
      require: false,
    },
    // Properties for duration input field
    {
        id: 4,
        name: "duration",
        type: "dropdown",
        errorMessage: "",
        label: "Duration to be Managed",
        require: false,
    },
    // Properties for No. of Stories input field
    {
      id: 5,
      name: "stories",
      type: "text",
      errorMessage: "No. of stories should be a number",
      label: "Stories",
      require: false,
    },
    // Properties for No.of Bedrooms input field
    {
      id: 6,
      name: "bedrooms",
      type: "text",
      errorMessage: "No. of bedrooms should be a number",
      label: "No. of Bedrooms",
      require: false,
    },
    // properties for cNo. of Living Rooms input field
    {
      id: 7,
      name: "livingRooms",
      type: "text",
      errorMessage: "No. of living rooms should be a number",
      label: "No. of Living Rooms",
      require: false,
    },
    // Properties for No. of Bathrooms input field
    {
      id: 8,
      name: "bathrooms",
      type: "text",
      errorMessage: "No. of bathrooms should be a number",
      label: "No. of Bathrooms",
      require: false,
    },
    // Properties for No. of Dining Rooms input field
    {
      id: 9,
      name: "diningRooms",
      type: "text",
      errorMessage: "",
      label: "No. of Dining Rooms",
      require: false,
    },
    // Properties for special rooms radio button input field
    {
      id: 10,
      name: "haveSpecialRooms",
      label: "Are there any special rooms?",
    },
    // Properties for special rooms description input field
    {
      id: 11,
      name: "specialRooms",
      type: "textarea",
      errorMessage: "",
      label: "If 'Yes', what are they?",
      require: false,
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
      id: 11,
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

  // Function for handling submit of the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Function for handling value changes of input fields
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  const [requestSuccess, setRequestSuccess] = useState();

  return (
    <div className="w-full h-full">

      <div className="w-full h-[calc(100vh-5rem)] px-20 py-5 overflow-auto">
        <h1 className="w-fit text-2xl font-semibold mx-auto">
          House Registration
        </h1>

        <div className="max-w-[800px] w-full h-full mt-4 mx-auto">
          <form
            action=""
            className="w-full h-fit mt-1 shadow-md shadow-[#D7E3FC] border border-[#D7E3FC] bg-white rounded-md pb-10"
          >
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
                    ) : input.type === "textarea" ? (
                      <div>
                        <label className="text-sm">{input.label}</label>
                        <textarea
                          className="w-full bg-white text-sm text-ellipsis border-2 border-gray-200 rounded-lg p-3 mt-1 placeholder:text-[#adadad] hover:border-[#2e8a99]/70 focus:border-[#2e8a99]/70 focus:ring-0 outline-none"
                          placeholder={input.placeholderText}
                        />
                        <span className="error-msg text-xs text-red-500 leading-tight line-clamp-3 hidden">
                          {/* {errorMessage}                                     */}
                        </span>
                      </div>
                    ) : input.type === "dropdown" ? (
                        <Dropdown options={durations} label="Select Duration" />
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
                    <ProfilePictureUploader />
                  </div>
                  <div className="w-full">
                    <label>Insurance Documents</label>
                    <p className="text-xs italic">
                      (If you have already got an insurance for the property,
                      please upload relevant documents)
                    </p>
                    <ProfilePictureUploader />
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
                        className="w-3 h-3 bg-[#A9D6E5] border-none cursor-pointer fill-slate-100"
                      />
                      <label>{appliance.label}</label>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div class="flex m-10">
              <div class="flex items-center h-5">
                <input
                  id="helper-checkbox"
                  aria-describedby="helper-checkbox-text"
                  type="checkbox"
                  value=""
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
            <div className="w-full flex justify-center items-center gap-10">
              <NavLink
                className="w-64 bg-primary-blue-800 px-10 py-4 text-white rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 
                            transition duration-300"
                to="/property-owner/schedule-tasks"
              >
                Request to Register
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HouseRegistration;
