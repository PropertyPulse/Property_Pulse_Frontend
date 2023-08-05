import {
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    Inject,
    AccumulationLegend
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import '../../../../../3rd group project/New folder/Property_Pulse_Frontend/src/App.css';

function AdminPieChart() {

    const data = [
        { x: 'Top Manager', y: 2, text: 'Top Manager' }, { x: 'Finance Manager', y: 3, text: 'Finance Manager' },
        { x: 'Task Supervisor', y: 60, text: 'Task Supervisor' }, { x: 'Valuation Expert', y: 30, text: 'Valuation Expert' },
        { x: 'Insurance Agent', y: 20, text: 'Insurance Agent' }, { x: 'Manpower Company', y: 35, text: 'Manpower Company' },

    ];

    const legendSettings = { visible: true, textWrap: 'Wrap', width: '200', maximumLabelWidth: 180 };

    return (
        <AccumulationChartComponent id="charts" enableSmartLabels='true' legendSettings={legendSettings}>
            <Inject services={[AccumulationLegend]}/>
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' radius='80%'/>
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    );
}

export default AdminPieChart;