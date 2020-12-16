import React, { Component } from "react"

class Error extends Component{
    constructor(){
        super()
        this.state ={
            haserror: false
        }
    }
    componentDidCatch(errors, info){
        this.setState({haserror:true})
    }
    render(){
        if(this.state.haserror){
            return(
                <main>
                <div className="input__container">
                <div className="input__container-display" >
                    <h1>refresh the page</h1>
                </div>
                <p>The prefix field is sensitve.. check your spelling and try again.</p>
                
                
                </div>
                </main>
            )
        }
        return this.props.children
    }
}
export default Error