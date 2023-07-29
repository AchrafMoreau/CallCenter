

export const LoginReducer = (state={ staffInfo: {}}, action)=>{
    switch(action.type){
        case "LOGIN_REQUEST":
            return { loading : true }
        case "LOGIN_SUCCESS":
            return{
                loading: false,
                staffInfo : action.payload
            }
        case "LOGIN_FAIL":
            return{
                loading: false,
                error: action.payload
            }
        case "LOGIN_RESET":
            return {}
        default:
            return state
    }
}