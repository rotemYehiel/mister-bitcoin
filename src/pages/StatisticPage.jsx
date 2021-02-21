import React, { PureComponent } from 'react'

import BitcoinService from '../services/bitcoin.service'
import Chart from '../cmps/Chart'

export class StatisticPage extends PureComponent {

    state = {
        marketPrice: null,
        confirmedTransactions: null
    }
    async componentDidMount() {
        const marketPrice = await BitcoinService.getStatisticsValues('Market Price');
        this.setState({
            marketPrice: marketPrice
        });

        const confirmedTransactions = await BitcoinService.getStatisticsValues('Exchange Trade Volume ');
        this.setState({
            confirmedTransactions: confirmedTransactions
        });

    }

    render() {
        if (!this.state.marketPrice) {
            return <div>no price</div>
        }
        if (!this.state.confirmedTransactions) {
            return <div>no confirmed Transactions</div>
        }

        return (
            <div>
                <h1>Statistic</h1>
                <Chart dataToChart={this.state.marketPrice}></Chart>
                <Chart dataToChart={this.state.confirmedTransactions}></Chart>


            </div>
        )
    }
}

export default StatisticPage
