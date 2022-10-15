import React from "react";

import Popup from "../popup";
import { web3 } from "../../utils/web3"

type Props = {
    show:boolean;
    close:() => void;
}

const connect = {
    title:"Connect",
    action:() => updateAddress()
}

const updateAddress = async (): Promise<void> => {
    const _address = await web3();

    console.log(_address);
}


const Wallet: React.FC<Props> = (props)=>{
    return(
        <Popup show={props.show} close={props.close} title="Connect Wallet" desc="Connect a Wallet with NFT Minting Collection" buttons={[connect]}/>
    )
}
export default Wallet;