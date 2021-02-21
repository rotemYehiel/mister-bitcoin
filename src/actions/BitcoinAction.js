import BitcoinService from '../services/bitcoin.service'

export function getRate() {
    return async dispatch => {
        const rate = await BitcoinService.getRate();
        dispatch({ type: 'SET_RATE', rate })
    }
}