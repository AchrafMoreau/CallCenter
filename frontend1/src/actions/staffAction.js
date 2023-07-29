import axios from 'axios'


const HOST = "http://localhost:3015/api/staff"
export const Login = ({email, password})=> async(dispatch)=>{
    try{
        dispatch({
            type: "LOGIN_REQUEST"
        })

        const config = {
            headres:{
                'Content-Type': "application/json"
            }
        }

        const { data } = await axios.post(`${HOST}/login`, {email, password}, config)

        dispatch({
            type:"LOGIN_SUCCESS",
            payload: data
        })
    }catch(err){
        dispatch({
            type: "LOGIN_FAIL",
            payload: err.response && err.response.data.message ? err.response.data.message : err.maessage
        })
    }
}