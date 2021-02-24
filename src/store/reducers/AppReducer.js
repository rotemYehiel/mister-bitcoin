const initialState = {
    isMenuOpen: false,
    msg: 'hello world',
    counter: 17
}
export default function AppReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGAL_MENU':
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            }
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state;
    }
}