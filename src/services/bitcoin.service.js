import axios from 'axios';
import moment from 'moment';
const RATE_URL = 'https://blockchain.info/tobtc?currency=USD&value=1';
const MARKET_PRICE_URL = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
const TRADS_URL = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true&values';


async function getRate() {
    let rate;
    if (localStorage.getItem('rate')) {
        rate = localStorage.getItem('rate');
        rate = JSON.parse(rate);
    } else {
        rate = await axios.get(RATE_URL);
        localStorage.setItem('rate', JSON.stringify(rate));
    }
    return rate

}

async function getStatisticsValues(type) {
    let statistics;
    if (localStorage.getItem(type)) {
        statistics = localStorage.getItem(type);
        statistics = JSON.parse(statistics);
    } else {
        const req = await axios.get((type === 'Market Price') ? MARKET_PRICE_URL : TRADS_URL);
        const valuesToShow = req.data.values.map((value, index) => {
            return {
                [`${req.data.period}`]: moment(new Date(value.x)).format('L'),
                [`${req.data.name}`]: value.y
            }
        })
        statistics = {
            name: req.data.name,
            description: req.data.description,
            period: req.data.period,
            unit: req.data.unit,
            values: valuesToShow
        }
        localStorage.setItem(type, JSON.stringify(statistics));
    }
    return statistics
}

export default {
    getRate,
    getStatisticsValues
}



