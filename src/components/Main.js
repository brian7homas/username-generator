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
      underscore: '_',
      randWord: ''
    }
    // Thesaursus: https://dictionaryapi.com/api/v3/references/thesaurus/json/test?key=68572bba-4cb7-4ff2-8713-e23cde849cbc
    // Dictionary: https://dictionaryapi.com/api/v3/references/collegiate/json/${ this.log }?key=24620616-3fae-483a-91e8-8bcf9cd2e092
  }
  clear = (event) =>{
    document.querySelector(".myForm").reset()
      // this.setState({Prefix: ''})
      // this.setState({Suffix: ''})
    this.setState({prefix: ''})
    this.setState({suffix: ''})
    this.setState({camelCase: ''})
    this.setState({hyphen: ''})
    this.setState({underscore: ''})
    this.setState({randWord: ''})
    this.setState({randNumber: ''})
  }
  generate = (event) =>{
    if(event.target.click){ 
      this.setState({randWord: randomWords()})
      // this.setState( {prefix: this.state.randWord } )
      
      return this.state.randWord
    }
  }
  
  prefix = (event) =>{
    // console.log("prefix event")
    if(!this.state.camelCase){
      //store the random suffix 
      const random = randomWords()
      this.setState({ requestCount: + 1})
      
      
      if(!this.state.camelCase){
      this.setState({camelCase: ''})

      //display values
      this.setState( { prefix: event.target.value } )
      this.setState( { suffix: random } )
      
      //API Call
      this.prefixVar = event.target.value
      this.suffixVar = random
      return this.data(this.prefixVar, this.suffixVar)
      }else{
      this.setState( { prefix: event.target.value } )
      this.setState( { suffix: random } )
      return this.data(this.state.prefix, this.state.suffix)
      }
    }else{
      this.setState({camelCase: ''})
    }
  } // end of prefix
  
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
      
      return parseInt(randNumber)
    }
  }
  
  camelCase = (event) =>{
    var prefix = this.state.Prefix
    var suffix = this.state.Suffix
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
      if(!this.state.prefix || !this.state.suffix){
        this.setState({prefix: this.prefixVar})
        this.setState({suffix: this.suffixVar})
      }else{
        this.setState({prefix: this.state.prefix})
        this.setState({suffix: this.state.suffix})
      }
      this.setState({camelCase: ''})
    } 
  }
  
  hyphen = (event) =>{
    // this.componentDidUpdate()
    
    // if(this.state.randWord){
    //   var hyphen1 = document.querySelector(".input__container-display > span > div:nth-child(2)");
    // }
    
    // if(this.state.randNumber){
    //   var hyphen3 = document.querySelector(".input__container-display > span > div:nth-child(7)");
    // }
    
    // var hyphen2 = document.querySelector(".input__container-display > span > div:nth-child(4)");
    
    if(event.target.checked){
      this.setState({hyphen: "_"})
      
      // if(hyphen1 && this.state.randWord){
      //   hyphen1.innerHTML += `<h1 id="hyphen-1">${this.state.hyphen}</h1>`
      // }
      // if(hyphen3 && this.state.randNumber){
      //   hyphen3.innerHTML += `<h1 id="hyphen-3">${this.state.hyphen}</h1>`
      // }
      // hyphen2.innerHTML += `<h1 id="hyphen-2">${this.state.hyphen}</h1>`
      
      
      
    }
    
    if(!event.target.checked){
      this.setState({hyphen: ""})
      // if(hyphen1){
      //   var one = document.getElementById("hyphen-1");
      //   hyphen1.removeChild(one)
      // }
      // if(hyphen3){
      //   var three = document.getElementById("hyphen-3");
      //   hyphen3.removeChild(three)
      // }
      
      // var two = document.getElementById("hyphen-2");
      // hyphen2.removeChild(two)
      
      
      
      // var three = document.getElementById("hyphen");
      // hyphen3.removeChild(three)
    }
    
  }
  
  
  
  underscore = (event) =>{
    this.componentDidUpdate()
    if(this.state.randWord){
      var score1 = document.querySelector(".input__container-display > span >div:nth-child(2)"); 
    }
    if(this.state.randNumber){
      var score3 = document.querySelector(".input__container-display > span > div:nth-child(7");
    }
    var score2 = document.querySelector(".input__container-display > span > div:nth-child(4");
    
    
    if(event.target.checked){
      if(score1 && this.state.randWord){
        score1.innerHTML += `<h1 id="underscore-1">${this.state.underscore}</h1>`
      }
      if(score3 && this.state.randNumber){
        score3.innerHTML += `<h1 id="underscore-3">${this.state.underscore}</h1>`
      }
      score2.innerHTML += `<h1 id="underscore-2">${this.state.underscore}</h1>`
    }
    if(!event.target.checked){
      if(score1){
        var underscore1 = document.getElementById("underscore-1");
        score1.removeChild(underscore1)
      }
      if(score3){
        var underscore3 = document.getElementById("underscore-3");
        score3.removeChild(underscore3)
      }
      
      var underscore2 = document.getElementById("underscore-2");
      score2.removeChild(underscore2)
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
  
  
  // shouldComponentUpdate(){
  //   console.log("should componet update")
    
  //   return false
  // }
  
  
  //function that tracks the widht of the display
  componentDidUpdate(){
    // get the width of the window
    var windowWidth = window.innerWidth;
    
    // get the width of the span
    var display = document.querySelector(".input__container-display > span");
    
    // selecting the parant of the span el to change the font size
    var font = document.querySelector(".input__container-display ");
    
    //! tracks the width of the span el
    var width = display.offsetWidth;
    
    
    // if the width of the window is 414 or less than
    //   the span will recieve fon-size-75 when it reaches a width beyond 375px
    if(windowWidth <= 320 && width > 315){
      console.log("over 320")
      font.classList.add("font-size-75");
    }
    
    else if(windowWidth <= 414 && width > 375){
      console.log("over 375")
      font.classList.add("font-size-75");
    }
    
    else if(windowWidth > 414 && width > windowWidth){
      
      console.log("over windowWidth")
      font.classList.add("font-size-75");
    }
    
      
    // if the widht of the window is 415 or more
    //   the span will recieve a smaller font size when the window width var is reacheed
      
      
    
    
    
    
    
    
    
    //TODO: remove the class only when the user clears the inputs
    // if(width < 320){
    //   display.classList.remove("font-size-75")
    // }
  }
  render(){
    // console.log("Render..")
    // const prefix = this.state.Prefix
    // const suffix = this.state.Suffix
    // ?options for output
    //      word.shortdef
    //      word.meta.syns
    //      word.fl
    
    //TODO: meta.id wont always show definition.. make error handler for when prefix output 
    //toDO: does not hold a value
    const prefixOutput = this.state.Prefix.map((prefix) => {
      return prefix.meta.id})
    if(prefixOutput != ''){
      // console.log("Prefix is now output")
    }
    //!test output for suffix
    const suffixOutput = this.state.Suffix.map((suffix) => {return suffix.meta.id})
    if(suffixOutput != ''){
      // console.log("Suffix is now output")
    }
    // const selected = this.state.prefix.includes(this.state.word)
    //runs twice 
    function concat(){
      const concat = prefixOutput[0] + suffixOutput[0]
      return concat
    }
    
    const generate = () => {
      return randomWords()
    }

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
              />
              
              <Display
                // pass state into props
                prefix ={this.state.prefix}
                suffix ={this.state.suffix}
                camelCase = {this.state.camelCase}
                hyphen ={this.hyphen}
                hyphenState = {this.state.hyphen}
                generate = {this.state.randWord}
                numberClick = {!this.state.randNumber?'':this.state.randNumber}
                // underscore ={this.state.underscore}
                
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