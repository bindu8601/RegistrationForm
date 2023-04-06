import React, { useState } from "react";
function Main(){
    const [Values, setValues]=useState({
        firstname:"",
        lastname:"",
        email:""
    })
    const handleFirstName=(event)=>{
        setValues({...Values, firstname:event.target.value})
    }
    const handleLastName=(event)=>{
        setValues({...Values, lastname:event.target.value})
    }
    const handleEmail=(event)=>{
        setValues({...Values, email:event.target.value})
    }
    const [Submit,setSubmit]=useState(false)
    const onSubmit=(event)=>{
        event.preventDefault()
        if(Values.firstname && Values.lastname && Values.email){
            setValid(true)
        }
        setSubmit(true)
    }
    const [Valid,setValid]=useState(false)

    return(
        <div className="box">
            <form onSubmit={onSubmit} >
                {Submit && Valid ? <div className="successmessage">Success! Registered</div> : null}
                <input onChange={handleFirstName} value={Values.firstname} type='text' placeholder="First Name"/>
                {Submit && !Values.firstname ? <span>  Please enter First Name </span>: null}
                <br/>
                <input onChange={handleLastName} value={Values.lastname} type="text" placeholder="Last Name"/>
                {Submit && !Values.lastname ? <span>Please enter Last Name </span>: null}
                <br/>
                <input onChange={handleEmail} value={Values.email} type="text" placeholder="Email"/>
                {Submit && !Values.email ? <span>Please enter Email </span>: null}
                <br/>
                <button onClick={onSubmit}>Register</button>
            </form>
        </div>
    )
}
export default Main