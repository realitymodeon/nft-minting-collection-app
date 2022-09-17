import styled from "styled-components";

export const Header = styled.header`
    font-family: 'Bakbak One';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    margin-top: 1px;
    height: 90px;
    z-index: 5;
    
    .nav-left {
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .nav-right {
        width: 85%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .nav-right .links {
        margin-left: 65px;
        margin-right: 96px;
        max-width: 514px;
        min-width: 409px;
        width: 100%;
    }
    
    .nav-right .links ul {
        margin-top: 1rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        list-style:none;
    }
    
    .nav-right .links ul li {
        cursor: pointer;
    }
    
    .nav-right .links ul li a {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        text-transform: uppercase;
        color: white;
    }
`