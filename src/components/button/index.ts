import styled from "styled-components";

const Button = styled.button<{
    primary?: boolean;
    secondary?: boolean;
    highlight?: boolean;
    tertiary?: boolean;
    quaternary?: boolean;
    danger?: boolean;
    small?: boolean;
    reveal?:boolean;
    largeWallet?: boolean;
    smallSocial?:boolean;
    largeDiscord?:boolean;
    largeOpenSea?:boolean;
}>`
  font-family: var(--body-font) !important;
  align-items: center;
  outline: none;
  display: inline-flex;
  transition: all 0.3s;
  cursor: pointer;
  
  padding: ${(props) => {
    if (props.primary) return "0";
    if (props.secondary) return "0";
    if (props.tertiary) return "0";
    if (props.quaternary) return "0";
    if (props.highlight) return "0";
    if (props.danger) return "0";
    if (props.reveal) return "1rem";
    if (props.largeWallet) return "0";
    if (props.smallSocial) return "0.375rem";
    if (props.largeDiscord) return "0";
    if (props.largeOpenSea) return "0";
}};
  margin: ${(props) => {
    if (props.primary) return "0";
    if (props.primary) return "0";
    if (props.secondary) return "0";
    if (props.tertiary) return "0";
    if (props.quaternary) return "0";
    if (props.highlight) return "0";
    if (props.danger) return "0";
    if (props.reveal) return "0";
    if (props.largeWallet) return "0";
    if (props.smallSocial) return "0.375rem";
    if (props.largeDiscord) return "0 10px 0 0";
    if (props.largeOpenSea) return "0 10px 0 0";
}};
  
  width: ${(props) => {
    if (props.primary) return "calc(100% - 59px)";
    if (props.primary) return "calc(100% - 59px)";
    if (props.secondary) return "calc(100% - 59px)";
    if (props.tertiary) return "calc(100% - 59px)";
    if (props.quaternary) return "calc(100% - 59px)";
    if (props.highlight) return "calc(100% - 59px)";
    if (props.danger) return "calc(100% - 59px)";
    if (props.reveal) return "48%";
    if (props.largeWallet) return "calc(100% - 59px)";
    if (props.smallSocial) return "auto";
    if (props.largeDiscord) return "calc(100% - 59px)";
    if (props.largeOpenSea) return "calc(100% - 59px)";
}};
  
  height: ${(props) => {
    if (props.primary) return "44px";
    if (props.primary) return "44px";
    if (props.secondary) return "44px";
    if (props.tertiary) return "44px";
    if (props.quaternary) return "44px";
    if (props.highlight) return "44px";
    if (props.danger) return "44px";
    if (props.largeWallet) return "48px";
    if (props.largeDiscord) return "48px";
    if (props.largeOpenSea) return "48px";
}};
  
  color: ${(props) => {
    if (props.primary) return "white";
    if (props.secondary) return "white";
    if (props.tertiary) return "white";
    if (props.quaternary) return "white";
    if (props.highlight) return "var(--background-primary)";
    if (props.danger) return "var(--background-primary)";
    if (props.reveal) return "#ECEFF1"
    if (props.largeWallet) return "white";
    if (props.largeDiscord) return "white";
    if (props.largeOpenSea) return "white";
    return "var(--plain-dark)";
}};
  
  border-radius: ${(props) => {
    if (props.primary) return "0.5rem";
    if (props.secondary) return "0.5rem";
    if (props.tertiary) return "0.5rem";
    if (props.quaternary) return "0.5rem";
    if (props.highlight) return "0.5rem";
    if (props.danger) return "0.5rem";
    if (props.reveal) return ".5rem .5rem 1.25rem .5rem";
    if (props.largeWallet) return "0.5rem";
    if (props.smallSocial) return "0.5rem";
    if (props.largeDiscord) return "0.5rem";
    if (props.largeOpenSea) return "0.5rem";
    return "var(--plain-dark)";
}};
  
  border: 1px solid ${(props) => {
    if (props.primary) return "rgba(255,255,255,1)";
    if (props.secondary) return "rgba(255,255,255,1)";
    if (props.tertiary) return "rgba(255,255,255,1)";
    if (props.quaternary) return "rgba(255,255,255,1)";
    if (props.highlight) return "var(--highlight-shadow)";
    if (props.danger) return "var(--danger-shadow)";
    if (props.reveal) return "rgba(0,0,0,.04)";
    if (props.largeWallet) return "rgba(255,255,255,1)";
    if (props.largeDiscord) return "rgba(255,255,255,1)";
    if (props.largeOpenSea) return "rgba(255,255,255,1)";
    return "var(--plain-shadow)";
}};
  
  background-image: ${(props) => {
    if (props.smallSocial) return "linear-gradient(to top left,var(--green-color),var(--shamrock-color,rgb(255 255 0 / 39%)));"
    if (props.largeDiscord) return "linear-gradient(to bottom right,#434bba,#6d3a88,rgba(67,75,186,3));"
    if (props.largeOpenSea) return "linear-gradient(to bottom right,#30b3e3,#2c84d6,rgba(32,129,226,3));"
}
};
  
  background-color: ${(props) => {
    if (props.primary) return "transparent";
    if (props.secondary) return "transparent";
    if (props.tertiary) return "transparent";
    if (props.quaternary) return "transparent";
    if (props.highlight) return "var(--highlight)";
    if (props.danger) return "var(--danger)";
    if (props.reveal) return "#263238";
    if (props.largeWallet) return "transparent";
    return "var(--plain)";
}};
  justify-content: ${(props) => {
    if (props.primary) return "space-around";
    if (props.primary) return "space-around";
    if (props.secondary) return "space-around";
    if (props.tertiary) return "space-around";
    if (props.quaternary) return "space-around";
    if (props.highlight) return "space-around";
    if (props.danger) return "space-around";
    if (props.reveal) return "";
    if (props.largeWallet) return "space-around";
    if (props.largeDiscord) return "space-around";
    if (props.largeOpenSea) return "space-around";
}};
  font-size: ${(props) => {
    if (props.primary) return "1rem";
    if (props.largeWallet) return "1rem";
    if (props.largeDiscord) return "1rem";
    if (props.largeOpenSea) return "1rem";
}};
  
  span {
    font-family: var(--body-font);
    font-weight: 600;
    padding-left: 0.5rem;
  }
  i {
    display: flex;
    padding: 0.375rem;
  }
  i::before {
    font-size: 20px;
  }
  :hover {
    -webkit-box-shadow: 0 10px 25px linear-gradient(135deg, var(--green-color) 10%, var(--pine-color));
    box-shadow: ${(props) => {
    if (props.primary) return "0 0 32px rgb(255 255 0 / 39%)";
    if (props.secondary) return "0 10px 25px linear-gradient(135deg, var(--green-color) 10%, var(--pine-color))";
    if (props.tertiary) return "0 10px 25px linear-gradient(135deg, var(--green-color) 10%, var(--pine-color))";
    if (props.quaternary) return "0 10px 25px linear-gradient(135deg, var(--green-color) 10%, var(--pine-color))";
    if (props.highlight) return "0 10px 25px linear-gradient(135deg, var(--green-color) 10%, var(--pine-color))";
    if (props.danger) return "0 10px 25px linear-gradient(135deg, var(--green-color) 10%, var(--pine-color))";
    if (props.reveal) return "0 10px 25px linear-gradient(135deg, var(--green-color) 10%, var(--pine-color))";
    if (props.largeWallet) return "0 0 32px rgb(255 255 0 / 39%)";
    if (props.smallSocial) return "0 0 32px rgb(255 255 0 / 39%)";
    if (props.largeDiscord) return "0 0 32px rgb(255 255 0 / 39%)";
    if (props.largeOpenSea) return "0 0 32px rgb(255 255 0 / 39%)";
}};
    ${(props) => {
    if (props.primary) return "var(--primary-shadow)";
    if (props.secondary) return "var(--secondary-shadow)";
    if (props.highlight) return "var(--highlight-shadow)";
    if (props.danger) return "var(--danger-shadow)";
    if (props.largeWallet) return "var(--primary-shadow)";
    return "var(--plain-shadow)";
}
};
    transform: translateY(-0.1rem);
  }
  :active {
    box-shadow: 0 0 0 0 ${(props) => {
    if (props.primary) return "var(--primary-shadow)";
    if (props.secondary) return "var(--secondary-shadow)";
    if (props.highlight) return "var(--highlight-shadow)";
    if (props.danger) return "var(--danger-shadow)";
    if (props.largeWallet) return "var(--primary-shadow)";
}};
    transform: translateY(0.2rem);
  }
  :disabled {
    cursor: not-allowed;
    background-color: #cccccc;
    color: var(--black-color);
    border: 2px solid var(#999999);
    box-shadow: 0 0.2rem 0 0 var(--plain-shadow);
  }
  
  @media only screen and (max-width: 575px) {
    
    width: ${(props) => {
    if (props.largeWallet) return "118px";
    if (props.largeDiscord) return "118px";
    if (props.largeOpenSea) return "118px";
}};
    height: ${(props) => {
    if (props.largeWallet) return "35px";
    if (props.largeDiscord) return "35px";
    if (props.largeOpenSea) return "35px";
}};
    
    border-radius: ${(props) => {
    if (props.primary) return "0.5rem";
    if (props.largeWallet) return "0.5rem";
}};
    span {
      margin: ${(props) => {
    if (props.largeDiscord) return "0.2rem 0 0 0";
    if (props.largeOpenSea) return "0.2rem 0 0 0";
}};
      font-size: ${(props) => {
    if (props.largeWallet) return "0.7rem";
    if (props.largeDiscord) return "0.7rem";
    if (props.largeOpenSea) return "0.7rem";
}};
    }
    i::before {
      padding-right: ${(props) => {
    if (props.primary) return "0";
}};
    }
    
  }
  
  @media only screen and (max-width: 767px) {
    i::before {
      padding-right: ${(props) => {
    if (props.primary) return "0";
}};
    }
    
    width: ${(props) => {
    if (props.largeWallet) return "118px";
    if (props.largeDiscord) return "118px";
    if (props.largeOpenSea) return "118px";
}};
    
    height: ${(props) => {
    if (props.largeWallet) return "35px";
    if (props.largeDiscord) return "35px";
    if (props.largeOpenSea) return "35px";
}};
    
    font-size: ${(props) => {
    if (props.largeWallet) return "1rem";
    if (props.largeDiscord) return "1rem";
    if (props.largeOpenSea) return "1rem";
}};
    
    border-radius: ${(props) => {
    if (props.primary) return "0.5rem";
    if (props.largeWallet) return "0.5rem";
}};
    
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }
  @media only screen and (min-width: 1200px) and (max-width: 2000px) {
    i::before {
      font-size: 20px;
      margin: ${(props) => {
    if (props.largeWallet) return "0.3rem 0 0 0";
}};
    }
  }
`;

export default Button;