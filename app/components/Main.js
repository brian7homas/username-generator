import React, { Component, useCallback } from "react"
import {useImmer} from 'use-immer'
// form componets
import Form from './Form'
import Display from './Display'
import Fromgroup from './Formgroup'
// import Checkboxes from './Checkboxes'
// import Buttons from './Buttons'
// import Formgroup from "./Formgroup"

class Main extends Component {
  constructor(){
    super()
    this.state = {
      search: '',
      word: [],
      requestCount: 0
    }
    // Thesaursus: https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=68572bba-4cb7-4ff2-8713-e23cde849cbc
      // Dictionary: https://dictionaryapi.com/api/v3/references/collegiate/json/${ this.log }?key=24620616-3fae-483a-91e8-8bcf9cd2e092
      
    
    
  }
  
  searching = (event) =>{
    this.setState( { search: event.target.value } )
    this.setState({ requestCount: +1})
    this.log = event.target.value
    return this.data(this.log)
    //TODO: remove search from state, app works using log and call function
    //! state is not updated on first key press
    //! search state is being used in display componet to show what is being typed
  } // end of searching
  
  data = (log) =>{
    if(this.state.requestCount < 1){
      try{  
        const delay = setTimeout(()=>{
          fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${ this.state.search}?key=68572bba-4cb7-4ff2-8713-e23cde849cbc`)
          .then(data => data.json())
          .then(response=> { 
                            this.setState({word: response})
                          }) 
          
          .then(()=>{
            this.setState({ requestCount: 0})
            
          })
          
        }, 3000)
      }catch(error){
        console.log(error)
      } 
    } //end of requestCount check
    
    return () => { 
      clearTimeout()
    }
  }
  render(){
    const word = this.state.word
    const output = this.state.word.map((word) => {return word.shortdef})
    const selected = this.state.search.includes(this.state.word)
    output.forEach(()=>{ 
      return output
      })
      return (  
              
        <main>
        
          
          <div className="input__container">
          {}
                <li>{ output }</li>
                <Display
                // pass state into props
                search={selected}
                word={word}
                log ={this.state.search}
              />
              <Form 
                //communicate with input event
                log ={this.state.search}
                search = {this.searching}
              />
                
          </div>
        </main>
        
      )
    }
}

export default Main