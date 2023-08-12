import * as React from "react";

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject } from '@syncfusion/ej2-react-charts';

const accData = [
    { propertyType: 'Residential', value: 40 },
    { propertyType: 'Commercial', value: 25 },
    { propertyType: 'Industrial', value: 20 },
    { propertyType: 'Other', value: 15 }
];
function TopManagerPieChart() {
    return <AccumulationChartComponent id='charts'>
        <Inject services={[PieSeries]}/>
        <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y' type='Pie'>
            </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
}
;
export default TopManagerPieChart
