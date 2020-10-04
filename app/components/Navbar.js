import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header>
            <section>
            <img src=""/>
            </section>
            <section>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/terms">Terms</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            </section>
        </header>
    )
}
export default Header