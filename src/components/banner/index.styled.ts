import styled from "styled-components";

export const Area = styled.div`
    background-color: black;
    width: 100%;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    padding: 192px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    .content {
        margin-top: 135px;
        position: relative;
    }
    
    .content .title {
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 60px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-bottom: 29px;
        position: relative;
        z-index: 2;
    }
    
    .content .title span {
        color: #FF004C;
    }
    
    .content .count {
        font-family: 'Bakbak One';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 65px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        position: relative;
        z-index: 2;
    }
    
    .content .timer {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 65px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    
    .content span {
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 65px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
    }
`

