import React, { Component, useCallback } from "react"
import {useImmer} from 'use-immer'
// form componets
import Form from './Form'
import Display from './Display'
import Buttons from './Buttons'

var randomWords = require('random-words');
class Main extends Component {
  constructor(){
    super()
    this.int= 0;
    this.state = {
      prefix: '',
      Prefix: [],
      suffix: '',
      Suffix: [],
      randNumber: 0,
      word: [],
      requestCount: 0,
      
      camelCase: '',
      hyphen: '',
      underscore: '',
      randWord: '',
    }
    // Thesaursus: https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=68572bba-4cb7-4ff2-8713-e23cde849cbc
    // Dictionary: https://dictionaryapi.com/api/v3/references/collegiate/json/${ this.log }?key=24620616-3fae-483a-91e8-8bcf9cd2e092
  }
  clear = (event) =>{
    document.querySelector(".myForm").reset()
    // document.querySelector(".input__container-display").classList.remove('font-size-75')
    this.setState({prefix: ''})
    this.setState({suffix: ''})
    this.setState({hyphen: ''})
    this.setState({underscore: ''})
    this.setState({camelCase: ''})
    this.setState({randWord: ''})
    this.setState({randNumber: ''})
    this.prefixVar = ''
    this.suffixVar = ''
    
    
  }
  generate = (event) =>{
    event.preventDefault()
    if(event.target.click){ 
      this.prefixVar = randomWords()
      this.suffixVar = randomWords()
      this.setState({randWord: this.prefixVar})
      
      //display
      this.setState({suffix: this.suffixVar})
      this.setState({prefix: this.prefixVar})
      
      // this.setState( {prefix: this.state.randWord } )
      this.setState({ requestCount: + 1})
      
      
      return this.data( this.prefixVar, this.suffixVar )
    }
  }
  
  
  
  generatePrefix = (event) =>{
    event.preventDefault()
    if(event.target.click){ 
      this.prefixVar = randomWords()
      this.setState({prefix: this.prefixVar})
      this.setState({ requestCount: + 1})
      //sends word to api
      // return this.data( this.prefixVar, null )
      return this.prefixVar
      
    }
  }
  generateSuffix = (event) =>{
    event.preventDefault()
    if(event.target.click){ 
      this.suffixVar = randomWords()
      this.setState({suffix: this.suffixVar})
      this.setState({ requestCount: + 1})
      //sends word to api
      // return this.data( null, this.suffixVar )
      return this.suffixVar
    }
  }
  
  randdomWord(x){
    
    
  }
  
  
  
  
  // prefixAndSuffix = (event) =>{
  //   // console.log("prefix event")
  //   if(this.state.randWord){
  //     console.log("generate suffix")
  //   }
  //   if(!this.state.camelCase){
  //     //store the random suffix 
  //     const random = randomWords()
  //     this.setState({ requestCount: + 1})
      
      
  //     if(!this.state.camelCase){
  //     this.setState({camelCase: ''})

  //     //display values
  //     this.setState( { prefix: event.target.value } )
  //     this.setState( { suffix: random } )
      
  //     //API Call
  //     this.prefixVar = event.target.value
  //     this.suffixVar = random
  //     return this.data(this.prefixVar, this.suffixVar)
      
  //     }else{
  //     this.setState( { prefix: event.target.value } )
  //     this.setState( { suffix: random } )
      
  //     return this.data(this.state.prefix, null)
  //     }
  //   }else{
  //     this.setState({camelCase: ''})
  //   }
  // } 
  
  prefix = (event) =>{
    // console.log("suffix event")
    this.setState({ requestCount: + 1})
    this.setState( { prefix: event.target.value } )
    this.prefixVar = event.target.value
    return this.data(this.prefixVar, null)
  }
  suffix = (event) =>{
    // console.log("suffix event")
    this.setState({ requestCount: + 1})
    this.setState( { suffix: event.target.value } )
    this.suffixVar = event.target.value
    return this.data(null,this.suffixVar)
  }
  
  number = (event) =>{
    if(event.target.click){
      var numberPrefix = Math.floor(Math.random() * (1 + 9)) + 0
      var numberSuffix = Math.floor(Math.random() * (1 + 100)) + 0
      
      var randNumber  = numberPrefix +''+ numberSuffix
      
      
      this.setState({randNumber: parseInt(randNumber)})
      
      // return parseInt(randNumber)
    }
  }
  
  camelCase = (event) =>{
    
    if(event.target.checked){
      var prefix = lowerFirstLetter(this.state.prefix)
      var suffix = capitalizeFirstLetter(this.state.suffix)
      
      function lowerFirstLetter(prefix) {
        return prefix.charAt(0).toLowerCase() + prefix.slice(1);
      }
      function capitalizeFirstLetter(suffix) {
        return suffix.charAt(0).toUpperCase() + suffix.slice(1);
      }
      
      console.log(prefix)
      console.log(suffix)

      this.setState({camelCase:prefix + suffix})
      
      this.setState({suffix: ''})
    }
  if(!event.target.checked){
      if(!this.state.prefix || !this.state.suffix){
        this.setState({prefix: this.prefixVar})
        this.setState({suffix: this.suffixVar})
      }else{        
        this.setState({suffix: this.state.suffix})
      }
      this.setState({camelCase: ''})
    } 
  }
  
  hyphen = (event) =>{
    
    if(event.target.checked){
      document.querySelector('input[name="underscore"]').checked = false
      this.setState({underscore: ""})
      this.setState({hyphen: "-"})
      console.log(this.state.hyphen)
    }
    if(!event.target.checked){
      this.setState({hyphen: ""})
    }
  }
  underscore = (event) =>{
    if(event.target.checked){
      document.querySelector('input[name="hyphen"]').checked = false
      this.setState({hyphen: ""})
      this.setState({underscore: "_"})
      var scoreState = this.state.underscore
      console.log(scoreState)
    }
    if(!event.target.checked){
      this.setState({underscore: ""})
    }
  }
  
  //Typing logic set to 3 seconds after the user is done to make api call
  data = (prefix = null, suffix = null) =>{
    try{
      if( this.state.requestCount < 1){
        if(prefix){
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
        if(suffix){
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
        if(!this.state.prefix){
          this.error = 'type in the prefix field'
          console.log(this.error)
        }
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
  
  //function that tracks the widht of the display
  componentDidUpdate(){
    // get the width of the window
    var windowWidth = window.innerWidth;
    
    // get the width of the span
    var display = document.querySelector(".input__container-display > span");
    
    // selecting the parant of the span el to change the font size
    var font = document.querySelector(".input__container-display ");
    
    //! tracks the width of the span el
    this.width = display.offsetWidth;
    
    
    // if the width of the window is 414 or less than
    //   the span will recieve fon-size-75 when it reaches a width beyond 375px
    if(windowWidth <= 320 && this.width > 315){
      console.log("over 320")
      font.classList.add("font-size-75");
    }
    
    else if(windowWidth <= 414 && this.width > 375){
      console.log("over 375")
      font.classList.add("font-size-75");
    }
    
    else if(windowWidth > 414 && this.width > windowWidth){
      
      console.log("over windowWidth")
      font.classList.add("font-size-75");
    }
  }
  
  render(){
    const prefixOutput = this.state.Prefix.map((prefix) => {  
      return prefix.fl})
    if(prefixOutput != ''){
    }
    //!test output for suffix
    const suffixOutput = this.state.Suffix.map((suffix) => {return suffix.meta.id})
    if(suffixOutput != ''){
    }
    function concat(){
      const concat = prefixOutput[0] + suffixOutput[0]
      return concat
    }
    const generate = () => {
      return randomWords()
    }
    console.log(prefixOutput[0])
      return (  
              
        <main>
        
          
          <div className="input__container">
            {
              <h1 className="instructions">{ !this.state.prefix ? "type in the prefix field to have a random word.." : this.error }</h1>
              
            }
                
              
              <Form 
                //communicate with input event
                prefix ={this.prefix}
                // search = {this.prefix}
                suffix = {this.suffix}
                camelCase = {this.camelCase}
                hyphen = {this.hyphen}
                underscore = {this.underscore}
                generate={this.state.randWord}
                
                numberClick = {this.number}
                click = {this.generate}
                
                // generate random prefix value
                generate={this.generate}
                generatePrefix={this.generatePrefix}
                generateSuffix={this.generateSuffix}
              />
              
              <Display
                // pass state into props
                prefix ={this.state.prefix}
                suffix ={this.state.suffix}
                camelCase = {this.state.camelCase}
                
                hyphen ={this.hyphen}
                underscore ={this.underscore}
                
                hyphenState = {this.state.hyphen}
                scoreState = {this.state.underscore}
                
                numberClick = {!this.state.randNumber?'':this.state.randNumber}
                // underscore ={this.state.underscore}
                
                // generate = {this.state.randWord}
                generatePrefix = {this.prefixVar}
                generateSuffix = {this.suffixVar}
                
              />
              <Buttons
                generate={this.generate}
                numberClick={this.number}
                clear={this.clear}
              />
                
          </div>
        </main>
        
      )
    }
}

export default Main