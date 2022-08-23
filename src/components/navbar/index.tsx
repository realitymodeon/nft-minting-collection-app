import React from "react";
import {Link} from "react-router-dom";
//styled
import {Header} from "./index.styled";

const Navbar = () => {
    return(
        <Header>
            <div className="container">
                <div className="row">
                    <div className="nav-left">

                    </div>
                    <div className="nav-right">
                        <div className="links">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">About</Link>
                                </li>
                                <li>
                                    <Link to="/">Roadmap</Link>
                                </li>
                                <li>
                                    <Link to="/">Team</Link>
                                </li>
                                <li>
                                    <Link to="/">Faq</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="items">
                            
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default Navbar;