import React, { useEffect } from "react"


function Container(props) {
    return (
        <div className={"container py-md-5 " + (props.wide ? '' : 'container--narrow')}>
            {props.children}
            <h1>container.js</h1>
        </div>
    )
}

export default Container