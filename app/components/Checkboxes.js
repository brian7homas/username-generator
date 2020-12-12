import React, { Children, useEffect } from "react"
// import CamelCase from './CamelCase'
// import Hyphens from './Hyphens'
// import Underscores from './Underscores'


// function bindStateChanges(){ 
//             var interests = document.querySelectorAll("[name=interest"); 
                                                        
//             for (var index = 0; index < interests.length; index++) {
//               interests[index].addEventListener("change", function(evt){
//                 var checkbox = evt.target;
//                 addToLog(checkbox.value + " changed to " + checkbox.checked);
//                 });
//               }}

function Checkboxes(props) {
  return (
    <div className="input__container-checkboxes">
      {props.children}
    </div>
    
  )
}

export default Checkboxes