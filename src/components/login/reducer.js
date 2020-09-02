export const initialState = {
    user: null,
    item: null,
    token: "BQBkj_fstY1PbsRMkb3RRrY3DHItOf7o_KytTQmsGklHQSVtN40LAEZ9y4wyhRgDBLOBrHb5wUJ_tghylT6N6lcfzBYZlq6nJcx2AuK4OXk3SqcOFsFth25aPdb_JWkdviVCUp8Pg1Tcp6dqM8aPv8taDI4MSehX",
};

const reducer = (state, action) => {
    console.log('this is action:', action);

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