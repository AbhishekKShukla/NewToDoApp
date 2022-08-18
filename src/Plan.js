import React from 'react'
const Plan=(props)=>{
    return <>
       <li className='shadow p-2 my-2 col-sm-7'> {props.value}</li>
       <button className="btn btn-danger my-2 col-sm-1 offset-1" 
       onClick= {()=>{props.sendData(props.id)}}>X</button>
        <button className="btn btn-warning my-2 col-sm-2 offset-1" 
       onClick= {()=>{props.editData(props.id)}}>Update</button>
       </>
}
export default Plan;