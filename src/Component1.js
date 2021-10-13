import React from 'react'

class Component1 extends React.Component{

    componentWillUnmount(){
        console.log("Component1 unmounted!!!");
    }

    render(){
        return(
            <div>
                <h2>Component1</h2>
                <p>This is Component1!!!</p>
            </div>
        )
    }
}

export default Component1
