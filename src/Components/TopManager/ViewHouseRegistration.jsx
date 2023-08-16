import React, { useState } from "react";
import InputText from "../../Components/Common/InputText";
import ViewUploadedFile from "../Common/ViewUploadedFile";


const ViewHouseRegistration = () => {
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
  const images = [
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(1).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(2).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(3).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(4).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(5).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(6).webp",
  ];

  const inputs = [
    // Properties for Address input field
    {
      id: 1,
      name: "address",
      type: "text",
      label: "Address",
      styles: "w-64",
      required: true,
    },
    // Properties for District input field
    {
      id: 2,
      name: "district",
      type: "text",
      label: "District",
      styles: "w-32",
    },
    // Properties for Location input field
    {
      id: 3,
      name: "location",
      type: "text",
      errorMessage: "",
      label: "Location",
      required: true,
    },
    // Properties for Land Size input field
    {
      id: 4,
      name: "landSize",
      type: "text",
      errorMessage: "Land size should be a number and should be in ",
      label: "Land Size()",
      required: true,
    },
    // Properties for crops input field
    {
      id: 5,
      name: "haveCrops",
      label: "Are there any crops in the land?",
    },
    // properties for crops lising input field
    {
      id: 6,
      name: "crops",
      inputType: "textarea",
      errorMessage: "",
      placeholderText: "State the crops...",
      label: 'If "Yes", what are they?',
    },
    // Properties for special facts input field
    {
      id: 8,
      name: "specialFacts",
      inputType: "textarea",
      errorMessage: "",
      placeholderText: "Add special facts about the land...",
      label: "Special Facts",
    },
  ];

  // Function for handling value changes of input fields
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="w-full h-[100vh] bg-background-blue">
      <div className="w-full h-[calc(100vh-5.5rem)] px-10 py-5">
        <h1 className="text-2xl font-semibold">House Registration Details</h1>

        <div className="w-full h-full mx-auto">
          <form
            action=""
            className="w-full h-fit mt-1 shadow-md shadow-[#D7E3FC] border border-[#D7E3FC] bg-white rounded-md justify-between gap-10 mx-auto"
          >
            <div className="min-w-[200px] p-10 pb-5">
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
                  ) : input.name === "haveCrops" ? (
                    <div className="w-full min-w-[200px]">
                      <label className="text-sm">{input.label}</label>
                      <div className="flex justify-around items-center gap-3 text-[#6f6f6f]">
                        {/* For yes */}
                        <span className="flex items-center text-sm">
                          <input
                            type="radio"
                            className="mr-1"
                            name="haveCrops"
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
                            name="haveCrops"
                            id="no"
                            value="No"
                            onChange={onChange}
                          />
                          No
                        </span>
                      </div>
                    </div>
                  ) : input.inputType === "textarea" ? (
                    <div>
                      <label className="text-sm">{input.label}</label>
                      <textarea
                        className="w-full bg-white text-sm border-2 border-gray-200 rounded-lg p-3 mt-1 placeholder:text-[#adadad] hover:border-[#2e8a99]/70 focus:border-[#2e8a99]/70 focus:ring-0 outline-none"
                        placeholder={input.placeholderText}
                      />
                      <span className="error-msg text-xs text-red-500 leading-tight line-clamp-3 hidden">
                        {/* {errorMessage}                                     */}
                      </span>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>

            <div className="h-full w-full">
              <div className="h-full w-full gap-10 items-center p-10">
                <div className="w-full">
                  <label>Images of the Property</label>
                  <div classname="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                    <div classname="-m-1 flex flex-wrap md:-m-2">
                      {images.map((image, index) => (
                        <div
                          key="{index}"
                          classname="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
                        >
                          <img
                            className="block mx-auto h-full object-cover object-center rounded-lg shadow-md"
                            src={image}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full m-4">
                  <label>Insuarnce Documents</label>
                  <p className="text-xs italic"></p>
                  <ViewUploadedFile />
                </div>
              </div>

              <div className="w-fit flex justify-between items-center gap-10 mx-auto mt-10"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewHouseRegistration;
