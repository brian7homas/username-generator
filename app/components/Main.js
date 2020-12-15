import React, { Component, useCallback } from "react"
import {useImmer} from 'use-immer'
// form componets
import Form from './Form'
import Display from './Display'

var randomWords = require('random-words');
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
      requestCount: 0,
      
      camelCase: '',
      hyphen: '-',
      underscore: '_',
      randWord: ''
    }
    // Thesaursus: https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=68572bba-4cb7-4ff2-8713-e23cde849cbc
    // Dictionary: https://dictionaryapi.com/api/v3/references/collegiate/json/${ this.log }?key=24620616-3fae-483a-91e8-8bcf9cd2e092
  }
  
  prefix = (event) =>{
    
    console.log("prefix event")
    
    //store the random suffix 
    const random = randomWords()
    this.setState({ requestCount: + 1})
    
    //goes to display
    this.setState( { prefix: event.target.value } )
    //random word goes to display
    this.setState( { suffix: random } )
    
    //for data funcion api call
    this.prefixVar = event.target.value
    this.suffixVar = random
    
    
    return this.data(this.prefixVar, this.suffixVar)
  } // end of prefix
  
  suffix = (event) =>{
    console.log("suffix event")
    this.setState({ requestCount: + 1})
    this.setState( { suffix: event.target.value } )
    this.suffixVar = event.target.value
    return this.data(this.prefixVar,this.suffixVar)
  }
  
  number = (event) =>{
  }
  
  camelCase = (event) =>{
    // var prefix = this.state.Prefix
    // var suffix = this.state.Suffix
    if(event.target.checked){
      function lowerFirstLetter(prefix) {
        return prefix.charAt(0).toLowerCase() + prefix.slice(1);
      }
      function capitalizeFirstLetter(suffix) {
        return suffix.charAt(0).toUpperCase() + suffix.slice(1);
      }
      var prefix = lowerFirstLetter(this.state.prefix)
      var suffix = capitalizeFirstLetter(this.state.suffix)
      
      this.setState({camelCase:prefix + suffix})
      this.setState({prefix: ''})
      this.setState({suffix: ''})
    }
  if(!event.target.checked){
      this.setState({prefix: this.prefixVar})
      this.setState({suffix: this.suffixVar})
      return this.setState({camelCase: ''})  
    } 
  }
  
  
  
  hyphen = (event) =>{
    var display = document.querySelector(".input__container-display > div");
    if(event.target.checked){
      display.innerHTML += `<h1 id="hyphen">${this.state.hyphen}</h1>`
    }
    if(!event.target.checked){
      var hyphen = document.getElementById("hyphen");
      display.removeChild(hyphen)
    }
  }
  
  underscore = (event) =>{
    var display = document.querySelector(".input__container-display > div");
    if(event.target.checked){
      display.innerHTML += `<h1 id="underscore">${this.state.underscore}</h1>`
    }
    if(!event.target.checked){
      var underscore = document.getElementById("underscore");
      display.removeChild(underscore)
    }
  }
  
  
  data = (prefix = null, suffix = null) =>{
      try{
        if( this.state.requestCount < 1){
          if(prefix.length != 0){
            const delay = setTimeout(()=>{
              fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${ this.prefixVar }?key=24620616-3fae-483a-91e8-8bcf9cd2e092`)
              .then(data => data.json())
              .then(response=> { 
                                this.setState({Prefix: response})
                              })  
              .then(()=>{
                this.setState({ requestCount: 0})
              })
            }, 3000)
            
          }
          if(suffix.length != 0){
            const delay = setTimeout(()=>{
              fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${ this.suffixVar }?key=68572bba-4cb7-4ff2-8713-e23cde849cbc`)
              .then(data => data.json())
              .then(response=> { 
                                this.setState({Suffix: response})
                              }) 
              .then(()=>{
                this.setState({ requestCount: 0})
              })
            }, 3000)
          }
      }//end of requestCount check
      }catch(error){
        console.log(error)
    }
    return () => {
      clearTimeout()
      return delay 
    }  
  } 
  
  concat(){
    const concat = this.state.prefix + this.state.suffix
    return concat
  }
  
  // generate(){
  //   console.log("generate")
  //   return randomWords()
  // }
  
  render(){
    console.log("Render..")
    const prefix = this.state.Prefix
    const suffix = this.state.Suffix
    // ?options for output
    //      word.shortdef
    //      word.meta.syns
    //      word.fl
    
    //TODO: meta.id wont always show definition.. make error handler for when prefix output 
    //toDO: does not hold a value
    const prefixOutput = this.state.Prefix.map((prefix) => {return prefix.meta.id})
    if(prefixOutput != ''){
      console.log("Prefix is now output")
    }
    //!test output for suffix
    const suffixOutput = this.state.Suffix.map((suffix) => {return suffix.meta.id})
    if(suffixOutput != ''){
      console.log("Suffix is now output")
    }
    const selected = this.state.prefix.includes(this.state.word)
    
    //runs twice 
    function concat(){
      const concat = prefixOutput[0] + suffixOutput[0]
      return concat
    }

      return (  
              
        <main>
        
          
          <div className="input__container">
            {
              <h1>{ prefixOutput[0] + suffixOutput[0] ? concat() : 'Welcome' }</h1>
              
            }
                <Display
                // pass state into props
                // search={selected}
                // word={prefix}
                prefix ={this.state.prefix}
                suffix ={this.state.suffix}
                camelCase = {this.state.camelCase}
                hyphen ={this.hyphen}
                // generate = {this.generate()}
                // underscore ={this.state.underscore}
                
              />
              
              <Form 
                //communicate with input event
                prefix ={this.prefix}
                // search = {this.prefix}
                suffix = {this.suffix}
                camelCase = {this.camelCase}
                hyphen = {this.hyphen}
                underscore = {this.underscore}
                // generate={this.generate}
              />
                
          </div>
        </main>
        
      )
    }
}

export default Main