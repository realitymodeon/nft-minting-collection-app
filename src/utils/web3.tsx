import React from "react";
import Web3Modal from "web3modal";
import { providers } from 'ethers'

let web3Modal: Web3Modal;

type StateType = {
    provider?: any
    web3Provider?: any
    address?: string
    chainId?: string
}

const initialState: StateType = {
    provider: null,
    web3Provider: null,
    address: undefined,
    chainId: undefined,
}

if (typeof window !== 'undefined') {
    web3Modal = new Web3Modal({
        network: 'rinkeby', // optional
        cacheProvider: true
    })
}

export const web3 = async (): Promise<string> => {
    initialState.provider = await web3Modal.connect();
    if (initialState.address == undefined)
        return ""
    else
        return initialState.address
    return ""
}