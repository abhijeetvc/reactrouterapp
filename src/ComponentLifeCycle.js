import React from 'react'
import Component1 from './Component1';
import Component2 from './Component2';

class ComponentLifeCycle extends React.Component{
    constructor(){
        super()  // call to constructor of super class
        this.state={
            number:0,
            person:{
               name:"" 
            }
        }
    }

    componentDidMount(){
        console.log("Component Did Mount: "+this.state.number);   
    }

    incrementValue=()=>{
        this.setState({number:this.state.number+10})
    }

    decrementValue=()=>{
        this.setState({number:this.state.number-1})
    }

    componentDidUpdate(){
        console.log("Component Did Update : "+this.state.number);
    }

    toggleComponent=()=>{
        this.setState({number:this.state.number===0?1:0})
    }

    render(){

        let component=this.state.number?<Component1/>:<Component2/>

        return(
            <div>
                <h1>COmponent Life Cycle Methods</h1>
                <p>Number is: {this.state.number}</p>
                {component}
                <button onClick={this.incrementValue}>Increment Value</button>
                <button onClick={this.decrementValue}>Decrement Value</button>
                <button onClick={this.toggleComponent}>Toggle</button>
            </div>
        )
    }
}

export default ComponentLifeCycle