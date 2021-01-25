import React, { Component, useCallback } from "react"
import {useImmer} from 'use-immer'
// form componets
import Form from './Form'
import Display from './Display'
import Buttons from './Buttons'
import Info from './Info'

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
      
      camelCasePrefix: '',
      camelCaseSuffix: '',
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
    this.setState({Prefix: []})
    this.setState({Suffix: []})
    this.setState({prefix: ''})
    this.setState({suffix: ''})
    this.setState({hyphen: ''})
    this.setState({underscore: ''})
    this.setState({camelCasePrefix: ''})
    this.setState({camelCaseSuffix: ''})
    this.setState({randWord: ''})
    this.setState({randNumber: ''})
    this.prefixVar = ''
    this.suffixVar = ''
    
    
  }
  generate = (event) =>{
    event.preventDefault()
    if(event.target.click){
      if(this.camelPrefix && this.camelSuffix){
        return this.data( this.camelPrefix, this.camelSuffix )
      }
      // this.prefixVar = this.state.prefix
      // this.suffixVar = this.state.suffix
      // this.setState({randWord: this.prefixVar})

      // this.setState({ requestCount: + 1})
      console.log(this.prefixVar)
      console.log(this.suffixVar)
      if(this.prefixVar == '' || this.suffixVar == ''){
        this.prefixVar = this.state.prefix
        this.suffixVar = this.state.suffix
      }
      return this.data( this.prefixVar, this.suffixVar )
    }
  }
  generatePrefix = (event) =>{
    event.preventDefault()
    if(event.target.click){
      if(this.state.camelCasePrefix != ''){
        console.log("camel case is selcted")
        this.camelPrefix = randomWords()
        this.setState({camelCasePrefix:this.camelPrefix})
        this.prefixVar = this.camelPrefix
      }
      if(this.state.camelCasePrefix == ''){
        //WITHOUT CAMELCASE
        this.prefixVar = randomWords()
        this.setState({prefix: this.prefixVar})
        this.setState({ requestCount: + 1})
        //sends word to api
        // return this.data( this.prefixVar, null )
      }
      
      return this.prefixVar
      
    }
  }
  generateSuffix = (event) =>{
    event.preventDefault()
    if(event.target.click){ 
      if(this.state.camelCaseSuffix != ''){
        console.log("camel case is selcted")
        this.camelSuffix = this.capitalize(randomWords())
        
        this.setState({camelCaseSuffix:this.camelSuffix})
        this.suffixVar = this.state.camelCaseSuffix
      }
      this.suffixVar = randomWords()
      this.setState({suffix: this.suffixVar})
      // this.setState({ requestCount: + 1})
      //sends word to api
      // return this.data( null, this.suffixVar )
      return this.suffixVar
    }
  }
  prefix = (event) =>{
    // console.log("suffix event")
    this.setState({ requestCount: + 1})
    console.log(this.state.requestCount)
    this.setState( { prefix: event.target.value } )
    this.prefixVar = event.target.value
    // return this.data(this.prefixVar, null)
    return this.prefixVar
  }
  suffix = (event) =>{
    // console.log("suffix event")
    this.setState({ requestCount: + 1})
    this.setState( { suffix: event.target.value } )
    this.suffixVar = event.target.value
    // return this.data(null,this.suffixVar)
    return this.suffixVar
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
  capitalize(suffix){
    return suffix.charAt(0).toUpperCase() + suffix.slice(1);
  }
  lowerCase(prefix){
    return prefix.charAt(0).toLowerCase() + prefix.slice(1);
  }
  
  camelCaseError(){
    if(!this.state.prefix || !this.state.suffix){
      console.log('cameelCase Error')
    }
    if(!this.state.prefix){
      console.log('prefix Error')
    }
    if(!this.state.suffix){
      console.log('suffix Error')
    }
  }
  camelCase = (event) =>{
    
    if(event.target.checked){
      document.querySelector('input[name="underscore"]').checked = false
      document.querySelector('input[name="hyphen"]').checked = false
      this.setState({hyphenState: ''})
      this.setState({scoreState: ''})
      //hyphen is what is being used in display
      this.setState({hyphen: ''})
      this.setState({underscore: ''})
      
      this.camelCaseError()
      
      this.camelSuffix = this.capitalize(this.state.suffix)
      this.camelPrefix = this.lowerCase(this.state.prefix)
      

      this.setState({camelCasePrefix:this.camelPrefix})
      this.setState({camelCaseSuffix: this.camelSuffix})
      
      // this.setState({suffix: ''})
    }
  if(!event.target.checked){
    this.setState({prefix: this.prefixVar})
    this.setState({suffix: this.suffixVar})
    this.setState({camelCasePrefix: ''})
    this.setState({camelCaseSuffix: ''})
    } 
  }
  
  hyphen = (event) =>{
    if(event.target.checked){
      document.querySelector('input[name="underscore"]').checked = false
      document.querySelector('input[name="camelCase"]').checked = false
      //revert camelcase
      this.setState({prefix: this.prefixVar})
      this.setState({suffix: this.suffixVar})
      this.setState({camelCasePrefix: ''})
      this.setState({camelCaseSuffix: ''})
      
      
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
      document.querySelector('input[name="camelCase"]').checked = false
      //revert camelcase
      this.setState({prefix: this.prefixVar})
      this.setState({suffix: this.suffixVar})
      this.setState({camelCasePrefix: ''})
      this.setState({camelCaseSuffix: ''})
      
      
      this.setState({hyphen: ""})
      this.setState({underscore: "_"})
      var scoreState = this.state.underscore
      console.log(scoreState)
    }
    if(!event.target.checked){
      this.setState({underscore: ""})
    }
  }
  
  //Main api call 
  data = (prefix = null, suffix = null) =>{
    console.log(prefix)
    console.log(suffix)
    try{
      if(prefix || suffix){
        if(prefix ){
          const delay = setTimeout(()=>{
            fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${ this.prefixVar }?key=24620616-3fae-483a-91e8-8bcf9cd2e092`)
            .then(data => data.json())
            .then(response=> { 
                              this.setState({Prefix: response})
                            })  
            .then(()=>{
              this.setState({ requestCount: 0})
            })
          }, 0)
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
          }, 0)
        }
      }//end of requestCount check
      }catch(error){
        if(!this.state.prefix || prefix == '' || suffix == ''){
          this.error = 'type in the prefix field or press the generate button'
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
    const concat = prefix + suffix
    return concat
  }
  
  DisplaySize(){
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
  //function that tracks the widht of the display
  componentDidUpdate(){
    this.DisplaySize()
    this.type()
    // this.definition()
    this.prefixDefinition()
    this.suffixDefinition();
  }
  
  word(){
    const prefixName = this.state.Prefix.map((prefix) => {
      // console.log(prefix)
      return prefix.meta.id
      })
    const suffixName = this.state.Suffix.map((suffix) => {
      // console.log(suffix)
      return suffix.meta.id
      })
      if(prefixName == undefined){
        prefixName = "Something went wrong with the prefix"
      }
      if(!suffixName == null){
        suffixName = "Something went wrong with the suffix"
      }
    return prefixName[0] + ` ` + suffixName[0]
  }
  type(){
    const prefixType = this.state.Prefix.map((prefix) => {
      // console.log(prefix)
      return prefix.fl
      })
    const suffixType = this.state.Suffix.map((suffix) => {
      // console.log(suffix)
      return suffix.fl
      })
    
    return prefixType[0] + ` ` + suffixType[0]
    
  }
  
  prefixDefinition(){
    const prefixDef = this.state.Prefix.map((prefix) => {
      return prefix.shortdef
      })
    return prefixDef[0]
  }
  suffixDefinition(){
    const suffixDef = this.state.Suffix.map((suffix) => {
      return suffix.shortdef
      })
    
    return suffixDef[0]
  }
  render(){
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
              <h1 className="instructions">{ !this.state.prefix ? "type in the prefix field or hit the generate button" : this.error }</h1>
              
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
                camelCasePrefix = {this.state.camelCasePrefix}
                camelCaseSuffix = {this.state.camelCaseSuffix}
                
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
              {this.state.Prefix != '' && this.state.Suffix != '' ? 
              <Info 
                word={this.word()}
                type={this.type()}
                
                prefix={this.prefixDefinition()}
                suffix={this.suffixDefinition()}
              /> : ''}
              
              
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