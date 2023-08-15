import React from "react";
import {Link} from "react-router-dom";

const ViewManpowerRequestDetails = () => {

    const RequestDetails = [
        {
            id : 1,
            Task : "Clean the garden",
            Location : "",
            PropertyDetails : "",
            Description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit diam eu lobortis blandit. Integer urna tortor, tristique ac vestibulum et, ullamcorper vel diam. Integer pulvinar vestibulum lorem, vel molestie nunc viverra id. Nunc sodales lectus in congue lacinia. Sed malesuada lorem quis ultricies fringilla. Donec dignissim pharetra odio, in volutpat lorem tristique in. Cras vitae purus gravida, mattis massa non, pretium velit. In a accumsan odio, sed commodo est. Fusce rhoncus, nisi ut volutpat aliquet, tortor risus faucibus risus, faucibus venenatis quam felis vel ante.",
            StartDate : "2023/08/25",
            EndDate : "2023/08/26",
            EstimatedPrice : "10000",
            ContactPersonName : "Deepamal Shaminda",
            ContactPersonMobileNumber : "0766544829"
        }
    ]

    return (



        <div className="max-w-10/12">

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Task
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Location
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Property Details
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Start Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            End Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Estimated Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contact Person Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contact Person Number
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {RequestDetails.map((request, index) => (
                        <tr>
                            <td className="px-6 py-4">
                                {request.Task}
                            </td>
                            <td className="px-6 py-4">
                                {request.Location}
                            </td>
                            <td className="px-6 py-4">
                                <Link to='/task-supervisor/assigned-properties/view-property' className="text-white bg-gradient-to-br bg-blue-button-end font-medium rounded-lg text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                                    View Property
                                </Link>
                            </td>
                            <td className="px-6 py-4">
                                {request.Description}
                            </td>
                            <td className="px-6 py-4">
                                {request.StartDate}
                            </td>
                            <td className="px-6 py-4">
                                {request.EndDate}
                            </td>
                            <td className="px-6 py-4">
                                {request.EstimatedPrice}
                            </td>
                            <td className="px-6 py-4">
                                {request.ContactPersonName}
                            </td>
                            <td className="px-6 py-4">
                                {request.ContactPersonMobileNumber}
                            </td>
                        </tr>

                        ))};
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ViewManpowerRequestDetails;