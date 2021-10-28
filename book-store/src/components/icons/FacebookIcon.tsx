import React from "react";
import styled from "styled-components";

interface FacebookIconProps {
  color?: string;
  size?: number;
  onClick?: () => void;
}

export const FacebookIcon: React.FC<FacebookIconProps> = (props) => {
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
          d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
        />
      </svg>
    </Wrapper>
  );
};

FacebookIcon.defaultProps = {
  color: "#333",
  size: 24,
};

const Wrapper = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
