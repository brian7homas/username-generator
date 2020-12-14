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
      requestCount: 0,
      
      hyphen: '-',
      underscore: '_'
    }
    // Thesaursus: https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=68572bba-4cb7-4ff2-8713-e23cde849cbc
    // Dictionary: https://dictionaryapi.com/api/v3/references/collegiate/json/${ this.log }?key=24620616-3fae-483a-91e8-8bcf9cd2e092
  }
  
  prefix = (event) =>{
    console.log("prefix event")
    this.setState({ requestCount: + 1})
    this.setState( { prefix: event.target.value } )
    this.prefixVar = event.target.value
    return this.data(this.prefixVar)
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
    if(event.target.checked){
      this.state.prefix.split(this.state.hyphen)
      console.log("checked")
      console.log(this.state.Prefix)
      // get both prefix and suffix
      // make prefix lowercase
      // make suffix uppercase
      // remove spaces
    }
  }
  
  data = (prefix = null, suffix = null) =>{
    // if(prefix){
    //   console.log("prefix")
    //   try{
    //     if( this.state.requestCount < 1 && prefix.length !== 0 ){
    //       const delay = setTimeout(()=>{
    //         fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${ this.prefixVar }?key=68572bba-4cb7-4ff2-8713-e23cde849cbc`)
    //         .then(data => data.json())
    //         .then(response=> { 
    //                           this.setState({Prefix: response})
    //                         }) 
    //         .then(()=>{
    //           this.setState({ requestCount: 0})
    //         })
    //       }, 3000)
    //     return delay 
    //   } //end of requestCount check
    //   }catch(error){
    //     console.log(error)
    //   } 
    //   // return () => {
    //   //   clearTimeout()
    //   // }
    // }
    // if(suffix){
    //   console.log("suffiz")
      try{
        if( this.state.requestCount < 1){
          if(prefix.length != 0){
            const delay = setTimeout(()=>{
              fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${ this.prefixVar }?key=68572bba-4cb7-4ff2-8713-e23cde849cbc`)
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
          // const delay = setTimeout(()=>{
          //   fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${ this.suffixVar }?key=68572bba-4cb7-4ff2-8713-e23cde849cbc`)
          //   .then(data => data.json())
          //   .then(response=> { 
          //                     this.setState({Suffix: response})
          //                   }) 
          //   .then(()=>{
          //     this.setState({ requestCount: 0})
          //   })
          // }, 3000)
        return delay 
      } //end of requestCount check
      }catch(error){
        console.log(error)
      // } 
      // return () => {
      //   clearTimeout()
      // }
    }
    return () => {
      clearTimeout()
    }  
  } 
  
  
  render(){
    // const prefix = this.state.Prefix
    // const suffix = this.state.Suffix
    // ?options for output
    //      word.shortdef
    //      word.meta.syns
    //      word.fl
    
    const prefixOutput = this.state.Prefix.map((prefix) => {return prefix.fl})
    if(prefixOutput != ''){
      console.log("Prefix is now output")
    }
    //!test output for suffix
    const suffixOutput = this.state.Suffix.map((suffix) => {return suffix.fl})
    if(suffixOutput != ''){
      console.log("Suffix is now output")
    }
    const selected = this.state.prefix.includes(this.state.word)
    
    // output.forEach(()=>{ 
    //   return output + suffixOutput
    //   })
    //   for(var i; i<output.length; ++i){
    //     return output[i]
    //   }
      
      return (  
              
        <main>
        
          
          <div className="input__container">
            {
              <p>{ prefixOutput[0] + suffixOutput[0] ? prefixOutput[0] + suffixOutput[0] : 'Welcome' }</p>
            }    
                <Display
                // pass state into props
                // search={selected}
                // word={prefix}
                prefix ={this.state.prefix}
                suffix ={this.state.suffix}
                // hyphen ={this.state.hyphen}
                // underscore ={this.state.underscore}
                
              />
              
              <Form 
                //communicate with input event
                prefix ={this.prefix}
                // search = {this.prefix}
                suffix = {this.suffix}
                camelCase = {this.camelCase}
              />
                
          </div>
        </main>
        
      )
    }
}

export default Main