import ApiService from "./ApiService";

const api = new ApiService()

export const LoginSuccess = (payload) => (
    {
        type: "LOGIN_SUCCESS",
        payload
    }
)

export const LoginFailed = (payload) => (
    {
        type: "LOGIN_FAILED",
        payload
    }
)

export const LoginLoading = () => (
    {
        type: "LOGIN_LOADING",
    }
)

export const doLogin = async (dispatch, {username, password}) => {
    dispatch(LoginLoading())
    try {
        const token = await api.getToken(username, password);
        const user = await api.getUser(token)
        return dispatch(LoginSuccess({token, user}))
    } catch (error) {
        return dispatch(LoginFailed(error))
    }
}

