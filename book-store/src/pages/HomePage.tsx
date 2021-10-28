import React from "react";
import styled from "styled-components";

import { ImageSlider } from "../components/Slider/ImageSlider";
import { ProductSlider } from "../components/Slider/ProductSlider";

import mockData from "../mock.json";

const ImageSliderItems = [
  {
    image: "1",
    href: "",
  },
  {
    image: "2",
    href: "",
  },
  {
    image: "3",
    href: "",
  },
];

const HomePage: React.FC = () => {
  return (
    <Container>
      <ImageSlider sources={ImageSliderItems} />
      {mockData.data && (
        <ProductSlider
          data={mockData.data}
          title="สินค้าขายดี"
          lookMoreText="ดูสินค้าขายดีทั้งหมด"
          href=""
        />
      )}
      {mockData.data && (
        <ProductSlider
          data={mockData.data}
          title="สินค้าแนะนำ"
          lookMoreText="ดูสินค้าแนะนำทั้งหมด"
          href=""
        />
      )}
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  position: relative;
  z-index: 1;

  top: 70px;

  max-width: 1600px;
  width: 100%;
  min-height: calc(100vh - 70px);

  margin: 0 auto;
  padding: 0px 10px;

  overflow: hidden;
`;
