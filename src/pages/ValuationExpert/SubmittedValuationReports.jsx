import React from "react";
import { Link } from "react-router-dom";
const SubmittedValuationReports = () => {
  return (
    <div className="flex flex-col ml-8 space-y-3 ">
      <Link
        to="../../ve/dashboard"
        className=" rounded-full  w-64 bg-white hover:bg-gray-100 px-4 mt-4  pb-2 pt-2.5 text-lg font-medium  leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        <div className="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 50 50"
          >
            <circle cx="25" cy="25" r="23" fill="green" />
            <path d="M35.293,13.293c0.391-0.391,0.391-1.023,0-1.414c-0.391-0.391-1.023-0.391-1.414,0L12.293,24.293c-0.195,0.195-0.293,0.451-0.293,0.707s0.098,0.512,0.293,0.707l21.586,21.586c0.391,0.391,1.023,0.391,1.414,0c0.391-0.391,0.391-1.023,0-1.414L15.414,25L35.293,4.121C35.684,3.73,35.684,3.098,35.293,2.707c-0.391-0.391-1.023-0.391-1.414,0L12.293,22.293c-0.195,0.195-0.293,0.451-0.293,0.707s0.098,0.512,0.293,0.707L33.879,45.293c0.391,0.391,1.023,0.391,1.414,0c0.391-0.391,0.391-1.023,0-1.414L15.414,25L34.707,5.707C35.098,5.316,35.098,4.684,34.707,4.293C34.316,3.902,33.684,3.902,33.293,4.293L11.707,25L33.293,46.707c0.391,0.391,1.023,0.391,1.414,0C34.316,46.316,34.316,45.684,33.926,45.293L12.34,23.707c-0.195-0.195-0.293-0.451-0.293-0.707s0.098-0.512,0.293-0.707L33.926,2.293C34.316,1.902,34.316,1.27,33.926,0.879C33.535,0.488,32.902,0.488,32.511,0.879L10.925,22.465c-1.171,1.171-1.171,3.071,0,4.243c1.171,1.171,3.071,1.171,4.243,0L36.757,5.697c1.171-1.171,1.171-3.071,0-4.243c-1.171-1.171-3.071-1.171-4.243,0L7.682,22.465c-1.171,1.171-1.171,3.071,0,4.243c1.171,1.171,3.071,1.171,4.243,0L41.219,1.878c1.171-1.171,1.171-3.071,0-4.243c-1.171-1.171-3.071-1.171-4.243,0L7.682,18.465" />
          </svg>

          <span className="text-black ">Back to the dashboard</span>
        </div>
      </Link>

      <div class="p-8 border-b border-gray-200 flex flex-col shadow mx-6">
        <h1 className="font-bold text-lg ml-3">Submitted Valuation Reports</h1>
        <table class="divide-y mx-auto divide-gray-300" id="dataTable">
          <thead class="bg-choco-gray">
            <tr>
              <th class="px-6 py-2 text-xs text-white-500">Property ID</th>
              <th class="px-6 py-2 text-xs text-white-500">Type</th>
              <th class="px-6 py-2 text-xs text-white-500">Reqeusted Date</th>
              <th class="px-6 py-2 text-xs text-white-500">Submitted Date</th>
              <th class="px-6 py-2 text-xs text-white-500"></th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-500">
            <tr class="whitespace-nowrap">
              <td class="px-6 py-4 text-sm text-center text-gray-500">1</td>
              <td class="px-6 py-4 text-center">
                <div class="text-sm text-gray-900">House</div>
              </td>
              <td class="px-6 py-4 text-center">
                <div class="text-sm text-gray-500">2020-09-10</div>
              </td>
              <td class="px-6 py-4 text-sm text-center text-gray-500">
                2021-1-12
              </td>

              <td class="px-6 py-4 text-center">
                <a
                  href
                  class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  View Report
                </a>
              </td>
            </tr>
            <tr class="bg-gray-50 whitespace-nowrap">
              <td class="px-6 py-4 text-sm text-center text-gray-500">2</td>
              <td class="px-6 py-4 text-center">
                <div class="text-sm text-gray-900">House</div>
              </td>
              <td class="px-6 py-4 text-center">
                <div class="text-sm text-gray-500">2020-09-10</div>
              </td>
              <td class="px-6 py-4 text-sm text-center text-gray-500">
                2020-09-10
              </td>

              <td class="px-6 py-4 text-center">
                <a
                  href
                  class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  View Report
                </a>
              </td>
            </tr>
            <tr class="whitespace-nowrap">
              <td class="px-6 py-4 text-sm text-center text-gray-500">3</td>
              <td class="px-6 py-4 text-center">
                <div class="text-sm text-gray-900">House</div>
              </td>
              <td class="px-6 py-4 text-center">
                <div class="text-sm text-gray-500">2020-09-10</div>
              </td>
              <td class="px-6 py-4 text-sm text-center text-gray-500">
                2020-09-10
              </td>
              <td class="px-6 py-4 text-center">
                <a
                  href
                  class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  View Report
                </a>
              </td>
            </tr>

            <tr class="bg-gray-50 whitespace-nowrap">
              <td class="px-6 py-4 text-sm text-center text-gray-500">4</td>
              <td class="px-6 py-4 text-center">
                <div class="text-sm text-gray-900">Land</div>
              </td>
              <td class="px-6 py-4 text-center">
                <div class="text-sm text-gray-500">2020-09-10</div>
              </td>
              <td class="px-6 py-4 text-sm text-center text-gray-500">
                2021-1-12
              </td>
              <td class="px-6 py-4 text-center">
                <a
                  href
                  class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  View Report
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmittedValuationReports;
