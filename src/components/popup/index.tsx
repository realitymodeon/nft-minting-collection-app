import React from "react";

//styled
import {Area} from "./index.styled"

import Button from "../button";

type Props = {
    show: boolean;
    title?: string;
}

const Popup: React.FC<Props> = (props) => {
    if (!props.show) return null;
    return (
        <Area>
            <div className="content">
                {props.title && <h3 className="title">{props.title}</h3>}
                <Button primary onClick={() => console.log("Popup Click")}>
                
                </Button>
            </div>
        </Area>
    )
}

export default Popup;