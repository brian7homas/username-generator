//? Main npm installs
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom"
//? My Components
import Navbar from './components/Navbar'
import Header from './components/Header'
import Homeguest from './components/Homeguest'
import Footer from './components/Footer'

// ? My pages
import About from './components/About'
import Terms from './components/Terms'

function Component(){
    return(
        <BrowserRouter>
            <Header />
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Homeguest/>
                </Route>
                <Route path="/about" exact>
                    <About/>
                </Route>
                <Route path="/Term" exact>
                    <Terms/>
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
ReactDOM.render(<Component/>, document.querySelector("#app"))

if(module.hot){
    module.hot.accept()
}