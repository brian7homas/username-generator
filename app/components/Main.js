import React, { Component } from "react"

// form componets
import Form from './Form'
import Display from './Display'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      search: ''
    }
  }
  searching = (event) =>{
    this.setState( { search: event.target.value } )
  }
  render(){
    
    const search = this.searching
    console.log(search)
    
      return (  
        <main>
          <div className="input__container">
              <Form 
                //communicate with input event
                search = {search}
              />
                <Display
                // pass state into props
                search={this.state.search}
                />
          </div>
        </main>
        
      )
    }
}

export default Main