import React from "react";
import styled from "styled-components";

interface NavMenuItemProps {
  text: string;
  href: string;
}

export const NavMenuItem: React.FC<NavMenuItemProps> = (props) => {
  const { text, href } = props;

  return (
    <Wrapper href={href}>
      <span>{text}</span>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  cursor: pointer;

  > span {
    position: relative;

    font-size: 18px;

    &:before {
      content: "";

      background-color: #333;

      height: 2px;
      width: auto;

      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;

      opacity: 0;
      visibility: hidden;

      transform: scaleX(0);
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }

  &:hover {
    > span:before {
      opacity: 1;
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;
