import React from "react";

//styled
import {Area, Background} from "./index.styled"

import {Button} from "../button";

type Props = {
    show: boolean;
    close: () => void;
    title?: string;
}

const Popup: React.FC<Props> = (props) => {
    if (!props.show) return null;
    return (
        <Area>
            <Background onClick={() => props.close()}/>
            <div className="content">
                {props.title && <h3 className="title">{props.title}</h3>}
                <Button connect onClick={() => console.log("Popup Click")}>Metamask</Button>
            </div>
        </Area>
    )
}

export default Popup;