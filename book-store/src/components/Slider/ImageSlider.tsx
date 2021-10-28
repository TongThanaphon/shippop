import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageSliderProps {
  sources: { image: string; href: string }[];
}

export const ImageSlider: React.FC<ImageSliderProps> = (props) => {
  const { sources } = props;

  const settings = {
    dots: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      {sources.map((item, index) => (
        <Card key={index}>
          <CardContent href={item.href}>{item.image}</CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  > button {
    height: 100%;
    width: 8vw;

    z-index: 1;

    opacity: 0;

    &:hover {
      opacity: 1;

      transition: opacity 0.2s ease 0s;
    }
  }

  > button:before {
    font-size: 30px;
  }
`;

const Card = styled.div`
  cursor: pointer;
`;

const CardContent = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 500px;

  background-color: #c4c4c4;
`;
