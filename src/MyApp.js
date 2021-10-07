import React from 'react'
// function MyApp(){
//     const message="Hellooo"

//     const[value,setValue]=React.useState(0)

//     const handleIncrement=()=>{
//         setValue(value+1)
//     }
//     return(
//         <div>
//             <h1>MyApp Component</h1>
//             <p>{message}</p>
//             <p>Value is: {value}</p>
//             <button onClick={handleIncrement}>Change Value</button>
//         </div>
//     )
// }

class MyApp extends React.Component{
    constructor(){
        super()
        this.state={
            value:0
        }
    }
    handleChange=()=>{
        this.setState({value:this.state.value+1})
    }

    getData=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                console.log(response.json());
            })
    }
    
    render(){
        return(
            <div>
                <p>Value is: {this.state.value}</p>
                <button onClick={this.handleChange}>Change Value</button>
                <button onClick={this.getData}>Get Data</button>
            </div>
        )
    }
}

export default MyApp