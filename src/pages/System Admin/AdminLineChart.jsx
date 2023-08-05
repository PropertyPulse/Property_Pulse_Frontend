import { Category, ChartComponent, ColumnSeries, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';
import React from "react";

function AdminLineChart() {
    const data = [
        {month: 'Jan', profit: 35}, {month: 'Feb', profit: 28},
        {month: 'Mar', profit: 34}, {month: 'Apr', profit: 32},
        {month: 'May', profit: 40}, {month: 'Jun', profit: 32},
        {month: 'Jul', profit: 35}, {month: 'Aug', profit: 55},
        {month: 'Sep', profit: 38}, {month: 'Oct', profit: 30},
        {month: 'Nov', profit: 25}, {month: 'Dec', profit: 32}
    ];
    const primaryxAxis = {valueType: 'Category'};
    return <ChartComponent id="charts" primaryXAxis={primaryxAxis}>
        <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]}/>
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={data} xName='month' yName='profit' name='Profits'/>
        </SeriesCollectionDirective>
    </ChartComponent>;
}
export default AdminLineChart;
