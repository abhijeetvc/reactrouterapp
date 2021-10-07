
function MyApp2({person}){
    return(
        <div>
            <h2>MyApp2 Component</h2>
            <p>This is MyApp2</p>
            <p>{person.name}</p>
            <p>{person.city}</p>
            <p>{person.salary}</p>
        </div>
    )
}

export default MyApp2