import React from "react";
import {Area} from "./index.styled";

const Banner = () => {
    return(
        <Area>
            <div className="container">
                <div className="row">
                    <div className="content">
                        <h2 className="title">
                            Public Sale <span>Live !</span>
                        </h2>
                        <h3 className="count">
                            <span className="count">999</span>
                            / 999 MINTED
                        </h3>
                        <h4 className="timer">
                            <span>TIME LEFT </span>
                             9 : 20 : 38
                        </h4>
                    </div>
                </div>
            </div>
        </Area>
    )
}

export default Banner;