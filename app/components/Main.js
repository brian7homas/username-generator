import React, { Component, useCallback } from "react"
import {useImmer} from 'use-immer'
// form componets
import Form from './Form'
import Display from './Display'
import DisplayPre from "./DisplayPre"
import DisplaySuff from "./DisplaySuff"
class Main extends Component {
  constructor(){
    super()
    this.state = {
      prefix: '',
      Prefix: [],
      suffix: '',
      Suffix: [],
      randNumber: 0,
      word: [],
      requestCount: 0
    }
    // Thesaursus: https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=68572bba-4cb7-4ff2-8713-e23cde849cbc
    // Dictionary: https://dictionaryapi.com/api/v3/references/collegiate/json/${ this.log }?key=24620616-3fae-483a-91e8-8bcf9cd2e092
  }
  
  prefix = (event) =>{
    // set request count to 1
    this.setState({ requestCount: + 1})
    this.setState( { prefix: event.target.value } )
    
    
    this.log = event.target.value
    return this.data(this.log)
  } // end of prefix
  
  suffix = (event) =>{
    this.setState({ requestCount: + 1})
    this.setState( { suffix: event.target.value } )
    return this.data(this.state.suffix)
  }
  
  number = (event) =>{
    
  }
  
  data = (log) =>{
    console.log(log)
      try{  
        if(this.state.requestCount < 1 && log.length !== 0 ){
          const delay = setTimeout(()=>{
            fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${ this.log }?key=68572bba-4cb7-4ff2-8713-e23cde849cbc`)
            .then(data => data.json())
            .then(response=> { 
                              this.setState({Prefix: response})
                            }) 
            .then(()=>{
              this.setState({ requestCount: 0})
            })
            .then(()=>{
              this.log == ''
            })
          }, 3000)
        return delay 
      } //end of requestCount check
      }catch(error){
        console.log(error)
      } 
    return () => { 
      clearTimeout()
    }
  }
  
  render(){
    const prefix = this.state.Prefix
    const suffix = this.state.Suffix
    // ?options for output
    //      word.shortdef
    //      word.meta.syns
    //      word.fl
  
    const output = this.state.Prefix.map((prefix) => {return prefix.shortdef})
    
    //!test output for suffix
    const suffixOutput = this.state.Suffix.map((suffix) => {return suffix.shortdef})
    
    const selected = this.state.prefix.includes(this.state.word)
    
    output.forEach(()=>{ 
      return output + suffixOutput
      })
      for(var i; i<output.length; ++i){
        return output[i]
      }
      
      return (  
              
        <main>
        
          
          <div className="input__container">
                <p>{ output  }</p>
                
                <Display
                // pass state into props
                search={selected}
                word={prefix}
                prefix ={this.state.prefix}
                suffix ={this.state.suffix}
                
              />
              
              <Form 
                //communicate with input event
                prefix ={this.prefix}
                search = {this.prefix}
                suffix = {this.suffix}
              />
                
          </div>
        </main>
        
      )
    }
}

export default Main