const initialState = {
    rate: null
}
export default function BitcoinReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_RATE':
            return {
                ...state,
                rate: action.rate
            }
        default:
            return state;
    }
};
