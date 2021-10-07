import MyApp2 from './MyApp2'
import MyApp3 from './MyApp3';

const users=[
    {id:1,name:"Peter"},
    {id:2,name:"Richard"}
]

function MyApp1(){

    const message="Hello Props!!!"
    const person={
        name:"John",
        city:"Pune",
        salary:75000
    }
    return(
        <div>
            <h1>MyApp1 Component</h1>
            <p>This is MyApp1</p>
           {/* <MyApp2 message={message}/>*/}
           {/* <MyApp2 person={person}/>*/}
           <MyApp3 userList={users}/>
        </div>
    )
}

export default MyApp1