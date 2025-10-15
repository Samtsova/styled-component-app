import { css, styled } from "styled-components";
import { MyAnimation } from "./styles/animation/animation";

type StyledBtnPropsType = {
  color?: string;
  fontSize?: string;
  btnType: "primary" | "outline";
  active?: boolean
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;

  // &:last-child {
  // background-color: #a8fc85;
  // }

  ${(props) =>
    props.btnType === "outline" &&
    css<StyledBtnPropsType>`
    
  border: 2px solid ${(props) => props.color || "#fb3f78"};
  color:  ${(props) => props.color || "#fb3f78"};
  background-color: transparent;

  &:hover {
  border-color: #4053cc;
  color: #4053cc;
  background-color: transparent;  
  }
    `}

  ${(props) =>
    props.btnType === "primary" &&
    css<StyledBtnPropsType>`
      background-color: ${(props) => props.color || "#fb3f78"};
      color: snow;

    &:hover {
    background-color: #4053cc;
  }
    `}

    ${(props) =>
    props.active &&
    css<StyledBtnPropsType>`
      box-shadow: 5px 5px 5px 5px rgba(37, 37, 44, 0.6)
  }
    `}
`;

// export const SuperBtn = styled(StyledBtn)`
//   border-radius: 5px;
//   background-color: #ffe869;
//   color: black;

//   &:hover {
//   animation: ${MyAnimation} 2s ease-in-out infinite;
//   }
// `
