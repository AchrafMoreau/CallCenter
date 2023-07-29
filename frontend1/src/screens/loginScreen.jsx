import { useEffect, useState } from "react"
import { Loading } from '../component/loading'
import { Message } from "../component/message"
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from "react-router"
import { LoginAction } from "../actions/staffActions"
import './style/loginStyle.css'

export const LoginScreen = () => {

    const [values, setValues]= useState({
        email: "",
        password: ""
    })

    const redirect = useLocation().search ? useLocation().search.split("=")[1] : "/"
    
    const dispqtch = useDispatch()
    const login = useSelector((state)=> state.login)
    const { loading, staffInfo, error } = login

    const navigate = useNavigate()
    console.log(staffInfo)
    useEffect(()=>{
        dispqtch({
            type: "LOGIN_RESET"
        })
        
        if(staffInfo){
            navigate('/home')
        }
    },[dispqtch, staffInfo, navigate])
    const handelSubmit = (e)=>{
        e.preventDefault()
        const {email, password} = values
        dispqtch(LoginAction({password, email}))
    }
    return (
        <>
                
            <div className="container login">
                <h1 className="text-center">Login</h1>
                <form action="" onSubmit={(e)=>handelSubmit(e)}>
                    <div className="row mb-4">
                        <label htmlFor="eamil" className="form-label">Email</label>
                        <div className="col">
                            <input type="email" 
                                name="email"
                                className="form-control" 
                                placeholder="example@gmail.com"
                                onChange={(e)=>{setValues((prev)=>({...prev, [e.target.name]: e.target.value}))}}
                                value={values.email}
                                />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="col">
                            <input type="password" 
                                name="password"
                                className="form-control" 
                                onChange={(e)=>{setValues((prev)=>({...prev, [e.target.name]: e.target.value}))}}
                                value={values.password}
                            />
                        </div>
                    </div>
                    {loading ? <Loading /> : error ? <Message message={error}/> : "" }
                        <div className= 'row mb-2'>
                            <button className="logBtn btn btn-primary">
                                Login
                            </button>
                        </div>
                </form>
            </div>
        </>

    )
}
