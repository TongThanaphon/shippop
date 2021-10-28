import React from "react";
import styled from "styled-components";

interface GoogleIconProps {
  color?: string;
  size?: number;
  onClick?: () => void;
}

export const GoogleIcon: React.FC<GoogleIconProps> = (props) => {
  const { color, size, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="none"
        width={size}
        height={size}
      >
        <path
          fill={color}
          d="M256 8C119.1 8 8 119.1 8 256s111.1 248 248 248 248-111.1 248-248S392.9 8 256 8zm-70.7 372a124 124 0 010-248c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1s34.2 78.1 77.2 78.1c32.6 0 64.9-19.1 70.1-53.3h-70.1v-42.6h116.9a109.2 109.2 0 011.9 20.7c0 70.8-47.5 121.2-118.8 121.2zm230.2-106.2v35.5H380v-35.5h-35.5v-35.5H380v-35.5h35.5v35.5h35.2v35.5z"
        />
      </svg>
    </Wrapper>
  );
};

GoogleIcon.defaultProps = {
  color: "#333",
  size: 24,
};

const Wrapper = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
