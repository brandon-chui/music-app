export const initialState = {
    user: null,
    item: null,
    token: null,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        default:
            return state;
    }
}

export default reducer;