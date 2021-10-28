import React from "react";
import styled from "styled-components";

interface PenIconProps {
  color?: string;
  size?: number;
  onClick?: () => void;
}

export const PenIcon: React.FC<PenIconProps> = (props) => {
  const { color, size, onClick } = props;

  return (
    <Wrapper onClick={onClick}>
      <svg viewBox="0 0 512 512" fill="none" width={size} height={size}>
        <path
          fill={color}
          d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
        />
      </svg>
    </Wrapper>
  );
};

PenIcon.defaultProps = {
  color: "#333",
  size: 24,
};

const Wrapper = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
