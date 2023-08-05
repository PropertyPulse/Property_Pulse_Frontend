import React from 'react';
import '../../App.css';
// import { Inject, ScheduleComponent, Day, Week, Month, Agenda, EventSettingsModel } from "@syncfusion/ej2-react-schedule";
import {ScheduleComponent} from '@syncfusion/ej2-react-schedule';

// const localData: EventSettingsModel = {
//     dataSource: [{
//         EndTime: new Date(2023, 8, 12, 6, 30),
//         StartTime: new Date(2033, 8, 12, 4, 0),
//     }]
// };

const Calender = () => {

    // const dateValue = new Date("05/11/2017");
    // const minDate = new Date("05/09/2017");
    // const maxDate = new Date("05/15/2017");

    const data: object [] = [
        {
            Id: 1,
            Subject: 'Meeting - 1',
            StartTime: new Date(2018, 1, 15, 10, 0),
            EndTime: new Date(2018, 1, 16, 12, 30),
            IsAllDay: false
        },
    ];
    const eventSettings = { dataSource: data }

    return (
        <div>
            {/*<ScheduleComponent*/}
            {/*    currentView='Month'*/}
            {/*    SelectedDate={new Date(2023, 8, 1)}*/}
            {/*    eventSettings={localData}*/}
            {/*>*/}
            {/*    <Inject services={[Day, Week, Month, Agenda]} />*/}
            {/*</ScheduleComponent>*/}

            <ScheduleComponent height='550px' selectedDate= {new Date(2018, 1, 15)}
                               eventSettings={eventSettings}>
            </ScheduleComponent>

            {/*<CalendarComponent id="calendar" value={dateValue} min={minDate} max={maxDate} />*/}
        </div>
    );
}

export default Calender;
