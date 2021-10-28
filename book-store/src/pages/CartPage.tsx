import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { CartContent } from "../components/Cart/CartContent";

import { selectCartItems } from "../redux/Cart/CartSlice";

const CartPage: React.FC = () => {
  const cartProduct = useSelector(selectCartItems);

  return (
    <Contaienr>
      <Title>ตะกร้าสินค้า</Title>
      <CartContent produts={cartProduct} />
    </Contaienr>
  );
};

export default CartPage;

const Contaienr = styled.div`
  max-width: 1600px;

  position: relative;
  top: 70px;
  left: 0;
  z-index: 1;

  min-height: calc(100vh - 70px);

  margin: 0 auto;
  padding: 0px 10px;
  padding-bottom: 50px;

  margin-top: 50px;
`;

const Title = styled.p`
  margin: 0;

  font-size: 30px;
  font-weight: bold;
`;
