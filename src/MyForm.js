import React,{useEffect} from 'react'
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

    const [message,setMessage]=React.useState('')

    const sendData=()=>{
        console.log(user);  
        axios.post("http://localhost:8787/saveData",user)
             .then(response=>{
                 const res=response.data
                 if(res.statusCode==201){
                    console.log("Data Saved!!!");
                    setMessage(res.message)
                 }
                })
            //  .then(res=>{
            //      if(res.statusCode==201){
            //          console.log("Data Saved!!!");                  
            //      }
            //  })
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
        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then(response=>response.data)
        //      .then(res=>{
        //          setUserList(res)
        //      })
    }

    //useEffect
    // way 1
    //  useEffect(()=>{
    //      console.log("Hiiiiiiii");
        
    //      axios.get("https://jsonplaceholder.typicode.com/users")
    //          .then(response=>response.data)
    //           .then(res=>{
    //               setUserList(res)
    //           })
    //  })

    // usage 2
    //  useEffect(()=>{
    //      console.log("Hiiiiiiii");
        
    //      axios.get("https://jsonplaceholder.typicode.com/users")
    //          .then(response=>response.data)
    //           .then(res=>{
    //               setUserList(res)
    //           })
    //  },[])

    //usage 3
    const[number,setNumber]=React.useState(0)

     useEffect(()=>{
         console.log("hiiiii");
        
         axios.get("https://jsonplaceholder.typicode.com/users")
              .then(response=>response.data)
               .then(res=>{
                   setUserList(res)
               })
      },[number])

    //  Menu1, Menu2  // React Query
    
    const incrementValue=()=>{
        setNumber(number+1)
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
            <button type="button" onClick={incrementValue}>Add</button>

            <button type="button" onClick={getData}>Get Data</button>

            <ul>
                {userList.map((user)=>(
                    <li key={user.id}>{user.name+" | "+user.email}</li>
                ))}
            </ul>
            <p>{message}</p>
            <p>This is P tag</p>
        </div>
    )
}

export default MyForm