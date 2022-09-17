import styled from "styled-components";

export const Button = styled.button<{
    connect?: boolean;
    mint?:boolean;
}>`
    font-family: 'Bakbak One';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    text-transform: uppercase;
  
  padding: ${(props) => {
    if (props.connect) return "0";
}};
  
  margin: ${(props) => {
    if (props.connect) return "0";
}};
  
  min-width: ${(props) => {
    if (props.connect) return "150px";
}};
  
  height: ${(props) => {
    if (props.connect) return "50px";
}};
  
  color: ${(props) => {
    if (props.connect) return "white";
}};
  
  border-radius: ${(props) => {
    if (props.connect) return "0";
}};
  
  border: 0.1px solid ${(props) => {
    if (props.connect) return "none";
}};
  
  background: ${(props) => {
    if (props.connect) return "rgba(255, 255, 255, 0.2)";
}};
  
  justify-content: ${(props) => {
    if (props.connect) return "space-around";
}};
  
  font-size: ${(props) => {
    if (props.connect) return "16px";
}};
  
  font-weight: ${(props) => {
    if (props.connect) return "400";
}};
  :hover {d
  }
  
  @media only screen and (max-width: 575px) {
  }
  @media only screen and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }
  @media only screen and (min-width: 1200px) and (max-width: 2000px) {
  }
`;