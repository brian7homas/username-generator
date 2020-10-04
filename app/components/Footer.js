import React from 'react'
import {Link} from 'react-router-dom'


function Header(){
    return(
            <footer>
                <article>
                    <nav>
                        <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/terms">Term</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        </ul>
                    </nav> 
                </article>
                <a href=""></a>
                <article>
                    <li>
                        <Link to=""></Link>
                    </li>
                    <li>
                        <Link to=""></Link>
                    </li>
                    <li>
                        <Link to=""></Link>
                    </li>
                </article>
            </footer>
    )
}
export default Header