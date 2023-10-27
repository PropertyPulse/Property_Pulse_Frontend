import React, { useState } from 'react';
import { Card } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";

const ViewEmployee = (props) => {
    console.log(props);
    const [name, setName] = useState(props.employeeData.name);
    const [address, setAddress] = useState(props.employeeData.address);
    const [nic, setNic] = useState(props.employeeData.nic);
    const [district, setDistrict] = useState(props.employeeData.district);
    const [contactNo, setContactNo] = useState(props.employeeData.contactno);
    const [skills, setSkills] = useState(props.employeeData.skills);

    return (
        <>
            <div>
                <Card className="max-w-lg m-4 mx-auto">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        View Employee Details
                    </h5>
                    <form className="flex flex-col max-w-md gap-4">
                        <div className="flex flex-col max-w-md gap-4">
                            <div>
                                <div className="block mb-2">
                                    <Label htmlFor="username" value="Name" />
                                </div>
                                <TextInput
                                    id="username"
                                    value={name}
                                    readOnly // Make the input read-only
                                />
                            </div>
                            <div>
                                <div className="block mb-2">
                                    <Label htmlFor="address" value="Address" />
                                </div>
                                <TextInput
                                    id="address"
                                    value={address}
                                    readOnly
                                />
                            </div>
                            <div>
                                <div className="block mb-2">
                                    <Label htmlFor="nic" value="NIC" />
                                </div>
                                <TextInput
                                    id="nic"
                                    value={nic}
                                    readOnly
                                />
                            </div>
                            <div>
                                <div className="block mb-2">
                                    <Label htmlFor="district" value="District" />
                                </div>
                                <TextInput
                                    id="district"
                                    value={district}
                                    readOnly
                                />
                            </div>
                            <div>
                                <div className="block mb-2">
                                    <Label htmlFor="contactNo" value="Contact no" />
                                </div>
                                <TextInput
                                    id="contactNo"
                                    value={contactNo}
                                    readOnly
                                />
                            </div>
                            {/* newly added */}
                            <div>
                                <div className="block mb-2">
                                    <Label htmlFor="contactNo" value="Skills" />
                                </div>
                                <TextInput
                                    id="contactNo"
                                    value={skills}
                                    readOnly
                                />
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default ViewEmployee;
