import React, { useState } from "react";

const Calander = () => {
  const currentDate = new Date();
  const [currentDateObject, setCurrentDateObject] = useState(currentDate);

  const daysInMonth = new Date(
    currentDateObject.getFullYear(),
    currentDateObject.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDateObject.getFullYear(),
    currentDateObject.getMonth(),
    1
  ).getDay();

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const goToPreviousMonth = () => {
    const prevMonth = new Date(
      currentDateObject.getFullYear(),
      currentDateObject.getMonth() - 1,
      1
    );
    setCurrentDateObject(prevMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      currentDateObject.getFullYear(),
      currentDateObject.getMonth() + 1,
      1
    );
    setCurrentDateObject(nextMonth);
  };

  return (
    <div className="flex items-center justify-center pt-5 px-4">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white m-2">
            <p>Calander</p>
          </h5>
          <div className="px-4 flex items-center justify-between">
            <span
              tabIndex="0"
              className="focus:outline-none text-base font-bold dark:text-gray-100 text-gray-800"
            >
              {currentDateObject.toLocaleString("default", { month: "long" })}{" "}
              {currentDateObject.getFullYear()}
            </span>
            <div className="flex items-center">
              <button
                aria-label="calendar backward"
                onClick={goToPreviousMonth}
                className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              <button
                aria-label="calendar forward"
                onClick={goToNextMonth}
                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler  icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            {dayNames.map((dayName, index) => (
              <div
                key={index}
                className="w-8 text-center text-gray-500 dark:text-gray-100 font-medium"
              >
                {dayName}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-2 overflow-x-auto">
            <table className="w-full">
              <tbody>
                {Array.from(
                  {
                    length: Math.ceil((daysArray.length + firstDayOfMonth) / 7),
                  },
                  (_, weekIndex) => (
                    <tr key={weekIndex}>
                      {Array.from({ length: 7 }, (_, dayIndex) => {
                        const dayNumber =
                          weekIndex * 7 + dayIndex - firstDayOfMonth + 1;
                        const isCurrentMonth =
                          dayNumber > 0 && dayNumber <= daysInMonth;
                        const isCurrentDate =
                          isCurrentMonth &&
                          dayNumber === currentDate.getDate() &&
                          currentDateObject.getMonth() ===
                            currentDate.getMonth();
                        const cellClasses = `px-2 py-2 cursor-pointer flex w-full justify-center ${
                          isCurrentDate
                            ? "bg-indigo-500 text-white rounded-full"
                            : ""
                        }`;

                        return (
                          <td key={dayNumber}>
                            <div className={cellClasses}>
                              <p
                                className={`text-base ${
                                  isCurrentDate
                                    ? "text-white"
                                    : "text-gray-500 dark:text-gray-100"
                                } font-medium ${
                                  isCurrentMonth ? "" : "invisible"
                                }`}
                              >
                                {isCurrentMonth ? dayNumber : ""}
                              </p>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calander;
