import React, { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const AddContactPerson = ({ taskId }) => {

    const axiosPrivate = useAxiosPrivate();
    const [contactPersonName, setContactPersonName] = useState("");
    const [contactPersonNumber, setContactPersonNumber] = useState("");

    const handleAddClick = async () => {

        const data = {
            contactPersonName,
            contactPersonNumber,
            taskId,
        };

        try {
            const response = await axiosPrivate.post(
                "/api/v1/task-requests/task-approvals/add-contact-person", data,
                {}
            );

            if (response.status === 200) {
                console.log(response.data);
            } else {
                console.log('Request was not successful:', response);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return (
        <div className="pt-3">
            <form className="w-full bg-white py-8 px-16">
                <div className="flex flex-wrap gap-y-3">
                    <input
                        id="contactPersonName"
                        name="contactPersonName"
                        type="text"
                        value={contactPersonName}
                        onChange={(e) => setContactPersonName(e.target.value)}
                        placeholder="Contact Person Name"
                        className="w-full input-field rounded-md"
                    />
                    <input
                        id="contactPersonNumber"
                        name="contactPersonNumber"
                        type="text"
                        value={contactPersonNumber}
                        onChange={(e) => setContactPersonNumber(e.target.value)}
                        placeholder="Contact Number"
                        className="w-full input-field rounded-md"
                    />
                </div>
                <div className="w-full pt-8 flex justify-center items-center space-x-6">
                    <button
                        className="btn-lg bg-primary-blue-800 text-white px-6"
                        onClick={handleAddClick}
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddContactPerson;
