import React from 'react'

class Component2 extends React.Component{

    componentWillUnmount(){
        console.log("Component2 unmounted!!!");
    }

    render(){
        return(
            <div>
                <h2>Component2</h2>
                <p>This is Component2!!!</p>
            </div>
        )
    }
}

export default Component2