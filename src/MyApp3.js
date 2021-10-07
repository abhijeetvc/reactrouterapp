
function MyApp3({userList}){

    return(
        <div>
            <ul>
                {userList.map((user)=>(
                    <li key={user.id}>{user.id+", "+user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default MyApp3