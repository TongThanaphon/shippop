import React from "react";
import styled from "styled-components";

interface ButtonProps {
  icon?: any;
  text: string;
  textColor?: string;
  background?: string;
  borderColor?: string;
  width?: string;
  onClick?: () => void;
  type?: "submit" | "button";
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    type,
    icon,
    text,
    textColor,
    background,
    borderColor,
    width,
    onClick,
  } = props;

  return (
    <ButtonWrapper
      textColor={textColor}
      borderColor={borderColor}
      background={background}
      width={width}
      onClick={onClick}
      type={type}
    >
      {icon && <>{icon}</>}
      <p>{text}</p>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  textColor: "#fff",
  background: "#0156ff",
  borderColor: "transparent",
  width: "100%",
  type: "button",
};

const ButtonWrapper = styled.button<{
  textColor?: string;
  borderColor?: string;
  background?: string;
  width?: string;
}>`
  border-radius: 50px;
  border: 2px solid ${(p) => p.borderColor};
  background-color: ${(p) => p.background};

  padding: 10px 15px;

  width: ${(p) => p.width};

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    margin-right: 10px;
  }

  > p {
    margin: 0;

    font-weight: bold;
    font-size: 20px;
    color: ${(p) => p.textColor};
  }
`;
