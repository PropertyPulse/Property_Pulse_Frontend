import React, { useState, useEffect } from 'react';
import { Card } from "flowbite-react";
import { Button, Label, TextInput } from "flowbite-react";

const EditEmployee = () => {
    const [inputValue, setInputValue] = useState('');
  const [dataList, setDataList] = useState([]);
  const [error, setError] = useState('This field is required.');
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");
  const [district, setDistrict] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [nameError, setNameError] = useState("Name is required");
  const [addressError, setAddressError] = useState("Address is required");
  const [nicError, setNicError] = useState("NIC is required");
  const [districtError, setDistrictError] = useState("District is required");
  const [contactNoError, setContactNoError] = useState("Contact number is required");

  useEffect(() => {

    
    if (dataList.length === 0) {
      setError('This field is required.');
    } else {
      setError('');
    }
  }, [dataList]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // const handleInputKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     if (inputValue.trim() !== '') {
  //       setDataList([...dataList, inputValue]);
  //       setInputValue('');
  //     }
  //   }
  // };
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission on Enter key press
      if (inputValue.trim() !== '') {
        setDataList([...dataList, inputValue]);
        setInputValue('');
      }
    }
  };
  

  
  const removeDataItem = (index) => {
    const updatedDataList = dataList.filter((_, i) => i !== index);
    setDataList(updatedDataList);
  };


  // const handleFormKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault(); // Prevent form submission on Enter key press
  //   }
  // };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(value ? "" : "Name is required");
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    setAddressError(value ? "" : "Address is required");
  };

  const handleNicChange = (e) => {
    const value = e.target.value;
    setNic(value);
    setNicError(value ? "" : "NIC is required");
  };

  const handleDistrictChange = (e) => {
    const value = e.target.value;
    setDistrict(value);
    setDistrictError(value ? "" : "District is required");
  };

  const handleContactNoChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setContactNo(value);
    
    if (!value) {
      setContactNoError("Contact number is required");
    } else if (value.length !== 10) {
      setContactNoError("Contact number must be 10 digits");
    } else {
      setContactNoError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    
    if (!address) {
      setAddressError("Address is required");
      isValid = false;
    }
    
    if (!nic) {
      setNicError("NIC is required");
      isValid = false;
    }
    
    if (!district) {
      setDistrictError("District is required");
      isValid = false;
    }
    
    if (!contactNo || contactNo.length !== 10) {
      setContactNoError("Contact number must be 10 digits");
      isValid = false;
    }
    
    if (isValid) {
      // Submit the form or perform further actions
      console.log("Form submitted");
    }
  };

  return (
    <>
    <div>
      <Card className="max-w-lg m-4 mx-auto">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Update Employee Details
        </h5>
        <form className="flex flex-col max-w-md gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col max-w-md gap-4">
            <div>
              <div className="block mb-2">
                <Label color={nameError ? "failure" : "success"} htmlFor="username3" value="Name" />
              </div>
              <TextInput
                color={nameError ? "failure" : "success"}
                id="username"
                required
                value={name}
                onChange={handleNameChange}
              />
              {nameError && <p className="text-red-500">{nameError}</p>}
            </div>
            <div>
              <div className="block mb-2">
                <Label color={addressError ? "failure" : "success"} htmlFor="address" value="Address" />
              </div>
              <TextInput
                color={addressError ? "failure" : "success"}
                id="address"
                required
                value={address}
                onChange={handleAddressChange}
              />
              {addressError && <p className="text-red-500">{addressError}</p>}
            </div>
            <div>
              <div className="block mb-2">
                <Label color={nicError ? "failure" : "success"} htmlFor="nic" value="NIC" />
              </div>
              <TextInput
                color={nicError ? "failure" : "success"}
                id="nic"
                required
                value={nic}
                onChange={handleNicChange}
              />
              {nicError && <p className="text-red-500">{nicError}</p>}
            </div>
            <div>
              <div className="block mb-2">
                <Label color={districtError ? "failure" : "success"} htmlFor="district" value="District" />
              </div>
              <TextInput
                color={districtError ? "failure" : "success"}
                id="district"
                required
                value={district}
                onChange={handleDistrictChange}
              />
              {districtError && <p className="text-red-500">{districtError}</p>}
            </div>
            <div>
              <div className="block mb-2">
                <Label color={contactNoError ? "failure" : "success"} htmlFor="contactNo" value="Contact no" />
              </div>
              <TextInput
                color={contactNoError ? "failure" : "success"}
                id="contactNo"
                required
                value={contactNo}
                onChange={handleContactNoChange}
              />
              {contactNoError && <p className="text-red-500">{contactNoError}</p>}
            </div>
            <div>
              <div className="block mb-2">
                <Label color={error ? "failure" : "success"} htmlFor="skills" value="Skills" />
              </div>
              <div>
      <div className="flex flex-wrap items-center">
        {dataList.map((data, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-2 mb-2 mr-2 bg-gray-100 border border-gray-300 rounded"
          >
            <span className="mr-2">{data}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-red-300 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => removeDataItem(index)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        ))}
        <input
          className={`flex-grow px-3 py-2 bg-gray-100 border-2 ${
            error ? 'border-red-300' : 'border-green-400'
          } rounded focus:outline-none focus:border-none ${
            error ? 'focus:ring-red-300' : 'focus:ring-green-300'
          }`}
          type="text"
          placeholder="Type the skills and press Enter"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>

        
            </div>
          </div>

          <Button type="submit" disabled={!!(nameError || addressError || nicError || districtError || contactNoError || error)}>Update</Button>
        </form>
      </Card>
    </div>
    </>
  )
}

export default EditEmployee