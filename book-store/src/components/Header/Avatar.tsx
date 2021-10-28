import React from "react";
import styled from "styled-components";

interface AvatarProps {
  image: string;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { image } = props;

  return (
    <Wrapper>
      <img src={image} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50px;
  width: 50px;

  cursor: pointer;

  border-radius: 50%;

  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;
