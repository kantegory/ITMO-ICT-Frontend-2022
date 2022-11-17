export const initialAuthState = {
    user:{},
    token: null,
    error: null,
    fetching: false
}

export const userReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {...state,
            user: action.payload.user,
            fetching:false,
            error: null,
            token: action.payload.token
            }
        case "LOGIN_FAILED":
            return {
                ...initialAuthState,
                fetching: false,
                error: action.payload
            }
        case "LOGIN_LOADING":
            return {
                ...state,
                fetching: true
            }
        default:
            return state;
    }

}
