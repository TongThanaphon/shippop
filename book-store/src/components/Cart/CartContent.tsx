import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { CartTable } from "./CartTable";
import { Button } from "../Button/Button";
import { Summarize } from "./Summarize";

import {
  ProductState,
  removeAll,
  selectTotalPrice,
} from "../../redux/Cart/CartSlice";

interface CartContentProps {
  produts: ProductState[];
}

export const CartContent: React.FC<CartContentProps> = (props) => {
  const { produts } = props;
  const { push } = useHistory();
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <Container>
      <div>
        <CartTable data={produts} />
        <ButtonContainer>
          <Button
            text="ซื้อสินค้าต่อไป"
            background="#fff"
            borderColor="#333"
            textColor="#333"
            onClick={() => push("/")}
          />
          <Button
            text="ล้างตะกร้าสินค้า"
            background="#333"
            borderColor="#fff"
            textColor="#fff"
            onClick={() => dispatch(removeAll())}
          />
        </ButtonContainer>
      </div>
      <Summarize
        totalPrice={totalPrice}
        shipping={0}
        onClick={() => push("/transaction")}
        buttonText="ไปชำระเงิน"
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;

  display: flex;

  > div:nth-child(1) {
    flex-grow: 10;
  }

  > div:nth-child(2) {
    margin-left: 30px;
  }

  @media (max-width: 1500px) {
    flex-direction: column;

    > div:nth-child(2) {
      margin-left: 0;
      margin-top: 30px;
    }
  }

  @media (max-width: 800px) {
    > div:nth-child(2) {
      width: 100%;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 30px;

  display: flex;

  width: 40%;

  > * + * {
    margin-left: 10px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
