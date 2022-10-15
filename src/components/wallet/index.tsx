import React from "react";

import Popup from "../popup";

type Props = {
    show:boolean;
    close:() => void;
}

const connect = {
    title:"Connect",
    action:() => console.log("test")
}


const Wallet: React.FC<Props> = (props)=>{
    return(
        <Popup show={props.show} close={props.close} title="Connect Wallet" desc="Connect a Wallet with NFT Minting Collection" buttons={[connect]}/>
    )
}
export default Wallet;