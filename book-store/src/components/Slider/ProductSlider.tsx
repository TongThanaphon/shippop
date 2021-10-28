import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProductCard } from "../Cards/ProductCard";

interface ProductSliderProps {
  data: any;
  title: string;
  lookMoreText: string;
  href: string;
}

export const ProductSlider: React.FC<ProductSliderProps> = (props) => {
  const { data, title, lookMoreText, href } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Title>
        <p>{title}</p>
        <a href={href}>{lookMoreText}</a>
      </Title>
      <Carousel {...settings}>
        {data &&
          data.map((d: any) => (
            <Link key={d.id} to={`/detail/${d.id}`}>
              <ProductCard
                title={d.title}
                quantity={d.quantity}
                review={d.review}
                price={d.price}
                image={d.image}
              />
            </Link>
          ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

const Carousel = styled(Slider)`
  height: 500px;

  margin-top: 10px;

  > .slick-list {
    padding: 10px;
  }

  > button {
    height: 100%;
    width: 5vw;

    z-index: 1;
  }

  > button:before {
    font-size: 30px;
  }

  > .slick-prev:before,
  > .slick-next:before {
    color: black;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > p {
    margin: 0;

    color: #333;
    font-size: 24px;
    font-weight: bold;
  }

  > a {
    text-decoration: underline;
  }
`;
