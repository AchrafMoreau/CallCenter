import React from 'react'
import { useSelector } from 'react-redux'

export const OperatorScreen = () => {
    const allOperators = useSelector(state=> state.allOperators)
    const { loading, error, staffs } = login
  return (
    <>
        <button className='btn btn-primary' >
            <i className='fa-solid fa-plus'></i>
            Add New Operator
        </button>

        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Create At</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {staffs.map((elm)=>(
                    <tr key={elm._id}>
                        <th>{elm.first_name} {elm.last_name}</th>
                        <th>{elm.email}</th>
                        <th>{elm.createAt}</th>
                        <th>Enable</th>
                        <th>
                            <button className='edite'><i className='fa-solid fa-edite'></i></button>
                            <button className='delete'><i className='fa-solid fa-trash'></i></button>
                            <button className='static'>Statistic</button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}
