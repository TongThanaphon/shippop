import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { TransactionForm } from "../components/Form/TransactionForm";
import { selectTotalPrice } from "../redux/Cart/CartSlice";
import { useState } from "react";

const TransactionPage: React.FC = () => {
  const totalPrice = useSelector(selectTotalPrice);
  const [shipping, setShipping] = useState(0);

  return (
    <Container>
      <Title>ชำระเงิน</Title>
      <TransactionForm
        setShipping={setShipping}
        shipping={shipping}
        totalPrice={totalPrice}
      />
    </Container>
  );
};

export default TransactionPage;

const Container = styled.div`
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
