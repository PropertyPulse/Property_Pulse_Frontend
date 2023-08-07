import {
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    Inject,
    AccumulationLegend
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import '../../App.css';

function AdminPieChart() {

    const data = [
        { x: 'Top Manager', y: 2, text: 'Top Manager' }, { x: 'Finance Manager', y: 3, text: 'Finance Manager' },
        { x: 'Task Supervisor', y: 60, text: 'Task Supervisor' }, { x: 'Valuation Expert', y: 30, text: 'Valuation Expert' },
        { x: 'Insurance Agent', y: 20, text: 'Insurance Agent' }, { x: 'Manpower Company', y: 35, text: 'Manpower Company' },

    ];

    const size = {width: '90%', height: '100%'};

    const legendSettings = { position: 'Bottom', visible: true, textWrap: 'Wrap', width: '200', maximumLabelWidth: 180,
                            columnCount: 2};

    return (
        <AccumulationChartComponent id="charts" enableSmartLabels='true' legendSettings={legendSettings}
                                   isResponsive='true' size={size}>
            <Inject services={[AccumulationLegend]}/>
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' radius='90%'/>
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    );
}

export default AdminPieChart;