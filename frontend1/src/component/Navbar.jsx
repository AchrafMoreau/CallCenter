import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const login  = useSelector(state=> state.login) 
    const { staffInfo } = login

    console.log(staffInfo);
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light" id='upperNav'>
            <div className="container-fluid">
                <a className="navbar-brand" to="#">TCC</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">

                    </li>
                </ul>
                    <li className="nav-item dropdown d-flex">
                        <Link className="nav-link dropdown-toggle" to="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {staffInfo.username}
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/profile">Profile Settings</Link></li>
                            <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                            {/* <li><hr className="dropdown-divider"></li> */}
                            {/* <li><a className="dropdown-item" to="#">Something else here</a></li> */}
                        </ul>
                    </li>
                </div>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {staffInfo.role_id === 1 &&
                        <li className='nav-item me-4'>
                            <Link to='/dashboard'>
                                <i className='fa-solid fa-home'></i>
                                Dashboard
                            </Link>
                        </li>
                    }
                    <li className="nav-item me-4">
                        <Link to='/operator/dashboard'> 
                            <i className='fa-slid fa-phone'></i>
                            Operator DashBoard
                        </Link>
                    </li>
                    <li className="nav-item me-4">
                        <Link to='/operator/dashboard'> 
                            <i className='fa-slid fa-phone'></i>
                            Upsell
                        </Link>
                    </li>
                    <li className="nav-item me-4">
                        <Link to='/operator/dashboard'> 
                            <i className='fa-slid fa-phone'></i>
                            Statistic
                        </Link>
                    </li>
                    {staffInfo.role_id === 1 &&
                        <li className="nav-item me-4 dropdown d-flex">
                            <Link className="nav-link dropdown-toggle" to="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className='fa-solid fa-profile'></i>
                                Operator Management
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/admin/staff"><i className='fa-solid'>Operators</i></Link></li>
                                <li><Link className="dropdown-item" to="/admin/project"><i className='fa-solid'>Projects</i></Link></li>
                                <li><Link className="dropdown-item" to="/admin/order"><i className='fa-solid'>Orders</i></Link></li>
                                <li><Link className="dropdown-item" to="/admin/sms"><i className='fa-solid'>SMS</i></Link></li>
                                <li><Link className="dropdown-item" to="/admin/orderStatus"><i className='fa-solid'>Order Status</i></Link></li>
                            </ul>
                        </li>
                    }
                    <li className="nav-item me-4 dropdown d-flex">
                        <Link className="nav-link dropdown-toggle" to="/profile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className='fa-solid fa-profile'></i>
                            Settings
                        </Link>
                        <ul className="dropdown-menu">
                            {staffInfo.role_id === 1 ? 
                                <>
                                    <li><Link className="dropdown-item" to="/admin/operator"><i className='fa-solid'>Form Builder</i></Link></li>
                                    <li><Link className="dropdown-item" to="/admin/project"><i className='fa-solid'>Company Setting</i></Link></li>
                                    <li><Link className="dropdown-item" to="/admin/order"><i className='fa-solid'>Traslation Manger</i></Link></li>
                                    <li><Link className="dropdown-item" to="/admin/sms"><i className='fa-solid'>Profile Settings</i></Link></li>
                                </>
                                :<li><Link className="dropdown-item" to="/admin/orderStatus"><i className='fa-solid'>Order Status</i></Link></li>
                            }
                        </ul>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
