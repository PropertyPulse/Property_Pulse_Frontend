import React, {useState} from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const RescheduleTask = async (taskId) => {

        const axiosPrivate = useAxiosPrivate();
        const [startDate, setStartDate] = useState("");
        const [endDate, setEndDate] = useState("");

        const handleRescheduleClick = async () => {

            const data = {
                startDate,
                endDate,
                taskId,
            };

            try {
                const response = await axiosPrivate.post(
                    "/api/v1/task-requests/task-approvals/reschedule-task", data,
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
                            id="startDate"
                            name="startDate"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            placeholder="Start Date"
                            className="w-full input-field rounded-md"
                        />
                        <input
                            id="endDate"
                            name="endDate"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            placeholder="End Date"
                            className="w-full input-field rounded-md"
                        />
                    </div>
                    <div className="w-full pt-8 flex justify-center items-center space-x-6">
                        <button
                            className="btn-lg bg-primary-blue-800 text-white px-6"
                            onClick={handleRescheduleClick}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        );

}

export default RescheduleTask;