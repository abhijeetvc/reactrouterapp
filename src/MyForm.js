import React from 'react'

function MyForm(){

    const[firstName,setFirstName]=React.useState('')
    const[lastName,setLastName]=React.useState('')

    const[fName,setFName]=React.useState('')
    const[lName,setLName]=React.useState('')

    const userObj={
        "firstName":'',
        "lastName":'',
        "city":'',
        "email":'',
        "address":[]
    }

// var , let, const

    // const car={
    //     brand:"Audi",
    //     price:75000,
    //     color:"white"
    // }

    // const car1={
    //     c1:[{

    //     },{

    //     }],
    //     variant:"ZX"
    // }

    const[user,setUser]=React.useState(userObj)

    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    // REST Parameters (...), Spread Operator(...), Destructuring

    // const onFirstNameChange=(event)=>{
    //     console.log(event.target);
    //     setFirstName(event.target.value)
    // }

    // const onLastNameChange=(event)=>{
    //     console.log(event.target);
    //     setLastName(event.target.value)
    // }

    // const displayName=()=>{
    //     setFName(firstName)
    //     setLName(lastName)
    // }

    const sendData=()=>{
        console.log(user);  
    }

    return(
        <div>
            <label htmlFor="firstName">FirstName : </label>
            <input type="text" name="firstName" onChange={onChange}/>
            <label htmlFor="lastName">LastName : </label>
            <input type="text" name="lastName" onChange={onChange}/>
            <label htmlFor="email">Email : </label>
            <input type="text" name="email" onChange={onChange}/>
            <label htmlFor="city">City : </label>
            <input type="text" name="city" onChange={onChange}/>

            <button type="button">Show Name</button>
            <button type="button" onClick={sendData}>Submit</button>

        </div>
    )
}

export default MyForm