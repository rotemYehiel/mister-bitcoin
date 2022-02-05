import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
    const { dataToChart } = props
    const [isNarrowMode, setIsNarrowMode] = useState(false)

    const DataFormater = (number) => {
        if (number > 1000000000) {
            return (number / 1000000000).toString() + 'B';
        } else if (number > 1000000) {
            return (number / 1000000).toString() + 'M';
        } else if (number > 1000) {
            return (number / 1000).toString() + 'K';
        } else {
            return number.toString();
        }
    }

    const updateSize = () => {
        const currWidth = window.innerWidth;
        (currWidth <= 800) ? setIsNarrowMode(true) : setIsNarrowMode(false)
    }
    useEffect(() => {
        if (window.innerWidth <= 800) setIsNarrowMode(true)
        window.addEventListener('resize', updateSize);
        return (() => {
            window.removeEventListener('resize', updateSize);
        })
    }, [dataToChart, updateSize])
    return (
        <section className="chart-cmp">
            <h3>{dataToChart ? dataToChart.description : "No data to display"}</h3>
            {dataToChart && <ResponsiveContainer width="100%" aspect={2} >
                <LineChart
                    data={dataToChart.values}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={dataToChart.period} />
                    <YAxis tickFormatter={DataFormater} width={20} />
                    <Tooltip isAnimationActive={!isNarrowMode} />
                    <Legend verticalAlign="bottom" />
                    <Line dot={!isNarrowMode} type="monotone" dataKey={`${dataToChart.name}`}
                        stroke="#1b78f2" activeDot={{ r: isNarrowMode ? 5 : 8 }} />
                </LineChart>
            </ResponsiveContainer>}
        </section >
    );
}

export default Chart;
