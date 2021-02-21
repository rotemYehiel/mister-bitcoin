import React from 'react';
import { Chart as GoogleChart } from "react-google-charts";



export function Chart(props) {

    const { dataToChart } = props
    // console.log(dataToChart.values)
    return (
        <section className="chart-cmp">
            <GoogleChart
                max-width={'fit-contant'}
                height={'400px'}
                chartType="Line"
                // loader={<div>Loading Chart</div>}
                data={dataToChart.values}
                options={{
                    chart: {
                        title: dataToChart.name,
                        subtitle: dataToChart.description,
                    },
                    colors: ["#ad8093"],
                    hAxis: {
                        title: dataToChart.period,
                    },
                    vAxis: {
                        title: dataToChart.unit,
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </section >
    );
}

export default Chart;
