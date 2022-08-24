import React from "react";
import {Link} from "react-router-dom";

//styled
import {Header} from "./index.styled";


import Popup from "../popup/index"
type PopupButton = {
    action:() => void;
}

const Navbar = () => {

    const redirect = {
        title:"Redirect",
        action:() => console.log("Popup Click1")
    }

    const redirect2 = {
        title:"Redirect2",
        action:() => console.log("Popup Click2")
    }

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
                            <Popup show={true} title={"Connect Wallet"}  buttons={[redirect, redirect2]}></Popup>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
    )
}

export default Navbar;