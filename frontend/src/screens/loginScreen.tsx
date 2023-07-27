import { useState } from "react"
import './style/loginStyle.css'
export const LoginScreen = () => {

    const [values, setValues]= useState({
        email: "",
        password: ""
    })
    
    console.log(values)
    return (
        <>
            <div className="container login">
                <h1 className="text-center">Login</h1>
               <form action="">
                    <div className="row mb-4">
                        <label htmlFor="eamil" className="form-label">Email:</label>
                        <div className="col">
                            <input type="text" 
                                className="form-control" 
                                placeholder="First name"
                                />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name"
                            />
                        </div>
                    </div>
               </form>
            </div>
        </>

    )
}
