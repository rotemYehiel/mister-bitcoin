import React, { useState, useEffect } from 'react'

import BitcoinService from '../services/bitcoin.service'
import Chart from '../cmps/Chart'

const StatisticPage = (props) => {
    const [marketPrice, setMarketPrice] = useState(null)
    const [confirmedTransactions, setConfirmedTransactions] = useState(null)

    useEffect(() => {
        getMarketPrive();
        getConfirmedTransactions();
    }, [])
    const getMarketPrive = async () => {
        const marketPrice = await BitcoinService.getStatisticsValues('Market Price')
        setMarketPrice(marketPrice)
    }

    const getConfirmedTransactions = async () => {
        const confirmedTransactions = await BitcoinService.getStatisticsValues('Exchange Trade Volume ');
        setConfirmedTransactions(confirmedTransactions)
    }


    if (!marketPrice) {
        return <div>no price</div>
    }
    if (!confirmedTransactions) {
        return <div>no confirmed Transactions</div>
    }

    return (
        <div className="statistic page">
            <h1 className="page-header">Statistic</h1>
            <Chart dataToChart={marketPrice}></Chart>
            <Chart dataToChart={confirmedTransactions}></Chart>
        </div>
    )

}

export default StatisticPage
