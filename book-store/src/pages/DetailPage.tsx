import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import {
  add,
  ProductState,
  selectCartItems,
  edit,
} from "../redux/Cart/CartSlice";

import { DetailContent } from "../components/Detail/DetailContent";
import { DetailDescription } from "../components/Detail/DetailDescription";
import { ProductSlider } from "../components/Slider/ProductSlider";

import mockData from "../mock.json";

type DetailParams = {
  id: string;
};

const DetailPage: React.FC = () => {
  const { id } = useParams<DetailParams>();
  const [data, setData] = useState<any>(undefined);
  const dispatch = useDispatch();
  const cartProduct = useSelector(selectCartItems);

  const handleAddToCart = (amount: number) => {
    let product = {
      id,
      image: data.image,
      title: data.title,
      price: data.price.discounted,
      amount: 0,
      totalPrice: 0,
    } as ProductState;

    let find = cartProduct.find((item: any) => item.id === id);

    if (!find) {
      product.amount = amount;
      product.totalPrice = product.price * amount;
      dispatch(add({ product }));
    } else {
      product.amount = find.amount + amount;
      product.totalPrice = product.amount * product.price;
      dispatch(edit({ product }));
    }
  };

  useEffect(() => {
    const obj = mockData.data.find((item) => item.id === id);

    setData(obj);
  }, [id]);

  return (
    <Container>
      <Center>
        {data && <DetailContent {...data} onAddToCart={handleAddToCart} />}
      </Center>
      {data && (
        <DetailDescription description={data.description} title={data.title} />
      )}
      <Center>
        {mockData.data && (
          <ProductSlider
            data={mockData.data}
            title="สินค้าที่เกี่ยวข้อง"
            lookMoreText="ดูสินค้าทั้งหมด"
            href=""
          />
        )}
      </Center>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  position: relative;
  top: 70px;
  left: 0;

  z-index: 1;

  min-height: calc(100vh - 70px);

  padding: 0px 10px;
  padding-bottom: 50px;

  overflow: hidden;

  &:nth-child(2) {
    padding: 0;
  }
`;

const Center = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;

  &:nth-child(1) {
    margin-top: 50px;
    margin-bottom: 80px;
  }

  &:nth-child(3) {
    margin-top: 80px;
  }

  @media (max-width: 1600px) {
    max-width: unset;
    margin: 0 20px;
  }
`;
