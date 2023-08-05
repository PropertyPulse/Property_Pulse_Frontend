import React from 'react';
import '../../App.css';
import { Inject, ScheduleComponent, Day, Week, Month, Agenda,  EventSettingsModel } from '@syncfusion/ej2-react-schedule';

class Calender extends React.Component{
    localData: EventSettingsModel = {
        dataSource: [{
            EndTime: new Date(2023, 7, 12, 6, 30),
            StartTime: new Date(2023, 7, 12, 4, 0),
            Subject: '',
            IsAllDay: true,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1;COUNT=3',
            // IsReadOnly: true
            //ISBlock: true
        }],
        fields: {
            subject: { name: 'Subject', default: 'No title is provided' },
            startTime: { name: 'StartTime' },
            endTime: { name: 'EndTime'}
        }
    };

    render = () => <ScheduleComponent currentView='Month' selectedDate={new Date(2023, 7, 4)}
                                      eventSettings={this.localData}>
        <Inject services={[Day, Week, Month, Agenda]}/>
    </ScheduleComponent>;
}

export default Calender;