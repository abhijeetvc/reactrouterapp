import React from 'react'
import axios from 'axios'

function MyForm(){

    const[firstName,setFirstName]=React.useState('')
    const[lastName,setLastName]=React.useState('')

    const[fName,setFName]=React.useState('')
    const[lName,setLName]=React.useState('')

    const userObj={
        "firstName":'',
        "lastName":'',
        "city":'',
        // "email":'',
        // "address":[]
    }

    const[userList,setUserList]=React.useState([])
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
        axios.post("http://localhost:8989/saveData",user)
             .then(response=>{
                 console.log(response);
             })
    }

    // fetch, axios
    // const getData=()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response=>response.json())
    //         .then(res=>{
    //             setUserList(res)
    //         })
    // }

    // npm install axios
    const getData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.data)
             .then(res=>{
                 setUserList(res)
             })
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

            <button type="button" onClick={getData}>Get Data</button>

            <ul>
                {userList.map((user)=>(
                    <li key={user.id}>{user.name+" | "+user.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default MyForm