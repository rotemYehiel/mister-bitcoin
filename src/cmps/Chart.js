import React, { useEffect, useState } from 'react';
import { Chart as GoogleChart } from "react-google-charts";
import moment from 'moment';

import bitcoinGif from '../assets/imgs/bitcoin-gif.gif'

const Chart = (props) => {
    const { dataToChart } = props
    const [isMobileMode, setIsMobileMode] = useState(false)

    const updateSize = () => {
        const currWidth = window.innerWidth;
        (currWidth <= 538) ? setIsMobileMode(true) : setIsMobileMode(false)
    }
    useEffect(() => {
        const dataToDisplay = dataToChart.values;
        dataToDisplay.forEach((item, index) => {
            if (index === 0) return
            item[0] = moment(item[0]).format('L')
        });
        if (window.innerWidth <= 538) setIsMobileMode(true)
        window.addEventListener('resize', updateSize);
        return (() => {
            window.removeEventListener('resize', updateSize);
        })
    }, [dataToChart, updateSize])
    return (
        <section className="chart-cmp">
            <GoogleChart
                width={'100%'}
                height={'400px'}
                chartType="Line"
                loader={<img style={{ width: '5vw' }} src={bitcoinGif} alt="bitcoin gif" />}
                data={dataToChart.values}
                options={{
                    chart: {
                        title: dataToChart.name,
                        subtitle: isMobileMode ? '' : dataToChart.description,
                    },
                    colors: ["#1b78f2"],
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
